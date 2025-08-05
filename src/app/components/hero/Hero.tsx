'use client';

// Library Imports
import React, { useRef, useEffect, useState } from 'react';

// Styles Imports
import styles from './hero.module.scss';

// Component Imports
import CTA from '../ctaButton/CTA';

// Words for the typing effect
const words = ['Reimagine', 'Redefine', 'Rewrite', 'Remove your obstacles.'];

function Hero() {
	// Effect to handle mouse movement and create effects under the mouse
	// const heroRef = useRef<HTMLDivElement>(null);
	// const backgroundRef = useRef<HTMLDivElement>(null);

	// useEffect(() => {
	// 	// need a hero element and a background element to apply the mouse effect, basically check if mouse is in hero element, if it is create a new element inside the background that follows the mouse and fades out
	// 	const heroElement = heroRef.current;
	// 	const backgroundElement = backgroundRef.current;

	// 	if (!heroElement || !backgroundElement) return;

	// 	let lastTime = 0;
	// 	const throttle = 20; // milliseconds
	// 	const MAX_EFFECTS = 20; // Maximum number of effects to show

	// 	const moveEffect = (event: MouseEvent) => {
	// 		// Change the hue of the mouse effect based on time, adds a cool color change effect
	// 		const hue = (Date.now() / 10) % 360;
	// 		heroElement?.style.setProperty('--effect-hue', `${hue}`);

	// 		// Throttle the mouse move event to keep performance smooth and reduce load on the browser
	// 		const now = Date.now();
	// 		if (now - lastTime < throttle) {
	// 			return;
	// 		}
	// 		lastTime = now;

	// 		// Remove oldest effect if over limit
	// 		const effects = backgroundElement.querySelectorAll(
	// 			`.${styles['mouse-effect']}`
	// 		);
	// 		if (effects.length >= MAX_EFFECTS) {
	// 			effects[0].remove();
	// 		}

	// 		const i = document.createElement('div'); // Create a new element for the effect called 'i'
	// 		i.classList.add(styles['mouse-effect']);
	// 		const rect = heroElement.getBoundingClientRect(); // Get the bounding rectangle dimensions of the hero element
	// 		const x = event.clientX - rect.left;
	// 		const y = event.clientY - rect.top;

	// 		// Set the position of the effect element relative to the hero element using the mouse coordinates
	// 		i.style.left = `${x}px`;
	// 		i.style.top = `${y}px`;

	// 		// Add the effect element to the background element
	// 		backgroundElement.appendChild(i);

	// 		// Remove the effect element after a delay of 1 second, using CSS transitions for a fade-out effect
	// 		setTimeout(() => {
	// 			i.remove();
	// 		}, 1000);
	// 	};

	// 	heroElement.addEventListener('mousemove', moveEffect);

	// 	return () => {
	// 		heroElement.removeEventListener('mousemove', moveEffect);
	// 	};
	// }, []);

	// Typewriter effect for the title
	const [displayed, setDisplayed] = useState('');
	const [wordIndex, setWordIndex] = useState(0);
	const [charIndex, setCharIndex] = useState(0);
	const [phase, setPhase] = useState<
		'typing' | 'blinking' | 'deleting' | 'done'
	>('typing');
	const [blinkCount, setBlinkCount] = useState(0);

	useEffect(() => {
		let timeout: NodeJS.Timeout;
		const word: string = words[wordIndex];

		if (phase === 'typing') {
			if (charIndex < word.length) {
				timeout = setTimeout(() => {
					setDisplayed(
						wordIndex === words.length - 1
							? word.slice(0, charIndex + 2)
							: word.slice(0, charIndex + 2)
					);
					setCharIndex(charIndex + 1);
				}, 60);
			} else {
				setPhase('blinking');
			}
		} else if (phase === 'blinking') {
			if (wordIndex === words.length - 1) {
				setPhase('done');
				setDisplayed(word);
				return;
			}

			if (blinkCount < 5) {
				timeout = setTimeout(() => {
					setDisplayed((prev) =>
						prev.endsWith('_') ? prev.slice(0, -1) : word + '_'
					);
					setBlinkCount(blinkCount + 1);
				}, 300);
			} else {
				if (wordIndex === words.length - 1) {
					setPhase('done');
					setDisplayed(word);
					return; // Remove the underscore for the final word
				} else {
					setPhase('deleting');
				}
			}
		} else if (phase === 'deleting') {
			if (charIndex > 3) {
				timeout = setTimeout(() => {
					setDisplayed(word.slice(0, charIndex - 1) + '_');
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
		//heroRef used to go in section div styles.hero, backgroundRef used to go in div styles.background
		<section className={styles.hero}>
			<div className={styles.background}>
				<div className={styles.grid} aria-hidden='true'></div>
			</div>
			<div className={styles.content}>
				<div className={styles['title-box']}>
					<h1 className={styles.title}>{displayed}</h1>
					<CTA
						className={`${phase === 'done' ? styles.done : ''}`}
						disabled={phase !== 'done'}
						content='Book a free consultation'
						parent='hero'
					/>
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
