<script>
    export let data;
    import Brief from '$lib/briefForm.svelte';
    import DesktopCard from '$lib/desktopCard.svelte';

    console.log({data});

    let persons = data.persons;
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Italianno&display=swap');

    body{
        background-color: #33293A;
    }

    header{
        font-size: 80px;
        color: white;
        font-family: "Italianno", sans-serif;
        margin-left: 0.5em;
        margin-block: 1em;
    }

    main {
        line-height: 1.5;
        font-family: sans-serif;
        font-size: 16px;
        background-color: #33293A;
    }
</style>

<body>
    <header> 
        squadpage 
    </header>
    <main>
        <DesktopCard {persons}/>
    </main>
</body>
<Brief/>