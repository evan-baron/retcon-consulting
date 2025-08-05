'use server';

import mailService from "@/services/mailService";

export async function sendContact(formData: FormData) {
  const firstName = formData.get('first-name') as string;
  const lastName = formData.get('last-name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;
  const services = formData.getAll('services').join(', ');

  await mailService.sendContactForm(
    `${firstName} ${lastName}`,
    email,
    services,
    message
  );
}