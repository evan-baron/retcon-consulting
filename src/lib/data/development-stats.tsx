import { ReactNode } from 'react';

// Styles imports
import styles from '../../app/components/timeline/timeline.module.scss';

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
		stat1: 'Discovery &\nNeeds Assessment',
		stat2:
			'The first step in our process is to meet with you to understand your business goals, target audience, and specific requirements for your website.',
		image: <QuestionAnswerOutlined className={styles.icon} />,
		alt: 'Discovery',
	},
	{
		stat1: 'Planning & Strategy',
		stat2:
			"Next, we'll develop a project plan, sitemap, and content strategy. We'll also define the website's structure, features, and user experience.",
		image: <SchemaOutlined className={styles.icon} />,
		alt: 'Planning',
	},
	{
		stat1: 'Design & Prototyping',
		stat2:
			"Once we've outlined the project, we'll start on building wireframes and visual designs that reflect your brand. We'll review and refine these designs with you and make the necessary changes until we get it right.",
		image: <CreateOutlined className={styles.icon} />,
		alt: 'Design',
	},
	{
		stat1: 'Development & Testing',
		stat2:
			"Once you've approved the final design, we'll begin building the website, integrating content and functionality, and rigorously testing for usability, performance, and responsiveness.",
		image: <CodeOutlined className={styles.icon} />,
		alt: 'Development',
	},
	{
		stat1: 'Launch &\nPost-Launch Support',
		stat2:
			'The final step in our process is to deploy the website, continuously monitor it for issues, and provide ongoing support, updates, and optimization as needed.',
		image: <RocketLaunchOutlined className={styles.icon} />,
		alt: 'Launch',
	},
];
