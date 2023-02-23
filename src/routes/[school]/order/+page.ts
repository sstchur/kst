import { error } from '@sveltejs/kit';

import * as productsBySchool from '$lib/assets/catalogs';
console.log(productsBySchool);
export const prerender = 'auto';


/** @type {import('./$types').PageLoad} */
export function load({ params }) {
  const products = productsBySchool[params.school].products;
  if (!products) {
    throw error(404, 'Not found');
  }

  return { products, school: params.school }
}