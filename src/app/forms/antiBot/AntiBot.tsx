'use client';

// Library imports
import React, { useState, useEffect } from 'react';

// Hooks imports

// Styles imports
import styles from '../forms.module.scss';

// Icon imports
import {} from '@mui/icons-material';

// Components imports

// Context imports

// Data imports
import mathQuestions from '../../../lib/data/mathQuestions';

// Type imports
import { FormData, DetailedFormData } from '../../../lib/types/formTypes';

type AntiBotProps<Data> = {
	formData: Data;
	formIncrement: number;
	setFormData: React.Dispatch<React.SetStateAction<Data>>;
	setIsAntiBotValid: React.Dispatch<React.SetStateAction<boolean>>;
};

const AntiBot = <Data extends FormData | DetailedFormData>({
	formData,
	formIncrement,
	setFormData,
	setIsAntiBotValid,
}: AntiBotProps<Data>) => {
	const [questionIndex, setQuestionIndex] = useState(null as number | null);

	useEffect(() => {
		const index = Math.floor(Math.random() * mathQuestions.length);
		setQuestionIndex(index);
		setFormData((prev) => ({ ...prev, antibotIndex: index }));
	}, [formIncrement, setFormData]);

	if (questionIndex === null) {
		return (
			<fieldset>
				<label>Loading question...</label>
			</fieldset>
		);
	}

	const question = mathQuestions[questionIndex];

	return (
		<fieldset>
			<legend className='sr-only'>Anti-bot Math Question</legend>
			<label htmlFor='antibot'>
				What is {question.a} {question.op} {question.b}?
				<span aria-hidden='true'>*</span>
			</label>
			<input
				className={styles.antibot}
				type='text'
				inputMode='numeric'
				pattern='[0-9]*'
				id='antibot'
				name='antibot'
				required
				aria-required='true'
				aria-invalid={
					formData.antibot.touched && formData.antibot.value.trim() === ''
						? 'true'
						: 'false'
				}
				aria-describedby={
					formData.antibot.touched && formData.antibot.value.trim() === ''
						? 'antibot-error'
						: undefined
				}
				autoComplete='off'
				onChange={(e) => {
					// Only allow digits
					const value = e.target.value.replace(/[^0-9]/g, '');
					setFormData((prev) => ({
						...prev,
						antibot: { ...prev.antibot, value },
					}));
					setIsAntiBotValid(value === question?.answer.toString());
				}}
				onBlur={() =>
					setFormData((prev) => ({
						...prev,
						antibot: { ...prev.antibot, touched: true },
					}))
				}
				value={formData.antibot.value}
				placeholder='Potato' // Just a fun placeholder
			/>
			{formData.antibot.touched && formData.antibot.value.trim() === '' && (
				<span
					className={styles.error}
					id='antibot-error'
					role='alert'
					aria-live='polite'
				>
					This field is required
				</span>
			)}
		</fieldset>
	);
};

export default AntiBot;
