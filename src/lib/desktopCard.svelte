<script>
    export let persons;
    import ButtonComponent from "$lib//button.svelte";
    import pfp from "$lib/index.js";

    function checkAvatarImage(avatar) {
        if (avatar.includes("https")) {
            return true;
        }

        return false;
    }
</script>


<style>
    .cards-container {
        display: flex;
        flex-wrap: wrap;
        gap: 16px;

        & .container {
            flex: 1 1 calc(15%);
            box-sizing: border-box;
        }

        & .container:nth-child(even) {
            & .businessCard {
                transform: rotate(-0.5deg);
            }
        }

        & .container:nth-child(odd) {
            & .businessCard {
                transform: rotate(0.5deg);
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
            box-shadow: 4px 8px 12px 8px rgba(0, 0, 0, 0.25);

            & .leftAligned {
                position: absolute;
                left: 0;
                height: 100%;
                width: 40%;

                & img {
                    height: 100%;
                    width: 100%;
                    border-radius: 6px 0 0 6px;
                    border-right: 2px solid #3b3b3b;
                    object-fit: cover;
                }
            }

            & .rightAligned {
                margin-left: -5em;

                & h1 {
                    position: absolute;
                    top: 0;
                    margin: 0;
                    color: #002b3b;
                    font-size: 1.45em;
                    font-weight: 700;
                    text-transform: uppercase;
                }

                & h2 {
                    position: absolute;
                    top: 1.5em;
                    margin: 0;
                    color: #080052;
                    font-size: 1.25em;
                    font-weight: 600;
                }

                & p {
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
                    background-color: #140a3d;
                    color: white;
                    font-size: 16px;
                    padding: 16px;
                    border: none;
                    cursor: pointer;
                    text-align: center;
                    width: 108px;
                    border-radius: 24px 0 6px;
                    box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.2);
                    height: 47px;
                    grid-column: 1;
                    text-decoration: none;
                }
            }
        }
    }
</style>

<section class="cards-container">
    {#each persons as person}
        <div class="container">
            <article class="businessCard">
                <div class="leftAligned">
                    {#if person.avatar}
                        <img src={person.avatar} alt=" " />
                    {:else}
                        <img src={pfp} alt=" " />
                    {/if}
                </div>
                <div class="rightAligned">
                    <h1>{person.name} {person.prefix} {person.surname}</h1>
                    <h2>klas : {person.squad_id}</h2>
                    <p>{person.bio}</p>
                    <ButtonComponent />
                </div>
            </article>
        </div>
    {/each}
</section>