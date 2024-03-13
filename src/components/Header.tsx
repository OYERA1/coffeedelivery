import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import Logo from "/Logo.svg";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../_store";
import { HeaderCounter } from "./HeaderCounter";

export default function Header() {
  const cartProducts = useAppSelector((item) => item.cart.products);

  const quantitySum = cartProducts.reduce(
    (total, product) => total + product.qtd,
    0,
  );

  return (
    <header className="flex flex-wrap justify-between py-8 sm:justify-between">
      <NavLink to={"/"}>
        <img src={Logo} alt="Logo" title="Logo" />
      </NavLink>
      <div className="flex gap-3">
        <div className="flex items-center space-x-2 rounded-lg bg-purple-light p-2">
          <MapPin size={22} className="text-purple" weight="fill" />
          <p className="font-medium text-purple-dark">São Paulo, SP</p>
        </div>
        <NavLink
          to={"/checkout"}
          className="relative  rounded-lg bg-yellow-light p-2 "
        >
          <ShoppingCart className="text-yellow-dark" weight="fill" size={22} />
          {quantitySum > 0 && <HeaderCounter>{quantitySum}</HeaderCounter>}
        </NavLink>
      </div>
    </header>
  );
}
