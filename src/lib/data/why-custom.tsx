import { ReactNode } from 'react';

// styles
import stylesA from '../../app/development/customTiles/developmentTile/tile.module.scss';
import stylesB from '../../app/development/customTiles/customTiles.module.scss';

// MUI Icons
import {
	Speed,
	Search,
	AutoFixHigh,
	TrendingUp,
	Security,
	LockOpen,
	AttachMoney,
	StarBorder,
	Phonelink,
} from '@mui/icons-material';

export interface ReasonTile {
	title: string;
	summary: string;
	stat1: string;
	stat2?: string;
	icon: ReactNode;
}

export const ReasonTiles: ReasonTile[] = [
	{
		title: 'Performance &\nSpeed',
		summary:
			'Custom websites eliminate bloat, delivering faster load times and smoother performance.',
		stat1:
			"A fast website is critical for business. Custom sites are lean, with only the features you need, which means better performance scores and smoother user experiences. By optimizing every detail, you're not stuck with the extra scripts and plugins that slow sites down.",
		stat2: `A 1-second delay can reduce conversions by <span style='font-weight:bold; color: var(--gray1)'>7%</span>. Pages slower than 3 seconds risk losing <span style='font-weight:bold; color: var(--gray1)'>40% of visitors</span>.`,
		icon: <Speed className={`${stylesA.icon} ${stylesB.icon}`} />,
	},
	{
		title: 'SEO &\nVisibility',
		summary:
			'Clean structure, proper headings, and schema ensure your site is built for search engines.',
		stat1:
			'Search engines reward clean structure. Custom development ensures proper use of headings, titles, schema, and accessibility, all of which are critical details that templates often overlook. This sets your website up for long-term visibility and stronger rankings.',
		stat2: `53% of mobile users leave a site if it takes more than <span style='font-weight:bold; color: var(--gray1)'>3 seconds</span> to load, directly hurting SEO performance.`,
		icon: <Search className={`${stylesA.icon} ${stylesB.icon}`} />,
	},
	{
		title: 'Flexibility &\nUnique Features',
		summary:
			"Custom development allows interactive features and unique designs that templates can't match.",
		stat1:
			"Templates are limited and often make websites feel repetitive. Custom development lets your brand shine with tailored features: animations, interactive carousels, dashboards, and unique layouts designed to match your identity. It's the difference between blending in and standing out.",
		stat2: `Sites with interactive features see <span style='font-weight:bold; color: var(--gray1)'>up to 3x longer</span> average user engagement compared to template-based sites.`,
		icon: <AutoFixHigh className={`${stylesA.icon} ${stylesB.icon}`} />,
	},
	{
		title: 'Scalability &\nFuture-Proofing',
		summary:
			'Custom websites are built to grow with your business, from e-commerce to member portals.',
		stat1:
			'Templates are fine for starters, but businesses quickly outgrow them. Custom websites are built for the future, whether you need a member portal, e-commerce checkout, or reporting dashboard, you can expand without hitting a wall.',
		stat2: `Businesses that invest early in scalable digital infrastructure save an average of <span style='font-weight:bold; color: var(--gray1)'>30% in replatforming costs</span> later.`,
		icon: <TrendingUp className={`${stylesA.icon} ${stylesB.icon}`} />,
	},
	{
		title: 'Security &\nReliability',
		summary:
			'Fewer third-party plugins mean fewer vulnerabilities and stronger site reliability.',
		stat1:
			'Most templated site hacks happen through outdated plugins and themes. Custom sites eliminate that bloat, giving you full control and reducing your attack surface. You own the code, you choose the features, and you avoid hidden risks.',
		stat2: `Custom-built websites experience <span style='font-weight:bold; color: var(--gray1)'>70% fewer</span> security breaches than websites relying on popular templates and plugins.`,
		icon: <Security className={`${stylesA.icon} ${stylesB.icon}`} />,
	},
	{
		title: 'Ownership &\nControl',
		summary:
			'Unlike templates, custom websites are fully owned by you with no platform restrictions.',
		stat1:
			"Template platforms lock you in. Prices go up, features change, and you're stuck with whatever rules the “landlord” makes. With custom development, you own your website outright. That means complete control over design, hosting, and functionality—no surprises, no limitations.",
		stat2: `Full ownership means you can switch hosts, update features, or redesign your site <span style='font-weight:bold; color: var(--gray1)'>anytime you want</span> with no restrictions.`,
		icon: <LockOpen className={`${stylesA.icon} ${stylesB.icon}`} />,
	},
	{
		title: 'Cost vs. Value',
		summary:
			'Custom websites cost more upfront but deliver higher ROI and avoid hidden template fees.',
		stat1:
			"Templates are cheaper upfront, but slow performance, limited growth, and hidden fees add up. Custom sites are an investment in your brand's long-term success. Faster sites mean higher conversions, and scalability means you won't pay for costly rebuilds later.",
		stat2: `A 2-second improvement in page load can increase conversions by <span style='font-weight:bold; color: var(--gray1)'>up to 14%</span>.`,
		icon: <AttachMoney className={`${stylesA.icon} ${stylesB.icon}`} />,
	},
	{
		title: 'Mobile-First\nExperience',
		summary:
			'Custom websites are designed to look and perform perfectly on every device, from phones to desktops.',
		stat1:
			'With over 60% of web traffic coming from mobile devices, a mobile-first approach is essential. Custom development ensures your site adapts seamlessly to any screen size, delivering fast load times, easy navigation, and a consistent brand experience everywhere.',
		stat2: `Mobile-friendly sites see <span style='font-weight:bold; color: var(--gray1)'>2x higher conversion rates</span> and are prioritized by search engines for ranking.`,
		icon: <Phonelink className={`${stylesA.icon} ${stylesB.icon}`} />,
	},
	{
		title: 'Our Philosophy',
		summary:
			'Websites should be engaging, personal, and memorable—not cookie-cutter templates.',
		stat1:
			"We believe websites should be personal, engaging, and memorable. Custom development lets us create experiences that reflect your brand's story, not just another cookie-cutter template. When your website is unique, your customers notice.",
		stat2: `A memorable website can increase repeat visits by <span style='font-weight:bold; color: var(--gray1)'>up to 50%</span> compared to generic templates.`,
		icon: <StarBorder className={`${stylesA.icon} ${stylesB.icon}`} />,
	},
];
