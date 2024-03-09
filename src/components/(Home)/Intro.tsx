import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import Coffe from "/img.png";
import MainItems from "../MainItems";
import HomeHeader from "./HomeHeader";
export default function Intro() {
  return (
    <section className="flex flex-col-reverse items-center  justify-around gap-4 sm:py-[94px] xl:flex-row xl:items-start xl:gap-14">
      <aside className="flex flex-col items-center gap-16 text-xl font-normal text-base-title xl:items-start">
        <HomeHeader
          title="Encontre o café perfeito para qualquer hora do dia"
          description="Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora"
        />
        <div className="flex grid-cols-2 grid-rows-2 flex-col gap-8 lg:grid">
          <MainItems
            variant="bg-yellow-dark"
            icon={<ShoppingCart size={16} weight="fill" color="white" />}
            title="Compra simples e segura"
          />
          <MainItems
            variant="bg-base-subtitle"
            icon={<Package size={16} weight="fill" color="white" />}
            title="Embalagem mantém o café intacto"
          />
          <MainItems
            variant="bg-yellow"
            title="Entrega rápida e rastreada"
            icon={<Timer size={16} weight="fill" color="white" />}
          />
          <MainItems
            variant="bg-purple"
            title="O café chega fresquinho até você"
            icon={<Coffee size={16} weight="fill" color="white" />}
          />
        </div>
      </aside>
      <img src={Coffe} alt="Coffe Cup" className="size-auto" />
    </section>
  );
}
