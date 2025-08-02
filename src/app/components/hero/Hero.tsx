'use client';

// Library Imports
import React, { useRef, useEffect, useState } from 'react';

// Styles Imports
import styles from './hero.module.scss';

// Words for the typing effect
const words = ['Reimagine', 'Redefine', 'Rewrite', 'Remove your obstacles'];

function Hero() {
	// Effect to handle mouse movement and create effects under the mouse
	const heroRef = useRef<HTMLDivElement>(null);
	const backgroundRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const heroElement = heroRef.current;
		const backgroundElement = backgroundRef.current;

		if (!heroElement || !backgroundElement) return;

		let lastTime = 0;
		const throttle = 20; // milliseconds

		const moveEffect = (event: MouseEvent) => {
			const hue = (Date.now() / 10) % 360; // Change hue based on time
			heroElement?.style.setProperty('--effect-hue', `${hue}`);

			const now = Date.now();
			if (now - lastTime < throttle) {
				return; // Throttle the mouse move event
			}
			lastTime = now;

			const i = document.createElement('div');
			i.classList.add(styles['mouse-effect']);
			const rect = heroElement.getBoundingClientRect();
			const x = event.clientX - rect.left;
			const y = event.clientY - rect.top;
			i.style.left = `${x}px`;
			i.style.top = `${y}px`;

			backgroundElement.appendChild(i);

			setTimeout(() => {
				i.remove();
			}, 1000);
		};

		heroElement.addEventListener('mousemove', moveEffect);

		return () => {
			heroElement.removeEventListener('mousemove', moveEffect);
		};
	}, []);

	// Typing effect for the title
	// State to manage typing effect
	const [displayed, setDisplayed] = useState('');
	const [wordIndex, setWordIndex] = useState(0);
	const [charIndex, setCharIndex] = useState(0);
	const [phase, setPhase] = useState<
		'typing' | 'blinking' | 'deleting' | 'done'
	>('typing');
	const [blinkCount, setBlinkCount] = useState(0);

	useEffect(() => {
		let timeout: NodeJS.Timeout;
		const fullWord = words[wordIndex];

		if (phase === 'typing') {
			if (charIndex < fullWord.length) {
				timeout = setTimeout(() => {
					setDisplayed(
						wordIndex === words.length - 1
							? fullWord.slice(0, charIndex + 2)
							: fullWord.slice(0, charIndex + 2)
					);
					setCharIndex(charIndex + 1);
				}, 60);
			} else {
				setPhase('blinking');
			}
		} else if (phase === 'blinking') {
			if (wordIndex === words.length - 1) {
				setPhase('done');
				setDisplayed(fullWord);
				return;
			}

			if (blinkCount < 5) {
				timeout = setTimeout(() => {
					setDisplayed((prev) =>
						prev.endsWith('_') ? prev.slice(0, -1) : fullWord + '_'
					);
					setBlinkCount(blinkCount + 1);
				}, 300);
			} else {
				if (wordIndex === words.length - 1) {
					setPhase('done');
					setDisplayed(fullWord);
					return; // Remove the underscore for the final word
				} else {
					setPhase('deleting');
				}
			}
		} else if (phase === 'deleting') {
			if (charIndex > 3) {
				timeout = setTimeout(() => {
					setDisplayed(fullWord.slice(0, charIndex - 1) + '_');
					setCharIndex(charIndex - 1);
				}, 60);
			} else {
				setWordIndex(wordIndex + 1);
				setCharIndex(0);
				setBlinkCount(0);
				setPhase('typing');
			}
		}

		return () => clearTimeout(timeout);
	}, [charIndex, phase, wordIndex, blinkCount]);

	return (
		<section className={styles.hero} ref={heroRef}>
			<div className={styles.background} ref={backgroundRef}>
				<div className={styles.grid} aria-hidden='true'></div>
			</div>
			<div className={styles.content}>
				<div className={styles['title-box']}>
					<h1 className={styles.title}>{displayed}</h1>
					<button
						className={`${styles.cta} ${phase === 'done' ? styles.done : ''}`}
					>
						<span className={styles['cta-text']}>Book a free consultation</span>
					</button>
				</div>

				<section className={styles.definition}>
					<dl>
						<dt className={styles.h2}>retcon</dt>
						<dd className={styles.h3}>ret·con</dd>
						<dd className={styles.p}>
							: the act, practice, or result of changing an existing narrative
							by introducing new information
						</dd>
					</dl>
				</section>
			</div>
		</section>
	);
}

export default Hero;
