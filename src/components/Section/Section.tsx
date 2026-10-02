import type { ReactNode } from 'react';
import styles from './section.module.scss';

type Tone = 'base' | 'subtle' | 'white';

type Props = {
	id?: string;
	eyebrow?: string;
	title: ReactNode;
	intro?: ReactNode;
	tone?: Tone;
	children?: ReactNode;
};

export default function Section({
	id,
	eyebrow,
	title,
	intro,
	tone = 'base',
	children,
}: Props) {
	const headingId = id ? `${id}-heading` : undefined;
	return (
		<section
			id={id}
			className={`${styles.section} ${styles[tone]}`}
			aria-labelledby={headingId}
		>
			<div className='container'>
				<header className={`${styles.head} reveal`}>
					{eyebrow && (
						<p className={`mono ${styles.eyebrow}`}>
							<i aria-hidden='true' />
							{eyebrow}
						</p>
					)}
					<h2 id={headingId}>{title}</h2>
					{intro && <p className={styles.intro}>{intro}</p>}
				</header>
				{children}
			</div>
		</section>
	);
}
