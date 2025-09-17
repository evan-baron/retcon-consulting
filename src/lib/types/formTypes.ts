export type FieldName = 'name' | 'title' | 'company' | 'email' | 'phone' | 'website' | 'services' | 'budget' | 'message' | 'antibot';

export type FormField = {
	value: string;
	touched?: boolean;
};

export type FormData = {
	name: FormField;
	email: FormField;
	message: FormField;
	antibot: FormField;
	antibotIndex: number;
};

export type DetailedFormData = FormData & {
	  title: FormField;
	  company: FormField;
	  phone: FormField;
	  website: FormField;
	  services: string[];
	  budget: FormField;
}