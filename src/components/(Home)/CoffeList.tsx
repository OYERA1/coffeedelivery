import { Button, CartButton } from "../Button";
import { toBRL } from "../../_store";
import { CoffeCard } from "./CoffeCard";
import { coffees } from "../../_store/coffees";

export type TItem = (typeof coffees)[0];

export default function CoffeList() {
  return (
    <section className="flex flex-col items-center justify-center gap-8 p-2 py-8 sm:items-start">
      <h1 className="font-baloo text-[32px] font-extrabold leading-snug text-base-subtitle">
        Nossos cafés
      </h1>
      <div className="flex w-full grid-cols-auto flex-col items-center gap-x-8 gap-y-10 sm:grid">
        {coffees.map((item) => (
          <CoffeCard key={item.id} item={item}>
            <div className="flex items-center gap-1 text-base-text">
              <p className="text-sm">R$</p>
              <p className="font-baloo text-2xl font-extrabold">
                {toBRL.format(item.price).slice(3)}
              </p>
            </div>
            <div className="flex gap-2">
              <Button id={item.id} qtd={item.qtd} />
              <CartButton />
            </div>
          </CoffeCard>
        ))}
      </div>
    </section>
  );
}
