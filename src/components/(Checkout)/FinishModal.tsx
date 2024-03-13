import { toBRL, useAppSelector } from "../../_store";
import { getDistance, convertDistance } from "geolib";
import CoffeeModal from "./CoffeeModal";

interface AddressInterface {
  latitude: string;
  longitude: string;
}

export default function FinishModal() {
  const address = useAppSelector((item) => item.cart.address);
  const cartItems = useAppSelector((item) => item.cart.products);
  const totalPrice = cartItems.reduce(
    (total, product) => total + product.qtd * product.price,
    0,
  );

  const frete = ({ latitude, longitude }: AddressInterface) => {
    if (!latitude || !longitude) return 1;
    const distance = getDistance(
      {
        latitude: import.meta.env.VITE_VERCEL_LATITUDE_REFERENCE,
        longitude: import.meta.env.VITE_VERCEL_LONGITUDE_REFERENCE,
      },
      {
        latitude,
        longitude,
      },
    );

    const km = convertDistance(Math.floor(distance), "km");

    if (km < 1) return 1;
    return km;
  };

  return (
    <section className="flex w-full flex-col gap-6 rounded-md rounded-bl-[44px] rounded-tr-[44px] bg-base-card p-10">
      <div className="flex">
        {cartItems.map(
          (i) => i.qtd > 0 && <CoffeeModal key={i.id} id={i.id} />,
        )}
      </div>
      <div className="flex w-full flex-col gap-4 *:flex *:justify-between">
        <div>
          <p>Total de itens</p>
          <p>{toBRL.format(totalPrice)}</p>
        </div>
        <div>
          <p>Entrega</p>
          <p>{toBRL.format(frete(address) * 2)}</p>
        </div>
        <div className=" text-xl font-bold capitalize text-base-subtitle">
          <p>total</p>
          <p>{toBRL.format(totalPrice + frete(address) * 2)}</p>
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
