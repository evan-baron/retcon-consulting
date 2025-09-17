export type FieldName = 'name' | 'email' | 'message' | 'antibot';

export type FormField = {
	value: string;
	touched: boolean;
};

export type FormData = {
	name: FormField;
	email: FormField;
	message: FormField;
	antibot: FormField;
	antibotIndex: number;
};