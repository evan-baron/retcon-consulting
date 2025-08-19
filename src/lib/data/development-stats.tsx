import { ReactNode } from 'react';

// Styles imports
import styles from '../../app/components/timeline/animatedBall/animatedBall.module.scss';

// MUI Icons
import {
	QuestionAnswerOutlined,
	SchemaOutlined,
	CreateOutlined,
	CodeOutlined,
	RocketLaunchOutlined,
} from '@mui/icons-material';

export interface DevelopmentStat {
	stat1: string;
	stat2: string;
	image: string | ReactNode;
	alt: string;
}

export const DevelopmentStats: DevelopmentStat[] = [
	{
		stat1: 'Discovery & Needs Assessment',
		stat2:
			'Meet with the client to understand their business, goals, target audience, and specific requirements for the website.',
		image: <QuestionAnswerOutlined className={styles.icon} />,
		alt: 'Website',
	},
	{
		stat1: 'Planning & Strategy',
		stat2:
			'Develop a project plan, sitemap, and content strategy. Define the website’s structure, features, and user experience.',
		image: <SchemaOutlined className={styles.icon} />,
		alt: 'Chart',
	},
	{
		stat1: 'Design & Prototyping',
		stat2:
			'Create wireframes and visual designs that reflect the client’s brand. Review and refine designs with client feedback.',
		image: <CreateOutlined className={styles.icon} />,
		alt: 'Create',
	},
	{
		stat1: 'Development & Testing',
		stat2:
			'Build the website, integrate content and functionality, and rigorously test for usability, performance, and responsiveness.',
		image: <CodeOutlined className={styles.icon} />,
		alt: 'Traffic',
	},
	{
		stat1: 'Launch & Post-Launch Support',
		stat2:
			'Deploy the website, monitor for issues, and provide ongoing support, updates, and optimization as needed.',
		image: <RocketLaunchOutlined className={styles.icon} />,
		alt: 'Empty Cart',
	},
];
