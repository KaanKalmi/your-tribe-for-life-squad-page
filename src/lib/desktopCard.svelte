<script>
    export let data;
    // Values that are passed in as props
    // are immediately available
    console.log({ data });

    import { onMount } from 'svelte';

    onMount(() => {
        let profileCard = document.querySelector(".interactive-card");
        
        if (profileCard) {
            profileCard.addEventListener("click", () => {
                profileCard.classList.toggle("enlarged");
                console.log("click");
            });
        } else {
            console.error("Element with class 'interactive-card' not found.");
        }
    });
</script>

<style>
    .enlarged {
        transform: scale(1.2);
        background-color: red;
    }

    .border-img {
        background-image: none;
        border: 1px solid #000;
        height: 225px;
        width: 256px;
        margin-block: 12px;
        margin-inline: 8px;
        overflow: hidden;

        & article {
            background: transparent;
            height: 100%;
            width: 100%;

            & img {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 64px;
                width: 64px;
                border: 1px solid red;
                border-radius: 4px;
                align-content: center;

                &.center-img {
                    display: block;
                    margin: 12px auto;
                }
            }

            & h3, h4, p {
                text-align: center;
                margin-block: 8px;
                font-size: 24px;
            }
        }
    }
</style>

<div class="border-img">
    <article class="interactive-card">
        <img src="#" class="center-img" alt="#">
        <h3>Naam</h3>
        <h4>Achternaam</h4>
        <p>Squad</p>
    </article>
</div>