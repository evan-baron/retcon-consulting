import type { Metadata } from 'next';
import { site } from '@/lib/site';

/** Default share image (1200x630) used whenever a page doesn't supply its own. */
export const defaultOgImage = {
	url: '/og-image.jpg',
	width: 1200,
	height: 630,
	alt: `${site.name}: web development, design, and product strategy`,
};

type Options = {
	/** Page title without the brand; the layout's title template adds " | Retcon Consulting" */
	title: string;
	description: string;
	path: string;
	image?: typeof defaultOgImage;
};

/**
 * Page metadata with the social tags filled in completely.
 * Next replaces (not merges) a layout's `openGraph` when a page defines its own, so every page
 * that sets one has to carry the image, type, and site name itself.
 */
export function pageMetadata({ title, description, path, image = defaultOgImage }: Options): Metadata {
	const fullTitle = `${title} | ${site.name}`;
	return {
		title,
		description,
		alternates: { canonical: path },
		openGraph: {
			title: fullTitle,
			description,
			url: path,
			siteName: site.name,
			type: 'website',
			locale: 'en_US',
			images: [image],
		},
		twitter: {
			card: 'summary_large_image',
			title: fullTitle,
			description,
			images: [image.url],
		},
	};
}
