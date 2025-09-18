'use client';

// Library imports
import React, { useState, useEffect } from 'react';

// Hooks imports

// Styles imports
import styles from './loadingSpinner.module.scss';

// Icon imports
import {} from '@mui/icons-material';

// Components imports

// Context imports
import { useAppContext } from '../../context/AppContext';

const LoadingSpinner = ({ loadingText }: { loadingText?: string }) => {
	const { errorMessage, setErrorMessage, setLoading } = useAppContext();
	const [elipses, setElipses] = useState('');

	useEffect(() => {
		const loadingStates = ['', '.', '..', '...'];
		let index = 0;

		const interval = setInterval(() => {
			setElipses(loadingStates[index]);
			index = (index + 1) % loadingStates.length; // Loop back to start
		}, 500);

		return () => clearInterval(interval); // Cleanup on unmount
	}, []);

	return (
		<div
			className={styles['loadingspinner-wrapper']}
			role='status'
			aria-live='polite'
			aria-busy={!errorMessage}
		>
			<div className={styles.container}>
				{!errorMessage ? (
					<div className={styles.text}>
						<span id='loading-message'>
							{loadingText ? loadingText : 'Loading'}
						</span>
						<span className={styles.elipses} aria-hidden='true'>
							{elipses}
						</span>
					</div>
				) : (
					<>
						<p className={styles.error} role='alert'>
							{errorMessage}
						</p>
						<p className={styles.error}>Please try again later.</p>
						<button
							type='button'
							onClick={() => {
								setErrorMessage(null);
								setLoading(false);
							}}
							aria-label='Dismiss error and close loading dialog'
						>
							Ok
						</button>
					</>
				)}
				{!errorMessage && (
					<div className={styles.spinner}>
						<div
							className={styles['loading-spinner']}
							role='presentation'
						></div>
					</div>
				)}
			</div>
		</div>
	);
};

export default LoadingSpinner;
