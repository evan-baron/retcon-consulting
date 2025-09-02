// Styles imports
import styles from '../../app/development/measureSuccess/measureSuccess.module.scss';

// MUI Icons
import {
	Speed,
	AccessibilityNew,
	CheckOutlined,
	SearchOutlined,
	DevicesOutlined,
	TrendingUp,
} from '@mui/icons-material';

export interface Definition {
	title: string;
	description: string;
	icon: React.ReactNode;
}

export const MeasureDefinitions: Definition[] = [
	{
		title: 'Performance',
		description:
			'Your website will load quickly and smoothly on any device, so your visitors never have to wait.',
		icon: <Speed className={styles.icon} />,
	},
	{
		title: 'Accessibility',
		description:
			'Your website will be accessible for all people, regardless of their abilities or disabilities.',
		icon: <AccessibilityNew className={styles.icon} />,
	},
	{
		title: 'Best Practices',
		description:
			'Your website will be built to be reliable, maintainable, and secure, so you can focus on your core business.',
		icon: <CheckOutlined className={styles.icon} />,
	},
	{
		title: 'SEO',
		description:
			'Your website will be set up so search engines can easily find you, helping more people discover you.',
		icon: <SearchOutlined className={styles.icon} />,
	},
	{
		title: 'Responsiveness',
		description:
			'Your website will be built to look great and work perfectly across all devices, so your visitors always have a seamless experience.',
		icon: <DevicesOutlined className={styles.icon} />,
	},
	{
		title: 'Scalability',
		description:
			'Your website will be built to scale and grow with your business, so you can handle more visitors and new demands without worry.',
		icon: <TrendingUp className={styles.icon} />,
	},
];
