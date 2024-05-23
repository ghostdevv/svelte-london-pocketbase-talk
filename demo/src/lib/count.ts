export function countWords(words: string[]): [word: string, count: number][] {
	return [...new Set(words)]
		.map((word) => [
			word,
			words.reduce((a, w) => (word == w ? a + 1 : a), 0),
		])
		.sort((a, b) => (b[1] as any) - (a[1] as any)) as any;
}
