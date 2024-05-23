<script lang="ts">
	import { pocketbase } from '$lib/pocketbase';
	import { countWords } from '$lib/count.js';
	import { enhance } from '$app/forms';
	import { onMount } from 'svelte';

	export let data;

	onMount(() => {
		const subscription = pocketbase
			.collection('words')
			.subscribe('create', (newData) => {
				data.words = [...data.words, newData.record.word];
			});

		return () => {
			subscription.then((unsubscribe) => unsubscribe());
		};
	});
</script>

<section>
	<ul>
		{#each countWords(data.words) as [word, count]}
			<li style="font-size: {16 + count / 10}px">{count} {word}</li>
		{/each}
	</ul>
</section>

<section>
	<form method="POST" action="?/addWord" use:enhance>
		<input name="word" type="text" placeholder="Word to add" />
		<button class="secondary"> Add </button>
	</form>
</section>

<style lang="scss">
	form {
		flex-direction: row;
		align-items: center;
	}
</style>
