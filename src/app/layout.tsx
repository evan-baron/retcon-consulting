import type { Metadata } from 'next';
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
	title: 'Retcon Consulting',
	description: 'Tech-focused consulting services for your business needs',
	viewport: {
		width: 'device-width',
		initialScale: 1,
	},
	manifest: '/manifest.json',
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

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={`${ibmPlexMono.variable} ${roboto.variable} ${frederickaTheGreat.variable}`}
			>
				<ContextProvider>{children}</ContextProvider>
			</body>
		</html>
	);
}
