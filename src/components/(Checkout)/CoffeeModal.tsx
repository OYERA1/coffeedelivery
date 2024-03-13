import { Link } from "react-router-dom";
import { toBRL, useAppSelector } from "../../_store";
import { ButtonRemove, QuantityButton } from "../Button";
import { Coffee } from "@phosphor-icons/react";

interface ICoffeeModal {
  id?: number;
}

export default function CoffeeModal({ id }: ICoffeeModal) {
  const items = useAppSelector((cartItem) =>
    cartItem.cart.products.find((i) => i.id === id),
  );

  if (!items) {
    return (
      <div
        className="flex w-full flex-col flex-wrap items-center
      justify-center gap-3 border-b-[1px] border-base-button p-2 py-6 first:pt-0 last:mb-6 "
      >
        <Coffee className="text-yellow-dark" weight="bold" size={72} />
        <p className="whitespace-nowrap">
          Você ainda não adicionou nenhum item a sua lista
        </p>
        <Link
          to="/"
          className="text-xl font-medium text-purple duration-100 hover:cursor-pointer hover:text-purple/70"
        >
          Escolha seu incrivel café aqui!
        </Link>
      </div>
    );
  }
  return (
    <div className="flex h-max w-full flex-col items-center justify-center gap-5 border-b-[1px] border-base-button p-2 py-6 first:pt-0 last:mb-6 md:flex-row">
      <img src={items.image} alt={items.title} className="size-16" />
      <div className="flex w-full flex-col  items-center gap-2 md:items-start">
        <div className="flex w-full flex-col items-center justify-between text-base-subtitle md:flex-row">
          <p className="flex-1">{items.title}</p>
          <p className="text-base font-bold">
            {toBRL.format(items.price * items.qtd)}
          </p>
        </div>
        <div className="flex flex-col gap-3 md:flex-row">
          <QuantityButton id={items.id} />
          <ButtonRemove id={items.id} />
        </div>
      </div>
    </div>
  );
}
