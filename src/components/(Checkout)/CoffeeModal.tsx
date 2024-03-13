import { toBRL, useAppSelector } from "../../_store";
import { ButtonRemove, QuantityButton } from "../Button";

interface ICoffeeModal {
  id: number
}

export default function CoffeeModal({ id }: ICoffeeModal) {
  const items = useAppSelector((cartItem) =>
    cartItem.cart.products.find((i) => i.id === id),
  );

  if (!items) {
    return;
  }
  return (
    <div className="flex items-center gap-5 border-b-[1px] border-base-button p-2 py-6 first:pt-0 last:mb-6">
      <img src={items.image} alt={items.title} className="size-16" />
      <div className="flex flex-col items-start  gap-5">
        <div className="flex gap-5">
          <p>{items.title}</p>
          <p> {toBRL.format(items.price * items.qtd)}</p>
        </div>
        <div className="flex gap-3">
          <QuantityButton id={items.id} />
          <ButtonRemove id={items.id} />
        </div>
      </div>
    </div>
  );
}
