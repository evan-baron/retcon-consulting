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
import { FormData } from '../../../lib/types/formTypes';

const AntiBot = ({
	formData,
	setFormData,
	setIsAntiBotValid,
}: {
	formData: FormData;
	setFormData: React.Dispatch<React.SetStateAction<FormData>>;
	setIsAntiBotValid: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	const [questionIndex, setQuestionIndex] = useState(null as number | null);

	useEffect(() => {
		const index = Math.floor(Math.random() * mathQuestions.length);
		setQuestionIndex(index);
		setFormData((prev) => ({ ...prev, antibotIndex: index }));
	}, [setFormData]);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setFormData((prev) => ({ ...prev, antibot: { ...prev.antibot, value } }));
		setIsAntiBotValid(value === question?.answer.toString());
	};

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
			<label htmlFor='antibot'>
				What is {question.a} {question.op} {question.b}?<span>*</span>
			</label>
			<input
				className={styles.antibot}
				type='text'
				id='antibot'
				name='antibot'
				required
				autoComplete='off'
				onChange={handleChange}
				onBlur={() =>
					setFormData((prev) => ({
						...prev,
						antibot: { ...prev.antibot, touched: true },
					}))
				}
				value={formData.antibot.value}
			/>
			{formData.antibot.touched && formData.antibot.value.trim() === '' && (
				<span className={styles.error}>This field is required</span>
			)}
		</fieldset>
	);
};

export default AntiBot;
