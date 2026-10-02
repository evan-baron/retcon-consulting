export interface Service {
	title: string;
	summary: string;
	id: 'consulting' | 'development' | 'design';
	points: string[];
	href?: string;
}

export const services: Service[] = [
	{
		title: 'Consulting',
		summary: 'Expert guidance on positioning, go-to-market, and sales.',
		id: 'consulting',
		points: [
			'Product positioning and go-to-market messaging',
			'Technical sales enablement and client onboarding workflows',
			'Mapping product features to buyer pain points to find product-market fit',
			'Launch strategy for new products and features',
			'Coaching for sales and product teams on discovery and communication',
		],
	},
	{
		title: 'Web Development',
		summary: 'Custom, high-performance websites built to grow with you.',
		id: 'development',
		href: '/development',
		points: [
			'Custom websites with interactive content',
			'Full-stack architecture built for speed, scale, and easy maintenance',
			'Modern stacks: React, Next.js, TypeScript, and Node',
			'Accounts, auth, databases, and integrations like Auth0, OAuth, and the Gmail API',
			'Accessibility and SEO best practices from day one',
		],
	},
	{
		title: 'Web Design',
		summary: 'Clear, conversion-focused design that fits your brand.',
		id: 'design',
		points: [
			'UI design tailored to your brand and your customers',
			'Color systems, typography, and visual language',
			'User-first UX that simplifies the journey',
			'Responsive layouts for every screen and device',
		],
	},
];

export const about = {
	name: 'Evan Baron',
	role: 'Founder',
	bio: [
		'Evan Baron is the founder of Retcon Consulting, a digital strategy and development firm helping startups, founders, and growing businesses navigate the digital landscape.',
		'With 10+ years in technical sales and digital transformation, Evan pairs commercial acumen with hands-on product execution. He has led cross-functional initiatives across SaaS, martech, and eCommerce, bridging engineering, design, and sales to deliver scalable, results-driven solutions.',
		'His work spans product strategy, UX design, and full-stack development.',
	],
};
