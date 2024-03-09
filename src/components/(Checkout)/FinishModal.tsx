import CoffeeModal from "./CoffeeModal";
import { coffees } from "../../_store/coffees";

export default function FinishModal() {

  return (
    <section className="flex w-full flex-col rounded-md rounded-bl-[44px] rounded-tr-[44px] bg-base-card p-10">
      <div className="w-max">
        {coffees.map(
          (i) =>
            i.qtd > 0 && (
              <CoffeeModal
                key={i.id}
                img={i.image}
                title={i.title}
                value={i.price * i.qtd}
                qtd={i.qtd}
                id={i.id}
              />
            ),
        )}
      </div>
      <div className="flex">
        <div>
          <p>total de itens</p>
          {}
        </div>
      </div>
      <button
        form="teste"
        className="w-full rounded-md bg-yellow px-2 py-3 uppercase text-white duration-150 ease-in-out hover:bg-yellow-dark "
        type="submit"
      >
        confirmar pedido
      </button>
    </section>
  );
}
