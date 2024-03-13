import { toBRL, useAppSelector } from "../../_store";
import { ButtonRemove, QuantityButton } from "../Button";

interface ICoffeeModal {
  id: number;
}

export default function CoffeeModal({ id }: ICoffeeModal) {
  const items = useAppSelector((cartItem) =>
    cartItem.cart.products.find((i) => i.id === id),
  );

  if (!items) {
    return;
  }
  return (
    <div
      className="flex h-max w-full flex-col items-center justify-center
     gap-5 border-b-[1px] border-base-button p-2 py-6 first:pt-0 last:mb-6 lg:flex-row"
    >
      <img src={items.image} alt={items.title} className="size-16" />
      <div className="flex w-full flex-col  items-center gap-2 lg:items-start">
        <div className="flex w-full  flex-col items-center justify-between text-base-subtitle lg:flex-row">
          <p className="flex-1">{items.title}</p>
          <p className="text-base font-bold">
            {toBRL.format(items.price * items.qtd)}
          </p>
        </div>
        <div className="flex flex-col gap-3 lg:flex-row">
          <QuantityButton id={items.id} />
          <ButtonRemove id={items.id} />
        </div>
      </div>
    </div>
  );
}
