import type { Metadata } from 'next';
import CaseStudy from '@/components/CaseStudy/CaseStudy';
import { spokeAndCircle } from '@/lib/content/spokeAndCircle';
import { pageMetadata } from '@/lib/seo';

// With the " | Retcon Consulting" suffix this stays at ~59 characters, under Google's cutoff
const title = 'Web App Redesign: Spoke & Circle';
const description = `${spokeAndCircle.summary} See the before and after.`;

export const metadata: Metadata = pageMetadata({
	title,
	description,
	path: `/work/${spokeAndCircle.slug}`,
	image: {
		url: '/work/spoke-and-circle/og.jpg',
		width: 1200,
		height: 630,
		alt: 'The redesigned Spoke & Circle home page',
	},
});

export default function SpokeAndCircleCaseStudy() {
	return <CaseStudy content={spokeAndCircle} />;
}
