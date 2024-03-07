import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import Logo from "/Logo.svg";
import { NavLink } from "react-router-dom";

export default function Header() {
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
          className="flex items-center rounded-lg bg-yellow-light p-2 "
        >
          <ShoppingCart className="text-yellow-dark" weight="fill" size={22} />
        </NavLink>
      </div>
    </header>
  );
}
