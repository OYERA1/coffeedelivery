import FinishModal from "../../components/(Checkout)/CheckoutModal";
import Form from "../../components/(Form)/Form";

export default function Checkout() {
  return (
    <main className="flex w-full flex-col justify-between gap-8 pb-5 xl:flex-row">
      <aside className="flex flex-1 flex-col gap-y-4">
        <p className="font-baloo text-lg font-bold leading-[130%] text-base-subtitle">
          Complete seu pedido
        </p>
        <Form />
      </aside>
      <aside
        className="flex w-full max-w-[640px] flex-col gap-y-4
xl:w-[448px]"
      >
        <p className="font-baloo text-lg font-bold leading-[130%] text-base-subtitle">
          Cafés selecionados
        </p>
        <FinishModal />
      </aside>
    </main>
  );
}
