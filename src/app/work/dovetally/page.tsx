import type { Metadata } from 'next';
import CaseStudy from '@/components/CaseStudy/CaseStudy';
import { dovetally } from '@/lib/content/dovetally';
import { pageMetadata } from '@/lib/seo';

// With the " | Retcon Consulting" suffix this stays under Google's cutoff
const title = 'Landing Page UX Redesign: Dovetally';
const description = `${dovetally.summary} See the before and after.`;

export const metadata: Metadata = pageMetadata({
	title,
	description,
	path: `/work/${dovetally.slug}`,
	image: {
		url: '/work/dovetally/og.jpg',
		width: 1200,
		height: 630,
		alt: 'The redesigned Dovetally home page',
	},
});

export default function DovetallyCaseStudy() {
	return <CaseStudy content={dovetally} />;
}
