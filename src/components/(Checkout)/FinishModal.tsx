import { toBRL, useAppSelector } from "../../_store";
import { getDistance, convertDistance } from "geolib";
import CoffeeModal from "./CoffeeModal";
import CheckoutCard from "./CheckoutCard";

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
  const lat = import.meta.env.VITE_VERCEL_LATITUDE_REFERENCE;
  const lng = import.meta.env.VITE_VERCEL_LONGITUDE_REFERENCE;

  const frete = ({ latitude, longitude }: AddressInterface) => {
    if (!latitude || !longitude) return 1;
    const distance = getDistance(
      {
        latitude: lat,
        longitude: lng,
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
    <div className="flex  flex-wrap space-y-3">
      <CheckoutCard>
        <div className="flex flex-col">
          {cartItems.map(
            (i) => i.qtd > 0 && <CoffeeModal key={i.id} id={i.id} />,
          )}
          {!cartItems.length && <CoffeeModal />}
        </div>
        <div className="flex flex-col gap-4 *:flex *:justify-between">
          <div>
            <p>Total de itens</p>
            <p>{toBRL.format(totalPrice)}</p>
          </div>
          <div>
            <p>Entrega</p>
            <p>{toBRL.format(frete(address) * 2)}</p>
          </div>
          <div className="text-xl font-bold capitalize text-base-subtitle">
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
      </CheckoutCard>
    </div>
  );
}
