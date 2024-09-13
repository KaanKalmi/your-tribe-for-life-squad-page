<script>
    export let data;
  </script>

<body>

<header>
    <a href="../">Terug</a>
    <h1>Visitekaartje</h1>
</header>

<section>
    <img src="{data.person.avatar}" alt="avatar">
    <h2>{data.persons.name}</h2>
    <p>{data.persons.bio}</p>
</section>
    
</body>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&display=swap');

    * {
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        height: 100%;
    }

    body {
        height: 100%;
        background-color: #4D10CF;
    }

    header {
        display: flex;
        align-items: center;
        margin: 1em 0;

        & a {
            text-decoration: none;
            color: black;
            background-color: white;
            border: 0.1em solid black;
            padding: 1em;

            border-radius: 50% 0 0 50%;
        }

        & h1 {
            margin: 0 auto;
            transform: rotate(1deg);
            color: white;
        }
    }

    section {
        display: flex;
        flex-direction: column;
        background-color: white;
        border: 0.1em solid black;
    } 

    @media (min-width: 720px) {
        section {
            max-width: 60vw;
            margin: 0 auto;
        }
    }

    h2, p {
        text-align: center;
        font-family: Caveat, cursive;
    }

    h2 {
        font-size: 2em;
        margin: 0;
    }

    img {
        max-width: 10rem;
        margin: 1em;
        left: 0;

        transform: rotate(-1deg)
    }
</style>