// Library imports
import React from 'react';

// Actions import
import { sendContact } from './sendContact';

// Styles imports
import styles from './contact.module.scss';

function Contact({ id }: { id: string }) {
	return (
		<div className={styles['contact-wrapper']} id={id}>
			<section
				className={styles.contact}
				aria-label='Schedule a consultation to discuss your needs'
			>
				<h2 className={styles.h2}>Get in Touch</h2>
				<form action={sendContact} className={styles['contact-form']}>
					<div className={styles['names-wrapper']}>
						<div className={styles['name-input']}>
							<label htmlFor='first-name'>First Name:</label>
							<input type='text' id='first-name' name='first-name' required />
						</div>
						<div className={styles['name-input']}>
							<label htmlFor='last-name'>Last Name:</label>
							<input type='text' id='last-name' name='last-name' required />
						</div>
					</div>

					<div className={styles['email-input']}>
						<label htmlFor='email'>Email:</label>
						<input type='email' id='email' name='email' required />
					</div>

					<div className={styles['services-wrapper']}>
						<h3>Service(s) Needed:</h3>
						<div id='services' className={styles['services-checkboxes']}>
							<label>
								<input type='checkbox' name='services' value='consulting' />
								Consulting
							</label>
							<br />
							<label>
								<input
									type='checkbox'
									name='services'
									value='web-development'
								/>
								Web Development
							</label>
							<br />
							<label>
								<input type='checkbox' name='services' value='web-design' />
								Web Design
							</label>
							<br />
							<label>
								<input
									type='checkbox'
									name='services'
									value='sales-methodology'
								/>
								Sales Methodology
							</label>
							<br />
							<label>
								<input
									type='checkbox'
									name='services'
									value='personal-coaching'
								/>
								Personal Coaching
							</label>
						</div>
					</div>

					<div className={styles['message-wrapper']}>
						<label htmlFor='message'>Message:</label>
						<textarea id='message' name='message' rows={4} required />
					</div>

					<button type='submit' className={styles.button}>
						Send
					</button>
				</form>
			</section>
		</div>
	);
}

export default Contact;
