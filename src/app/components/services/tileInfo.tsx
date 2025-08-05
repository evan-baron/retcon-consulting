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
			"Coach sales and product teams on <span style='font-weight:bold;'>discovery</span> and <span style='font-weight:bold;'>communication</span>",
		],
	},
	{
		title: 'Web Development',
		image: '/coding-bro.svg',
		alt: 'Development services',
		summary: 'Custom software solutions tailored to your needs.',
		details: [
			"Intuitively built <span style='font-weight:bold;'>custom websites</span> with <span style='font-weight:bold;'>interactive content</span>",
			"Full-stack architecture built for <span style='font-weight:bold;'>speed</span>, <span style='font-weight:bold;'>scalability</span>, and <span style='font-weight:bold;'>easy maintenance</span>",
			"End-to-end solutions from <span style='font-weight:bold;'>concept</span> to <span style='font-weight:bold;'>reality</span> with modern tech stacks like <span style='font-weight:bold;'>React</span>, <span style='font-weight:bold;'>Next.js</span>, and <span style='font-weight:bold;'>Node</span>",
			"Performance-optimized code with a focus on <span style='font-weight:bold;'>accessibility</span> and <span style='font-weight:bold;'>SEO best practices</span>",
		],
	},
	{
		title: 'Web Design',
		image: '/design-tools-rafiki.svg',
		imageBackground: true,
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
	{
		title: 'Sales Methodology',
		image: '/thinking.webp',
		alt: 'Design services',
		// summary:
		// 	'Unlock deeper insights and close gaps through strategic discovery.',
		summary: 'Optimize your discovery to get the most out of your meetings.',
		details: [
			"Master <span style='font-weight:bold;'>discovery</span> to surface buyer pain, urgency, and decision-making drivers",
			"Craft <span style='font-weight:bold;'>interview frameworks</span> to uncover unspoken needs and objections early",
			"Improve cross-functional alignment with <span style='font-weight:bold;'>clarity-focused questioning</span> that drives next steps",
			"Coach teams on how to <span style='font-weight:bold;'>ask better questions</span>, <span style='font-weight:bold;'>listen actively</span>, and <span style='font-weight:bold;'>drive momentum</span>",
		],
	},
	{
		title: 'Personal Coaching',
		image: '/coaching-scaled.webp',
		alt: 'Coaching services',
		summary: '1-on-1 guidance to sharpen your thinking and achieve your goals.',
		// summary: 'Personal coaching to elevate your skills and achieve your goals.',
		details: [
			"Clarify your <span style='font-weight:bold;'>goals</span> and build an action plan to <span style='font-weight:bold;'>move forward</span>",
			"Improve your <span style='font-weight:bold;'>executive communication</span> across product, sales, and design teams",
			"Level up your <span style='font-weight:bold;'>strategic thinking</span> around product, growth, and technical direction",
			"Navigate <span style='font-weight:bold;'>career pivots</span> or <span style='font-weight:bold;'>transitions</span> with confidence",
			"Get unstuck with <span style='font-weight:bold;'>personalized feedback</span> and tactical next steps",
		],
	},
];
