import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	if (params.slug === 'hello-world') {
		return {
			title: 'Hello world!',
			content: 'Welcome to our blog. Lorem ipsum dolor sit amet...'
		};
	}

	error(404, 'Not found');
}

// /** @type {import('./$types').PageLoad} */
// import getDirectusInstance from '$lib/directus';
// import { readItems } from '@directus/sdk';
// export async function load({ fetch }) {
// 	const directus = getDirectusInstance(fetch);
// 	return {
// 		global: await directus.request(readItems('global')),
// 	};
// }

let csr = false