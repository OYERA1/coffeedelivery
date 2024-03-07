/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,tsx,jsx}"],
	theme: {
		extend: {
			fontFamily: {
				roboto: ["Roboto"],
				baloo: ['"Baloo 2"'],
			},
			colors: {
				yellow: {
					DEFAULT: "rgb(var(--yellow))",
					dark: "rgb(var(--yellow-dark))",
					light: "rgb(var(--yellow-light))",
				},
				purple: {
					DEFAULT: "rgb(var(--purple))",
					light: "rgb(var(--purple-light))",
					dark: "rgb(var(--purple-dark))",
				},
				base: {
					title: "rgb(var(--base-title))",
					subtitle: "rgb(var(--base-subtitle))",
					text: "rgb(var(--base-text))",
					label: "rgb(var(--base-label))",
					hover: "rgb(var(--base-hover))",
					button: "rgb(var(--base-button))",
					input: "rgb(var(--base-input))",
					card: "rgb(var(--base-card))",
					background: "rgb(var(--base-background))",
				},
			},
		},
	},
	plugins: [],
};
