<script>
	export let data;
  import ButtonComponent from './button.svelte';
	import Brief from '$lib/briefForm.svelte';
	console.log({ data });
</script>

<h1>Example:</h1>
<h2>{data.persons.name}</h2>
<p>{data.persons.prefix} {data.persons.surname}</p>
<ButtonComponent />
<style>

</style>

<Brief />