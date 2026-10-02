import {
	Gauge,
	Search,
	Sparkles,
	TrendingUp,
	ShieldCheck,
	KeyRound,
	Accessibility,
	CheckCircle2,
	MonitorSmartphone,
	MessageSquare,
	Map,
	PenTool,
	Code2,
	Rocket,
	LayoutDashboard,
	LockKeyhole,
	Mail,
	Database,
	Bot,
	Zap,
	type LucideIcon,
} from 'lucide-react';

export interface Feature {
	title: string;
	description: string;
	icon: LucideIcon;
}

export const reasons: Feature[] = [
	{
		title: 'Performance',
		icon: Gauge,
		description:
			'Custom sites ship only what you need: no bloated themes or plugin stacks. The result is faster load times and better Core Web Vitals.',
	},
	{
		title: 'SEO & visibility',
		icon: Search,
		description:
			'Clean semantic structure, proper metadata, and structured data are built in from the start, not bolted on later.',
	},
	{
		title: 'Unique experience',
		icon: Sparkles,
		description:
			'Interactive features, dashboards, and layouts designed around your brand rather than a template that thousands of others share.',
	},
	{
		title: 'Room to grow',
		icon: TrendingUp,
		description:
			'Add a member portal, checkout, or reporting dashboard later without outgrowing your platform or rebuilding from scratch.',
	},
	{
		title: 'Security',
		icon: ShieldCheck,
		description:
			'Fewer third-party plugins means a smaller attack surface, with every dependency chosen deliberately and kept up to date.',
	},
	{
		title: 'Ownership',
		icon: KeyRound,
		description:
			'You own the code, the design, and the hosting. No platform lock-in, no surprise price changes, and the freedom to change anything.',
	},
];

export interface Step {
	title: string;
	description: string;
	icon: LucideIcon;
}

export const process: Step[] = [
	{
		title: 'Discovery',
		icon: MessageSquare,
		description:
			'We meet to understand your business goals, your audience, and what the website needs to accomplish.',
	},
	{
		title: 'Planning & strategy',
		icon: Map,
		description:
			'We define the project plan, sitemap, content strategy, features, and overall user experience.',
	},
	{
		title: 'Design & prototyping',
		icon: PenTool,
		description:
			'Wireframes and visual designs that reflect your brand, refined with you until they are right.',
	},
	{
		title: 'Development & testing',
		icon: Code2,
		description:
			'We build the site, integrate content and functionality, and test for usability, performance, and responsiveness.',
	},
	{
		title: 'Launch & support',
		icon: Rocket,
		description:
			'We deploy, monitor for issues, and provide ongoing support, updates, and optimization.',
	},
];

export const measures: Feature[] = [
	{
		title: 'Performance',
		icon: Gauge,
		description:
			'Pages load quickly and smoothly on any device, so visitors never wait.',
	},
	{
		title: 'Accessibility',
		icon: Accessibility,
		description:
			'Built to WCAG guidelines so the site works for people of all abilities.',
	},
	{
		title: 'Best practices',
		icon: CheckCircle2,
		description:
			'Reliable, maintainable, and secure code so you can focus on your business.',
	},
	{
		title: 'SEO',
		icon: Search,
		description:
			'Set up so search engines can find, understand, and rank your content.',
	},
	{
		title: 'Responsiveness',
		icon: MonitorSmartphone,
		description:
			'A seamless experience on phones, tablets, and desktops alike.',
	},
	{
		title: 'Scalability',
		icon: TrendingUp,
		description:
			'An architecture that handles more visitors and new requirements as you grow.',
	},
];

export const commitments: { title: string; description: string }[] = [
	{
		title: 'Clear communication',
		description: 'Transparent updates, open collaboration, and no surprises.',
	},
	{
		title: 'Thoughtful design & development',
		description:
			'Solutions tailored to your business, not off-the-shelf templates.',
	},
	{
		title: 'Attention to detail',
		description:
			'Every interaction, line of code, and design element delivered with precision.',
	},
	{
		title: 'Reliability',
		description:
			'We do not launch and walk away. We deliver stable, dependable solutions from day one.',
	},
	{
		title: 'Partnership',
		description:
			'Your success is our success. Every project is the start of a long-term relationship.',
	},
];

export const supportFeatures = [
	'Site ownership',
	'Proactive maintenance',
	'Monthly support hours',
	'Technical assistance',
	'Priority response',
	'Feature enhancements',
] as const;

export const supportTiers: { name: string; includes: boolean[] }[] = [
	{ name: 'Basic', includes: [true, false, false, false, false, false] },
	{ name: 'Silver', includes: [true, true, true, false, false, false] },
	{ name: 'Gold', includes: [true, true, true, true, true, false] },
	{ name: 'Platinum', includes: [true, true, true, true, true, true] },
];

export const capabilities: Feature[] = [
	{
		title: 'Web apps & dashboards',
		icon: LayoutDashboard,
		description:
			'Customer portals, admin tools, and data-rich dashboards with the performance and polish of a real product.',
	},
	{
		title: 'Authentication & accounts',
		icon: LockKeyhole,
		description:
			'Secure sign-up and sign-in with Auth0 and OAuth, role-based access, and account recovery done properly.',
	},
	{
		title: 'Email & Gmail integration',
		icon: Mail,
		description:
			'Send, track, and reply from the Gmail API or Resend, with templates, scheduling, and bounce handling.',
	},
	{
		title: 'Databases & APIs',
		icon: Database,
		description:
			'PostgreSQL with Prisma, typed APIs validated with Zod, and clean integrations with the tools you already use.',
	},
	{
		title: 'AI-powered features',
		icon: Bot,
		description:
			'Practical OpenAI integrations such as drafting, summarizing, and classifying, built with guardrails and cost in mind.',
	},
	{
		title: 'Real-time & automation',
		icon: Zap,
		description:
			'Live updates with Pusher, scheduled jobs, and background workflows that keep running while you sleep.',
	},
];
