import type { Metadata, Viewport } from 'next';
import { IBM_Plex_Mono, Fredericka_the_Great, Roboto } from 'next/font/google';
import './reset.css';
import './globals.scss';

// Context
import { ContextProvider } from './context/AppContext';

const ibmPlexMono = IBM_Plex_Mono({
	variable: '--font-ibm-plex-mono',
	weight: ['400', '500', '600', '700'],
	subsets: ['latin'],
});

const frederickaTheGreat = Fredericka_the_Great({
	variable: '--font-fredericka-the-great',
	weight: '400',
	subsets: ['latin'],
});

const roboto = Roboto({
	variable: '--font-roboto',
	weight: ['400', '500', '700'],
	subsets: ['latin'],
});

export const metadata: Metadata = {
	metadataBase: new URL('https://www.retconconsulting.com'),
	title: 'Retcon Consulting',
	description: 'Tech-focused consulting services for your business needs',

	openGraph: {
		title: 'Retcon Consulting - Tech-Focused Business Solutions',
		description:
			'We help startups, entrepreneurs, and innovators move forward with purpose through design, product strategy, and creative problem-solving.',
		url: 'https://www.retconconsulting.com',
		siteName: 'Retcon Consulting',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Retcon Consulting - Tech-Focused Business Solutions',
			},
		],
		locale: 'en_US',
		type: 'website',
	},

	twitter: {
		card: 'summary_large_image',
		title: 'Retcon Consulting - Tech-Focused Business Solutions',
		description:
			'We help startups, entrepreneurs, and innovators move forward with purpose through design, product strategy, and creative problem-solving.',
		images: ['/og-image.jpg'],
	},

	keywords: [
		'tech consulting',
		'startup consulting',
		'product strategy',
		'web development',
		'business solutions',
		'sales coaching',
		'retcon consulting',
		'denver consulting',
	],
	authors: [{ name: 'Retcon Consulting' }],
	creator: 'Retcon Consulting',
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},

	icons: [
		{
			url: '/favicon.ico',
			type: 'image/x-icon',
		},
		{
			url: '/favicon-16x16.png',
			type: 'image/png',
			sizes: '16x16',
		},
		{
			url: '/favicon-32x32.png',
			type: 'image/png',
			sizes: '32x32',
		},
		{
			url: '/android-chrome-192x192.png',
			type: 'image/png',
			sizes: '192x192',
		},
		{
			url: '/android-chrome-512x512.png',
			type: 'image/png',
			sizes: '512x512',
		},
	],
};

const structuredData = {
	'@context': 'https://schema.org',
	'@type': 'ProfessionalService',
	name: 'Retcon Consulting',
	description:
		'Tech-focused consulting services for startups and entrepreneurs',
	url: 'https://www.retconconsulting.com',
	address: {
		'@type': 'PostalAddress',
		addressCountry: 'USA',
		addressLocality: 'Denver',
		addressRegion: 'CO',
		postalCode: '80202',
	},
	serviceType: ['Business Consulting', 'Web Development', 'Product Strategy'],
	areaServed: 'USA',
	image: 'https://www.retconconsulting.com/og-image.jpg',
};

export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<head>
				<script
					type='application/ld+json'
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(structuredData),
					}}
				/>
			</head>
			<body
				className={`${ibmPlexMono.variable} ${roboto.variable} ${frederickaTheGreat.variable}`}
			>
				<ContextProvider>{children}</ContextProvider>
			</body>
		</html>
	);
}
