<script>
    export let data;
    import ButtonComponent from '$lib/button.svelte';
    import Brief from '$lib/briefForm.svelte';
    import pfp from '$lib/index.js';

    function checkAvatarImage(avatar) {
        if (avatar.includes('https')) {
            return true
        }

        return false
    }

    console.log({data});
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
        font-family: "Italianno", sans-serif;
        font-size: 16px;
        background-color: #33293A;

        & .cards-container {
            display: flex;
            flex-wrap: wrap;
            gap: 24px;
        }

        & .container {
            flex: 1 1 calc(15%);
            box-sizing: border-box;
        }

        & .businessCard{
            position: relative;
            width: 500px;
            height: 350px;
            background-color: #252525;
            border-radius: 8px;
            border: 2px solid #91d5f025;
            display: flex;
            justify-content: center;
            margin: auto;
            box-shadow: 4px 8px 12px 8px rgba(0,0,0,0.35);

            & .leftAligned{
                position: absolute;
                left: 0;
                height: 100%;
                width: 45%;
                
                & img{
                    height: 100%;
                    width: 100%;
                    border-radius: 8px 0 0 8px; 
                    border-right: 1px solid #42C9FF;
                    object-fit: cover;
                }
            }

            & .figure{
                position: absolute;
                bottom: 0;
                z-index: 1;
            }

            & .rightAligned{
                margin-left: 10em;

                & h1{
                    position: absolute;
                    top: 1.2em;
                    margin: .25em;
                    color: #42C9FF;
                }

                & h2{
                    position: absolute;
                    top: 3.25em;
                    margin: .25em;
                    font-size: 1.25em;
                    color: #91D5F0;
                }
            }
        }
    }
</style>
<header> squadpage </header>
<body>
<main>
    <div class="cards-container">
        {#each data.squadD as person}
        <div class="container">
            <article class="businessCard">
                <div class="leftAligned">
                    {#if person.avatar}
                        <img src="{person.avatar}" alt=" ">
                    {:else}
                        <img src="{pfp}" alt=" ">
                    {/if}
                </div>
                <div class="rightAligned">
                    <h1> <a href="/{person.id}"> {person.name} </a> </h1>
                    <h2> klas : {person.squad_id} </h2>
                    <ButtonComponent> </ButtonComponent>
                </div>
            </article>
        </div>
        {/each}
    </div>
</main>
</body>
<Brief/>