<script>
    export let data;
    import ButtonComponent from './button.svelte';
    import Brief from '$lib/briefForm.svelte';

    function checkAvatarImage(avatar) {
        if (avatar.includes('https')) {
            return true
        }

        return false
    }

    console.log({data});
</script>

<p>dit is squad 1d</p>


<ul>
    {#each data.squadD as person}
        <li>
            {#if person.avatar}
                <img alt="Foto van {person.name}" src="{person.avatar}">
            {:else}
                <img alt="Placeholder"
                     src="data:image/png;base64,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">
            {/if}
            <a href="/{person.id}">


                {person.name}
            </a>
        </li>
    {/each}
</ul>

<p>dit is de F klas </p>
<ul>
    {#each data.squadF as person}
        <li>
            {#if person.avatar}
                <img alt="Foto van {person.name}" src="{person.avatar}">
            {:else}
                <img alt="Placeholder"
                     src="data:image/png;base64,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">
            {/if}
            <a href="/{person.id}">


                {person.name}
            </a>
        </li>
    {/each}
</ul>
<p>dit is de E klas </p>

<ul>
    {#each data.squadE as person}
        <li>
            {#if person.avatar}
                <img alt="Foto van {person.name}" src="{person.avatar}">
            {:else}
                <img alt="Placeholder"
                     src="data:image/png;base64,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">
            {/if}
            <a href="/{person.id}">


                {person.name}
            </a>
        </li>
    {/each}
</ul>
<ButtonComponent/>
<style>
    ul {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));

        gap: 2em;
        /*max-width: 1400px;*/

    }

    li {
        border-radius: 2px;
        border: 1px solid #7C7535;
        background: #CDCDBF;
        box-shadow: 6px 8px 12px 0px rgba(0, 0, 0, 0.35);
        width: 350px;
        height: 225px;
        flex-shrink: 0;
        display: grid;
        grid-template-columns: 150px 1fr;




    }

    img{
        width: 128px;
        grid-column: 1;
        display: grid;
        align-items: center;
        stroke-width: 1px;
        stroke: rgba(30, 30, 30, 0.50);
        filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.25));
        align-self: center;
        padding-left: 2em;
        /*border-right: #ea2e2e 10px solid;*/
    }

</style>

<Brief/>