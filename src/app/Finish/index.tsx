import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import { useAppSelector } from "../../_store";
import illustration from "/Illustration.svg";
import FinishContainer from "../../components/(Finish)/FinishContainer";
import FinishCards from "../../components/(Finish)/FinishCards";

export default function Finish() {
  const items = useAppSelector((item) => item.checkout);

  if (!items.idPedido) {
    return (
      <div className="flex h-full w-full items-center justify-center border">
        <p>Você não fez nenhum pedido!</p>
      </div>
    );
  }
  return (
    <main className="mt-20 flex w-full justify-between">
      <aside className="flex w-full flex-col gap-10">
        <div className="flex flex-col gap-1 leading-[130%]">
          <h1 className="font-baloo text-[32px] font-extrabold text-yellow-dark">
            Uhu! Pedido confirmado
          </h1>
          <p className="text-xl text-base-subtitle">
            Agora é só aguardar que logo o café chegará até você
          </p>
        </div>
        <FinishContainer>
          <FinishCards
            variant="bg-purple"
            icon={<MapPin size={16} className="" color="white" />}
          >
            <p>
              Entrega em{" "}
              <span className="font-bold">
                {items.address.rua}, {items.address.numero}
              </span>
            </p>
            <p>
              {items.address.bairro} - {items.address.cidade},{" "}
              {items.address.uf}
            </p>
          </FinishCards>
          <FinishCards
            variant="bg-yellow"
            icon={<Timer size={16} className="" color="white" />}
          >
            <p>Previsão de entrega</p>
            <p className="font-bold">20 min - 30 min</p>
          </FinishCards>
          <FinishCards
            variant="bg-yellow-dark"
            icon={<CurrencyDollar size={16} className="" color="white" />}
          >
            <p>Pagamento na entrega</p>
            <p className="font-bold">{items.paymentMethod}</p>
          </FinishCards>
        </FinishContainer>
      </aside>
      <aside className="flex w-full">
        <img src={illustration} alt="ilustração" />
      </aside>
    </main>
  );
}
