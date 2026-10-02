import styles from './stackStrip.module.scss';

const stack = [
	'Next.js',
	'React',
	'TypeScript',
	'Node.js',
	'PostgreSQL',
	'Prisma',
	'Auth0',
	'Gmail API',
	'OpenAI',
	'Vercel',
];

export default function StackStrip() {
	return (
		<div className={styles.strip}>
			<div className={`container ${styles.inner}`}>
				<p className='mono'>We build with</p>
				<ul>
					{stack.map((s) => (
						<li key={s}>{s}</li>
					))}
				</ul>
			</div>
		</div>
	);
}
