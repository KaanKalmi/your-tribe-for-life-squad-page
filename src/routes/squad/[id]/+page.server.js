import fetchJson from '$lib/fetch-json.js'

export async function load({ params }) {
	let squadId = params.id
	
	// klassen vorig jaar
	const url = `https://fdnd.directus.app/items/person/?filter={"squad_id": "${squadId}"}`
	const data = await fetchJson(url)

	console.log(data);

	return { data: data.data }
}