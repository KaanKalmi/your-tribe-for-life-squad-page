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
            gap: 16px;
        }

        & .container {
            flex: 1 1 calc(15%);
            box-sizing: border-box;
        }

        & .container:nth-child(even) {
            & .businessCard{
                transform: rotate(-.5deg);
            }
        }
    
        & .container:nth-child(odd) {
            & .businessCard{
                transform: rotate(.5deg);
            }
        }

        & .businessCard {
            position: relative;
            width: 525px;
            height: 350px;
            background-color: #fdf3e2;
            border-radius: 8px;
            border: 2px solid #3b3b3b;
            display: flex;
            justify-content: center;
            margin: auto;
            box-shadow: 4px 8px 12px 8px rgba(0,0,0,0.25);

            & .leftAligned {
                position: absolute;
                left: 0;
                height: 100%;
                width: 50%;
                
                & img {
                    height: 100%;
                    width: 100%;
                    border-radius: 6px 0 0 6px; 
                    border-right: 2px solid #3b3b3b;
                    object-fit: cover;
                }
            }

            & .rightAligned {
                margin-left: 1em;

                & h1 {
                    position: absolute;
                    top: 0;
                    margin: 0;
                    color: #002b3b;
                    font-size: 1.5em;
                    font-weight: 700;
                }

                & h2 {
                    position: absolute;
                    top: 1.5em;
                    margin: 0;
                    color: #080052;
                    font-size: 1.25em;
                    font-weight: 600;
                }

                & p{
                    position: absolute;
                    top: 4em;
                    margin: 0;
                    color: #080052;
                    width: 25ch;
                }

                & a {
                    position: absolute;
                    bottom: 0;
                    right: 0;
                    background-color: #140A3D;
                    color: white;
                    font-size: 16px;
                    padding: 16px;
                    border: none;
                    cursor: pointer;
                    text-align: center;
                    width: 108px;
                    border-radius: 24px 0 6px;
                    box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.20);
                    height: 47px;
                    grid-column: 1;
                    text-decoration: none;
                }
            }
        }
    }
</style>

<body>
    <header> 
        squadpage 
    </header>
    <main>
        <section class="cards-container">
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
                        <h1> {person.name} {person.prefix} {person.surname} </h1>
                        <h2> klas : {person.squad_id} </h2>
                        <p> {person.bio}</p>
                        <a href="/{person.id}"> bericht </a>
                    </div>
                </article>
            </div>
            {/each}
        </section>
    </main>
</body>
<Brief/>