<script>
	export let data;

    // Values that are passed in as props
    // are immediately available
    // console.log({ data });
</script>

<section>
    <a href="/" aria-label="back button">
        <img alt="back button" src="../../assets/chevronRight.svg">
    </a>
    <h2>Fdnd</h2>
</section>

<style>
    section{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        align-items: center;
        background-color: var(--mainColor);
        width: 100%;
        padding: 2rem;
    }
    section a {
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
    section h2 {
        font-size: 3rem;
        text-transform: uppercase;
        font-family: var(--mainFont);
        letter-spacing: 2px;
        font-weight: 800;
        justify-self: center;
        color: white;
    }
</style>