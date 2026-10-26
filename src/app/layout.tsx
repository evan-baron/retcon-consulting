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

// Kept under ~60 characters so Google doesn't truncate it in results
const title = 'Retcon Consulting | Web Development, Design & Strategy';

export const metadata: Metadata = {
	metadataBase: new URL(site.url),
	icons: {
		icon: [
			{ url: '/favicon.ico', sizes: 'any' },
			{ url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
			{ url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
		],
		apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
	},
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
	logo: `${site.url}/apple-touch-icon.png`,
	sameAs: [site.linkedin],
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
