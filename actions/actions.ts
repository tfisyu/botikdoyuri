'use server';
import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export default async function submitData(formData: FormData) {
	const name = formData.get('name') as string;
	const number = formData.get('number') as unknown as string;
	await prisma.participant.create({
		data: {
			name: name,
			number: [number],
		},
	});
	revalidatePath('@/app/page');
}
