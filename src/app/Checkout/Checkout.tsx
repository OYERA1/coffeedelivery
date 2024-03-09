import FinishModal from "../../components/(Checkout)/FinishModal";
import Form from "../../components/(Checkout)/(Form)/Form";

export default function Checkout() {
  return (
    <main className="flex flex-col justify-between gap-8 pb-5 lg:flex-row">
      <aside className="flex flex-col gap-y-4">
        <p className="font-baloo text-lg font-bold leading-[130%] text-base-subtitle">
          Complete seu pedido
        </p>
        <Form />
      </aside>
      <aside className="w-full max-w-[448px] space-y-4">
        <p className="font-baloo text-lg font-bold leading-[130%] text-base-subtitle">
          Cafés selecionados
        </p>
        <FinishModal />
      </aside>
    </main>
  );
}
