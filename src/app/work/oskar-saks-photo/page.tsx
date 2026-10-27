import type { Metadata } from 'next';
import CaseStudy from '@/components/CaseStudy/CaseStudy';
import { oskarSaks } from '@/lib/content/oskarSaks';
import { pageMetadata } from '@/lib/seo';

// With the " | Retcon Consulting" suffix this stays at ~59 characters, under Google's cutoff
const title = 'Photography Website Redesign: Oskar Saks';
const description = `${oskarSaks.summary} See the before and after.`;

export const metadata: Metadata = pageMetadata({
	title,
	description,
	path: `/work/${oskarSaks.slug}`,
	image: {
		url: '/work/oskar-saks-photo/og.jpg',
		width: 1200,
		height: 630,
		alt: 'The redesigned Oskar Saks Photo home page',
	},
});

export default function OskarSaksCaseStudy() {
	return <CaseStudy content={oskarSaks} snowOn='home' />;
}
