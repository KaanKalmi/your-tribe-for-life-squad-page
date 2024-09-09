import fetchJson from "$lib/fetch-json"

export async function load() {
	const url = 'https://fdnd.directus.app/items/person/?filter={"squad_id":3}'
	const url1 = 'https://fdnd.directus.app/items/person/?filter={"squad_id":4}'
	const url2 = 'https://fdnd.directus.app/items/person/?filter={"squad_id":5}'
	const squadeen = await fetchJson(url1)
	const squadtwee = await fetchJson(url2)
	const squaddrie = await fetchJson(url)
	const test = 'https://fdnd.directus.app/items/person/'
	const persons = await fetchJson(test)


	return {
		persons: persons.data,
		squadD: squaddrie.data,
		squada: squadeen.data,
		squad2: squadtwee.data
	}
}
export let csr = false;