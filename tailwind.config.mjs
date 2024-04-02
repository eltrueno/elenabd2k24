/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			cursor:{
				alias: 'url(/varitasnape.webp), alias',
				none: 'url(/varitasnape.webp), none'
			}
		},
	},
	plugins: [],
}
