import { ReactNode } from 'react';

// MUI Icons
import {
	ImageOutlined,
	RemoveShoppingCartOutlined,
	Language,
	TrafficOutlined,
	HandshakeOutlined,
} from '@mui/icons-material';

export interface DevelopmentStat {
	stat1: string;
	stat2: string;
	image: string | ReactNode;
	alt: string;
}

export const DevelopmentStats: DevelopmentStat[] = [
	{
		stat1: '25.8% of users discover brands directly via their websites',
		stat2:
			'Your website remains one of the top first impressionable touchpoints between your customers and your brand.',
		image: <Language />,
		alt: 'Website',
	},
	{
		stat1: '76% of consumers view business-made assets when researching',
		stat2:
			'A polished online presence with brand images and assets makes you more credible.',
		image: <ImageOutlined />,
		alt: 'Chart',
	},
	{
		stat1: 'Trust ≈ Price/Quality',
		stat2: 'A clean, professional website builds trust when it counts.',
		image: '/assets/development/handshake-white-thick.svg',
		alt: 'Handshake',
	},
	{
		stat1: '71% of B2B marketers track their website traffic',
		stat2: 'Your site is the performance hub of all your marketing efforts.',
		image: <TrafficOutlined />,
		alt: 'Traffic',
	},
	{
		stat1: 'Approximately 70% of all carts/websites are abandoned',
		stat2:
			'UX mistakes on your website cost you real opportunities and revenue.',
		image: <RemoveShoppingCartOutlined />,
		alt: 'Empty Cart',
	},
];
