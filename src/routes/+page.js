import fetchJson from "$lib/fetch-json"

export async function load() {
	const url = 'https://fdnd.directus.app/items/person/?filter={"squad_id":3}'
	const test = 'https://fdnd.directus.app/items/person/'
	const persons = await fetchJson(test)

	return {
		persons: persons.data
	}
}
export let csr = false;