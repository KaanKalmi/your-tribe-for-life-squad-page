<script>
	export let data;
  import ButtonComponent from './button.svelte';
	import Brief from '$lib/briefForm.svelte';
	console.log({ data });
</script>

<h1>Example:</h1>
<!--<ul>-->
<!--    {#each data.persons as person}-->
<!--        <li>-->

<!--            {person.name}-->
<!--        </li>-->
<!--    {/each}-->
<!--</ul>-->
<p>dit is squad 1d</p>
<ul>

    {#each data.squadD as person}
        <li>

            {person.name}
        </li>
    {/each}
</ul>
<hr>
<p>dit is een andere klas </p>
<ul>

    {#each data.squad2 as person}
        <li>

            {person.name}
        </li>
    {/each}
</ul>
<p>dit is een andere klas </p>
<ul>

    {#each data.squada as person}
        <li>

            {person.name}
        </li>
    {/each}
</ul>
<ButtonComponent />
<style>


</style>

<Brief />