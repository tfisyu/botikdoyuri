'use server';
import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export default async function submitData(nameProps: string, numberProps: string) {
	const name = nameProps;
	const number = numberProps;
	await prisma.participant.create({
		data: {
			name: name,
			number: [...number],
		},
	});
	revalidatePath('../page');
}
