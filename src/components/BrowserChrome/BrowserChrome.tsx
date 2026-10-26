import styles from './browserChrome.module.scss';

/** Decorative macOS-style window title bar (traffic lights) for framing screenshots. */
export default function BrowserChrome() {
	return (
		<div className={styles.chrome} aria-hidden='true'>
			<span />
			<span />
			<span />
		</div>
	);
}
