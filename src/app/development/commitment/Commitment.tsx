// Library imports
import React from 'react';

// Hooks imports

// Styles imports
import styles from './commitment.module.scss';

// Components imports

// Context imports

const Commitment = () => {
	return (
		<div className={styles['commitment-wrapper']}>
			<p className={styles.intro}>
				Excellence, for us, starts with how we work with you. From the very
				first conversation, we treat your goals as our own—listening carefully,
				asking the right questions, and translating your vision into a digital
				experience that feels both seamless and intentional.
			</p>

			<ul className={styles.pillars} role='list'>
				<li>
					<h4>Clear Communication</h4>
					<p>Transparent updates, open collaboration, and no surprises.</p>
				</li>
				<li>
					<h4>Thoughtful Design &amp; Development</h4>
					<p>
						Solutions tailored to your business, not off-the-shelf templates.
					</p>
				</li>
				<li>
					<h4>Attention to Detail</h4>
					<p>
						Every interaction, line of code, and design element delivered with
						precision.
					</p>
				</li>
				<li>
					<h4>Reliability</h4>
					<p>
						We don't just launch and walk away. We deliver stable, dependable
						solutions from day one.
					</p>
				</li>
				<li>
					<h4>Partnership</h4>
					<p>
						Your success is our success—every project is the start of a
						long-term relationship.
					</p>
				</li>
			</ul>

			<p className={styles.closing}>
				Our commitment to excellence isn't a tagline, it's the standard we hold
				ourselves to in every decision, every deliverable, and every interaction
				with you.
			</p>
		</div>
	);
};

export default Commitment;
