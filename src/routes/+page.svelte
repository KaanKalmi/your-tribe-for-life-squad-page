<script>
	export let data;
  import ButtonComponent from './button.svelte';
	import Brief from '$lib/briefForm.svelte';
    function checkAvatarImage (avatar) {
        if (avatar.includes('https')) {
            return true
        }

        return false
    }
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
            <a href="/{person.id}">


                {person.name}
            </a>
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