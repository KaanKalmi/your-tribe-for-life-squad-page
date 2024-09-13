<script>
  export let data;
</script>

<body>
  <h1>FDND</h1>

  <section>
    <ul>
      {#each data.persons as person}
        <li>
          <a href="/person/{person.id}">
            <img src="{person.avatar}" alt="{person.name}">
            <h2>{person.name} {person.prefix} {person.surname}</h2>
            <p>{person.role}</p>
          </a>
        </li>
      {/each}
    </ul>
  </section>
</body>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&display=swap');

	* {
		font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
		height: 100%;
		scroll-snap-type: x mandatory;
		overflow-x: hidden;
	}

	h1 {
		display: flex;
		justify-content: center;
		margin: 1em 0;
		color: white;
		/* transform: rotate(-1deg); */
	}

	body {
		height: 100%;
		width: 100%;
		margin: 0;
		background-color: #4D10CF;
	}

	ul {
		display: flex;
		flex-wrap: wrap;
		gap: 1.5em;
		padding: 0;
		margin: 0;

		justify-content: center;
	}

	li {
        display: flex;
        flex-direction: column;
		align-items: center;
		max-height: 20em;
        /* background-color: white; */
        /* border: 0.1em solid black; */

		list-style: none;
		width: 12em;
    } 

	a {
		text-decoration: none;
		color: black	;
	}

    h2, p {
        text-align: center;
        font-family: Caveat, cursive;
		color: white;
		margin: 0;
    }

	p {
		font-size: 1.5em;
	}

    img {
        width: 12em;
		height: 12em;
		object-fit: cover;
		border-radius: 50%;
        /* margin: 1em; */
        /* left: 0; */

        /* transform: rotate(-1deg) */
    }
</style>

