import fetchJson from "$lib/fetch-json"

export async function load() {
	const url = 'https://fdnd.directus.app/items/person/?filter={"squad_id":3}'
	const squadD = await fetchJson(url)

	const url1 = 'https://fdnd.directus.app/items/person/?filter={"squad_id":4}'
	const squadE = await fetchJson(url1)

	const url2 = 'https://fdnd.directus.app/items/person/?filter={"squad_id":5}'
	const squadF = await fetchJson(url2)

	// iedereen
	const everyone = 'https://fdnd.directus.app/items/person/'
	const persons = await fetchJson(everyone)


	return {
		persons: persons.data,
		squadD: squadD.data,
		squadE: squadE.data,
		squadF: squadF.data
	}
}
export let csr = false;