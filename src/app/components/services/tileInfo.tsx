export interface TileData {
	title: string;
	image: string;
	imageBackground?: boolean; // Optional, used for styling
	alt: string;
	summary: string;
	details: string[];
}

export const tileData: TileData[] = [
	{
		title: 'Consulting',
		image: '/consulting-rafiki.svg',
		imageBackground: true,
		alt: 'Consulting services',
		summary: 'Expert advice to guide your business strategy.',
		details: [
			"Define product <span style='font-weight:bold;'>positioning</span> and GTM <span style='font-weight:bold;'>messaging</span>",
			"Develop technical <span style='font-weight:bold;'>sales enablement materials</span> and new client <span style='font-weight:bold;'>onboarding workflows</span>",
			"Align product features to buyer pain points to identify <span style='font-weight:bold;'>product-market fit</span>",
			"Create <span style='font-weight:bold;'>launch strategies</span> for new products or features",
			"Coach sales and product teams on <span style='font-weight:bold;'>discovery</span> and<span style='font-weight:bold;'>communication</span>",
		],
	},
	{
		title: 'Development',
		image: '/coding-bro.svg',
		alt: 'Development services',
		summary: 'Custom software solutions tailored to your needs.',
		details: [
			"Beautifully designed <span style='font-weight:bold;'>custom websites</span> with <span style='font-weight:bold;'>interactive content</span>",
			"Full-stack architecture built for <span style='font-weight:bold;'>speed</span>, <span style='font-weight:bold;'>scalability</span>, and <span style='font-weight:bold;'>easy maintenance</span>",
			"End-to-end solutions from <span style='font-weight:bold;'>concept</span> to <span style='font-weight:bold;'>reality</span> with modern tech stacks like <span style='font-weight:bold;'>React</span>, <span style='font-weight:bold;'>Next.js</span>, and <span style='font-weight:bold;'>Node</span>",
			"Performance-optimized code with a focus on <span style='font-weight:bold;'>accessibility</span> and <span style='font-weight:bold;'>SEO best practices</span>",
		],
	},
	{
		title: 'Design',
		image: '/design-tools-rafiki.svg',
		alt: 'Design services',
		summary: 'Creative designs that enhance user experience.',
		details: [
			"Modern, <span style='font-weight:bold;'>conversion-focused</span> UI design tailored to your brand",
			"Custom <span style='font-weight:bold;'>color systems</span>, <span style='font-weight:bold;'>typography</span>, and <span style='font-weight:bold;'>visual elements</span> for cohesive branding",
			"User-first UX that <span style='font-weight:bold;'>simplifies the user journey</span> and <span style='font-weight:bold;'>boosts engagement</span>",
			"Responsive layouts <span style='font-weight:bold;'>optimized for every screen and device</span>",
			"Custom visuals and interactions that <span style='font-weight:bold;'>bring your page to life</span>",
		],
	},
];
