interface ICard {
  icon: React.ReactNode;
  title: string;
  description: string;
}
export default function CheckoutHeader({ title, description, icon }: ICard) {
  return (
    <div className="flex w-full flex-wrap items-start gap-2">
      <span>{icon}</span>
      <div className="flex flex-col items-start *:leading-[130%]">
        <p className="text-base text-base-subtitle">{title}</p>
        <p className="text-sm text-base-text">{description}</p>
      </div>
    </div>
  );
}
