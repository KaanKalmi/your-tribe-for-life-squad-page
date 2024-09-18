<script>
    export let data

    import Brief from '$lib/briefForm.svelte';
    import backButtonIcon from '$lib/images/chevronRight.svg';
    import { onMount } from 'svelte';

    function checkAvatarImage (avatar) {
        if (avatar.includes('https')) {
        return true
        } 
        
        return false
    }

    // Variabele om bij te houden of het artikel open is
    let isOpen = false;

    // Functie om de .open class toe te voegen
    const toggleOpen = () => {
        isOpen = !isOpen;
    };
  
</script>

<main>
    <header>
        <section class="topHeader">
            <a href="/" aria-label="back button">
                <img alt="back button" src={backButtonIcon}>
            </a>
            <h2>Fdnd</h2>
        </section>

        <section>
            <div class="envelop close" class:open={isOpen}>
                <div class="flap"></div>
                <article>
                    <div>
                        {#if data.person.avatar.length > 0 && checkAvatarImage (data.person.avatar)}
                            <img src="{data.person.avatar}" alt="Avatar van {data.person.name}">
                        {:else if data.person.avatar.length > 0 || checkAvatarImage (data.person.avatar)}
                            <h3>{data.person.avatar}</h3>
                        {:else}
                            <img src="https://robohash.org/mail@ashallendesign.co.uk" alt="Avatar van {data.person.name}">
                        {/if}
                        <img id="postZegelFrame" src="../../assets/postzegelFrame.svg" alt="postzegelFrame">
                    </div>
                

                    <div>
                        <h1>{data.person.name} {data.person.surname}</h1>
                        <h3>Squad {data.person.squad_id}</h3>
                    </div>

                </article>
            </div>
            <div class="envelop" class:open={isOpen}>
                <Brief />
            </div>

            <button on:click={toggleOpen}>Brief versturen</button>
        </section>

        
    </header>
    
</main>


<style>
    main {
        background-color: var(--mainColor);
    }
    header {
        display: grid;
        grid-template-rows:  1fr 6fr;
        width: 100%;
        min-height: 100vh;
    }
    .topHeader{
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        align-items: center;
        padding: 0rem 2rem;
    }
    .topHeader a {
        width: 3rem;
        height: 3rem;
        background-color: #fff;
        color: var(--secondColor);
        text-decoration: none;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.5rem;
    }
    .topHeader h2 {
        font-size: 3rem;
        text-transform: uppercase;
        font-family: 'Open Sans', 'Helvetica Neue', sans-serif;
        letter-spacing: 2px;
        font-weight: 800;
        justify-self: center;
        color: white;
    }

    section:nth-child(2){
        /* background-color: blue; */
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    article {
        position: relative;
        width: 50rem;
        min-height: 55vh;
        background-color: var(--envelopColor);
        margin-bottom: 1.75rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 2px;
        font-family: "Shantell Sans", system-ui;
        color: #1D1968;
        z-index: 99;
    }
    .envelop .flap {
        border-left: 25rem solid transparent;
        border-right: 25rem solid transparent;
        border-bottom: 5rem solid transparent;
        border-top: 12rem solid #f5ead9;
        transform-origin: top;
        pointer-events: none;
        position: absolute;
        z-index: -1;
    }
    .envelop:nth-child(2) {
        display: none;
    }
    .envelop.open:nth-child(2) {
        display: flex;
    }
    .close .flap {
        transform: rotateX(0deg);
        transition: transform 0.4s 0.6s ease, z-index 1s;
        z-index: 5;
    }
    .open .flap {
        transform: rotateX(180deg);
        transition: transform 0.4s ease, z-index 0.6s;
        z-index: 1;
    }
    article div:nth-child(1) {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    article div:nth-child(1) img {
        position: absolute;
        top: 1rem;
        right: 1rem;
        object-fit: cover;
    }
    article div:nth-child(1) h3 {
        position: absolute;
        top: 3rem;
        right: 2.25rem;
        font-size: 5rem;
        object-fit: cover;
    }
    article div img:nth-child(1) {
        margin: .65rem 0.6rem;
        width: 6.6rem;
        height: 9rem;
    }
    img#postZegelFrame {
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    }
    article div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    article h1 {
        font-size: 2rem;
        margin-bottom: .5rem;
    }
    article h3 {
        font-weight: 100;
    }
    button {
        border: none;
        font-size: 1rem;
        padding: .75rem 2rem;
        background-color: rgb(239, 38, 38);        
        border-radius: 4px;
        color: white;
        width: max-content;
        cursor: pointer;
        transition: .5s ease-out;
    }
    button:hover {
        background-color: rgb(220, 35, 35); 
    }
</style>