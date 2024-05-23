import { PUBLIC_POCKETBASE_URL } from '$env/static/public';
import type { RecordService } from 'pocketbase';
import Pocketbase from 'pocketbase';

interface WordsCollection {
	id: string;
	word: string;
}

interface TypedPocketbase extends Pocketbase {
	collection(idOrName: string): RecordService;
	collection(idOrName: 'words'): RecordService<WordsCollection>;
}

export const pocketbase: TypedPocketbase = new Pocketbase(
	PUBLIC_POCKETBASE_URL,
);
