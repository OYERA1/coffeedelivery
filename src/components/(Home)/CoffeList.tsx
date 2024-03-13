import cartItems from "../../../data.json";

import { CoffeCard } from "./CoffeCard";

export default function CoffeList() {
  return (
    <section className="flex flex-col items-center justify-center gap-8 p-2 py-8 lg:items-start">
      <h1 className="font-baloo text-[32px] font-extrabold leading-snug text-base-subtitle">
        Nossos cafés
      </h1>
      <div className="flex w-full grid-cols-auto flex-col items-center gap-x-8 gap-y-10 lg:grid">
        {cartItems.coffees.map((item) => (
          <CoffeCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
