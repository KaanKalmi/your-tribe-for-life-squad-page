<script>
	export let data;
</script>

<h1>FDND</h1>

<section>
	<h2>{data.persons[1].name} {data.persons[1].prefix} {data.persons[1].surname}</h2>

	<img src="{data.persons[1].avatar}" alt="{data.persons[1].name}">
</section>