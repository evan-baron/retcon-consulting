'use client';

// Library imports
import React, { useEffect, useRef } from 'react';

// Styles imports
import styles from './backgroundEffect.module.scss';

// Context
import { useAppContext } from '@/app/context/AppContext';

function BackgroundEffect() {
	const { isTouchDevice } = useAppContext();

	// Effect to handle mouse movement and create effects under the mouse
	const backgroundRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		// need a hero element and a background element to apply the mouse effect, basically check if mouse is in hero element, if it is create a new element inside the background that follows the mouse and fades out
		const backgroundElement = backgroundRef.current;

		if (!backgroundElement) return;

		let lastTime = 0;
		const throttle = isTouchDevice ? 1 : 20; // milliseconds
		const MAX_EFFECTS = 50; // Maximum number of effects to show

		const showEffect = (x: number, y: number) => {
			// Change the hue of the mouse effect based on time, adds a cool color change effect
			// const hue = (Date.now() / 10) % 360;
			// document.body.style.setProperty('--effect-hue', `${hue}`);

			// Throttle the mouse move event to keep performance smooth and reduce load on the browser
			const now = Date.now();
			if (now - lastTime < throttle) {
				return;
			}
			lastTime = now;

			// Remove oldest effect if over limit
			const effects = backgroundElement.querySelectorAll(
				`.${styles['mouse-effect']}`
			);
			if (effects.length >= MAX_EFFECTS) {
				effects[0].remove();
			}

			const i = document.createElement('div'); // Create a new element for the effect called 'i'
			i.classList.add(styles['mouse-effect']);

			// Set the position of the effect element relative to the hero element using the mouse coordinates
			i.style.left = `${x}px`;
			i.style.top = `${y}px`;

			// Add the effect element to the background element
			backgroundElement.appendChild(i);

			// Remove the effect element after a delay of 1 second, using CSS transitions for a fade-out effect
			setTimeout(() => {
				i.remove();
			}, 1000);
		};

		// For desktop
		const moveEffect = (event: MouseEvent) => {
			showEffect(event.clientX, event.clientY);
		};

		// For touch devices
		const touchEffect = (event: TouchEvent) => {
			if (event.touches.length > 0) {
				const touch = event.touches[0];
				showEffect(touch.clientX, touch.clientY);
			}
		};

		document.addEventListener('mousemove', moveEffect);
		document.addEventListener('touchmove', touchEffect);

		return () => {
			document.removeEventListener('mousemove', moveEffect);
			document.removeEventListener('touchmove', touchEffect);
		};
	}, [isTouchDevice]);

	return (
		<div className={styles.hero}>
			<div className={styles.background} ref={backgroundRef}>
				<div className={styles.grid}></div>
			</div>
		</div>
	);
}

export default BackgroundEffect;
