<script>
	export let data;
  import ButtonComponent from './button.svelte';
	import Brief from '$lib/briefForm.svelte';
	console.log({ data });
</script>

<h1>Example:</h1>
<ul>
    {#each data.persons as person}
        <li>

            {person.name}
        </li>
    {/each}
</ul>
<ButtonComponent />
<style>

</style>

<Brief />