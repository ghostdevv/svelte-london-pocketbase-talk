import { pocketbase } from '$lib/pocketbase.js';
import { fail } from '@sveltejs/kit';

export async function load() {
	const words = await pocketbase.collection('words').getFullList();

	return {
		words: words.map(({ word }) => word),
	};
}

export const actions = {
	async addWord({ request }) {
		const data = await request.formData();
		const word = data.get('word');

		if (typeof word != 'string' || word.trim().length == 0) {
			return fail(400, { error: 'not valid word' });
		}

		await pocketbase
			.collection('words')
			.create({ word: word.toLowerCase() });

		return { success: true };
	},
};
