interface IItems {
	variant: "bg-purple" | "bg-yellow" | "bg-yellow-dark" | "bg-base-subtitle";

	children: React.ReactNode[];
}

export default function MainItems({ variant, children }: IItems) {
	return (
		<div className="flex items-center gap-3">
			<div className={`rounded-full p-2 ${variant}`}>{children[0]}</div>
			<p className="text-base leading-5 whitespace-nowrap">{children[1]}</p>
		</div>
	);
}
