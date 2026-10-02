import type { Metadata, Viewport } from 'next';
import { Instrument_Sans, DM_Mono } from 'next/font/google';
import './globals.scss';

import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { site } from '@/lib/site';

const instrument = Instrument_Sans({
	variable: '--font-instrument',
	subsets: ['latin'],
	display: 'swap',
});

const dmMono = DM_Mono({
	variable: '--font-dm-mono',
	subsets: ['latin'],
	weight: ['400', '500'],
	display: 'swap',
});

const title = 'Retcon Consulting | Web Development, Design & Product Strategy';

export const metadata: Metadata = {
	metadataBase: new URL(site.url),
	title: { default: title, template: `%s | ${site.name}` },
	description: site.description,
	applicationName: site.name,
	authors: [{ name: site.founder }],
	creator: site.name,
	openGraph: {
		title,
		description: site.description,
		url: site.url,
		siteName: site.name,
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: `${site.name}: web development, design, and product strategy`,
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title,
		description: site.description,
		images: ['/og-image.jpg'],
	},
	robots: { index: true, follow: true },
	verification: {
		google: 'CiK0ImrkZ7i1sXmFFoupE_cg-gqJQgdWnOVt9n7LOzM',
	},
};

export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1,
	themeColor: '#ffffff',
};

const structuredData = {
	'@context': 'https://schema.org',
	'@type': 'ProfessionalService',
	name: site.name,
	description: site.description,
	url: site.url,
	email: site.email,
	image: `${site.url}/og-image.jpg`,
	founder: { '@type': 'Person', name: site.founder },
	address: {
		'@type': 'PostalAddress',
		addressLocality: 'Denver',
		addressRegion: 'CO',
		postalCode: '80202',
		addressCountry: 'US',
	},
	areaServed: 'US',
	serviceType: ['Web Development', 'Web Design', 'Product Strategy Consulting'],
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang='en' className={`${instrument.variable} ${dmMono.variable}`}>
			<body>
				<script
					type='application/ld+json'
					dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
				/>
				<a href='#main' className='skip-link'>
					Skip to content
				</a>
				<Header />
				<main id='main'>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
