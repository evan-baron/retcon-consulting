'use client';

// Library Imports
import React, { useEffect, useState } from 'react';

// Styles Imports
import styles from './hero.module.scss';

// Component Imports
import CTA from '../ctaButton/CTA';

// Context
import { useAppContext } from '@/app/context/AppContext';

// Words for the typing effect
const words = ['Reimagine', 'Redefine', 'Rewrite', 'Remove your obstacles.'];

function Hero() {
	const { isTouchDevice } = useAppContext();

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
			<div className={styles.content}>
				<div className={styles['title-box']}>
					<h1 className={styles.title}>{displayed}</h1>
					<CTA
						className={`${phase === 'done' ? styles.done : ''} `}
						disabled={phase !== 'done'}
						content='Book a free consultation'
						parent='hero'
						touchDevice={isTouchDevice}
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
