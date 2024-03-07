import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import Coffe from "/img.png";
import MainItems from "../MainItems";
export default function Intro() {
  return (
    <section className="flex flex-col-reverse justify-around  gap-4 sm:py-[94px] xl:flex-row xl:gap-14 items-center xl:items-start">
      <section className="flex flex-col gap-16 text-xl font-normal text-base-title">
        <div className="flex w-full flex-col flex-wrap gap-4 text-center xl:text-start ">
          <h1 className="text-center font-baloo text-2xl font-extrabold leading-snug sm:text-5xl xl:text-start">
            Encontre o café perfeito para qualquer hora do dia
          </h1>
          <h3 className="leading-[26px]">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h3>
        </div>
        <div className="flex flex-wrap items-start gap-5 sm:flex-nowrap [&>div]:gap-5">
          <div className="flex flex-col">
            <MainItems variant="bg-yellow-dark">
              <ShoppingCart size={16} weight="fill" color="white" />
              Compra simples e segura
            </MainItems>
            <MainItems variant="bg-yellow">
              <Timer size={16} weight="fill" color="white" />
              Entrega rápida e rastreada
            </MainItems>
          </div>
          <div className="flex w-full flex-col justify-between">
            <MainItems variant="bg-base-subtitle">
              <Package size={16} weight="fill" color="white" />
              Embalagem mantém o café intacto
            </MainItems>
            <MainItems variant="bg-purple">
              <Coffee size={16} weight="fill" color="white" />O café chega
              fresquinho até você
            </MainItems>
          </div>
        </div>
      </section>
      <img src={Coffe} alt="Coffe Cup" className="size-[70%] xl:size-auto" />
    </section>
  );
}
