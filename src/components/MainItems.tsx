interface IItems {
  variant: "bg-purple" | "bg-yellow" | "bg-yellow-dark" | "bg-base-subtitle";
  icon: React.ReactNode;
	title: string
}

export default function MainItems({ variant, icon, title }: IItems) {
  return (
    <div className="flex items-center gap-3">
      <div className={`rounded-full p-2 ${variant}`}>{icon}</div>
      <p className="whitespace-nowrap text-base leading-5">{title}</p>
    </div>
  );
}
