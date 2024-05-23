type WordCount = [word: string, count: number];

export function countWords(words: string[]): WordCount[] {
	return [...new Set(words)]
		.map(
			(word): WordCount => [
				word,
				words.reduce((a, w) => (word == w ? a + 1 : a), 0),
			],
		)
		.sort(([, a], [, b]) => b - a) as any;
}
