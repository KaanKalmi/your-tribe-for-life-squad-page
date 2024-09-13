<script>
    export let data;
    import {breakpoint, platform} from '../mediaquery.svelte'; // importing mediaqueries!
    import ButtonComponent from '$lib//button.svelte';
    import Brief from '$lib/briefForm.svelte';
</script>

{#if $breakpoint == "xs"}
<style>
    .container{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: rgb(31, 31, 31);
        color: rgb(145, 213, 240);
    }

    .businessCard{
        position: relative;
        width: 90%;
        height: 300px;
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
            width: 50%;
            
            & img{
                height: 100%;
                width: 100%;
                border-radius: 8px 0 0 8px; 
                border-right: 1px solid #42C9FF;
            }
        }

        & .rightAligned{
            margin-left: 1em;

            & h1{
                position: absolute;
                top: 1em;
                margin: .2em;
                color: #42C9FF;
                font-size: 1em;
            }

            & h2{
                position: absolute;
                top: 3em;
                margin: .2em;
                font-size: 1em;
                color: #91D5F0;
            }

            & p {
                position: absolute;
                top: 5.5em;
                margin: .2em;
                color: #FFFFFF;
            }
        }
    }
</style>
{/if}  

{#if $breakpoint == "s"}
<style>
    .container{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: rgb(31, 31, 31);
        color: rgb(145, 213, 240);
    }

    .businessCard{
        position: relative;
        width: 90%;
        height: 300px;
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
            }
        }

        }
        
        & .rightAligned{
            margin-left: 1em;

            & h1{
                position: absolute;
                top: 1em;
                margin: .2em;
                color: #42C9FF;
            }

            & h2{
                position: absolute;
                top: 3em;
                margin: .2em;
                font-size: 1.2em;
                color: #91D5F0;
            }

            & p {
                position: absolute;
                top: 5.5em;
                margin: .2em;
                color: #FFFFFF;
            }
        }
    }
</style>
{/if}  

{#if $breakpoint == "m"}
<style>
    .container{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: rgb(31, 31, 31);
        color: rgb(145, 213, 240);
    }

    .businessCard{
        position: relative;
        width: 700px;
        height: 400px;
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

            & p {
                position: absolute;
                top: 6.25em;
                margin: .25em;
                color: #FFFFFF;
            }
        }
    }
</style>
{/if}    

{#each data.squadD as person}
<div class="container">
    <article class="businessCard">
        <div class="leftAligned">
            {#if person.avatar}
                <img alt="Foto van {person.name}" src="{person.avatar}">
            {:else}
                <img alt="standard icon"
                     src="../../static/images/profile-icon.png"/>
            {/if}
        </div>
        <div class="rightAligned">
            <h1> <a href="/{person.id}"> {person.name} </a> </h1>
            <p> klas : {person.squad_id} </p>
            <ButtonComponent> </ButtonComponent>
        </div>
    </article>
</div>
{/each}