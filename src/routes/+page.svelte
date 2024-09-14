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
        font-family: sans-serif;
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

        & .container:nth-child(even){
            & .businessCard{
                transform: rotate(-.5deg);
            }
        }
    
        & .container:nth-child(odd){
            & .businessCard{
                transform: rotate(.5deg);
            }
        }

        & .businessCard{
            position: relative;
            width: 500px;
            height: 350px;
            background-color: #fdf3e2;
            border-radius: 8px;
            border: 2px solid #3b3b3b;
            display: flex;
            justify-content: center;
            margin: auto;
            box-shadow: 4px 8px 12px 8px rgba(0,0,0,0.25);

            & .leftAligned{
                position: absolute;
                left: 0;
                height: 100%;
                width: 50%;
                
                & img{
                    height: 100%;
                    width: 100%;
                    border-radius: 6px 0 0 6px; 
                    border-right: 2px solid #3b3b3b;
                    object-fit: cover;
                }
            }

            & .rightAligned{
                margin-left: 8em;

                & h1{
                    position: absolute;
                    top: 1.2em;
                    margin: .25em;
                    color: #002b3b;
                    font-size: 1.5em;
                    font-weight: 700;
                }

                & h2{
                    position: absolute;
                    top: 3em;
                    margin: .25em;
                    color: #080052;
                    font-size: 1.25em;
                    font-weight: 600;
                }

                & a{
                    text-decoration: none;
                    color: #002b3b;
                }
            }
        }
    }
</style>
<header> squadpage </header>
<body>
<main>
    <div class="cards-container">
        {#each data.persons as person}
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