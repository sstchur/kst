import { error } from '@sveltejs/kit';

import { products as eastlake } from '$lib/assets/eastlake/catalog';
import { products as skyline } from '$lib/assets/skyline/catalog';

export const prerender = 'auto';

const productsBySchool = {
  eastlake,
  skyline,
}

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
  const products = productsBySchool[params.school];
  if (!products) {
    throw error(404, 'Not found');
  }

  return { products }
}