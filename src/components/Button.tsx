import {
  ArrowUDownLeft,
  Minus,
  Plus,
  ShoppingCartSimple,
  Trash,
} from "@phosphor-icons/react";

import {
  addProduct,
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../_store/cart/slice";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../_store";
import { useLocation } from "react-router-dom";

export const QuantityButton = ({ id }: { id: number }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const coffee = useAppSelector((item) =>
    item.cart.coffees.find((i) => i.id === id),
  );
  const cart = useAppSelector((item) =>
    item.cart.products.find((i) => i.id === id),
  );

  return (
    <div className="flex w-full items-center gap-1 rounded-md bg-base-button p-2 hover:bg-base-hover select-none">
      <Minus
        onClick={() =>
          dispatch(decreaseQuantity({ id, type: location.pathname }))
        }
        role="button"
        className="text-purple hover:text-purple-dark"
        weight="bold"
        size={14}
      />

      <p className="w-5 text-center text-base leading-5">
        {location.pathname === "/checkout" ? cart?.qtd || 0 : coffee?.qtd || 0}
      </p>
      <Plus
        role="button"
        onClick={() =>
          dispatch(increaseQuantity({ id, type: location.pathname }))
        }
        className="text-purple hover:text-purple-dark"
        weight="bold"
        size={14}
      />
    </div>
  );
};

export const AddToCartButton = ({ id }: { id: number }) => {
  const dispatch = useDispatch();

  return (
    <button
      type="button"
      className="rounded-md bg-purple-dark p-2 hover:bg-purple"
      onClick={() => dispatch(addProduct(id))}
    >
      <ShoppingCartSimple weight="fill" color="white" size={22} />
    </button>
  );
};

export const ButtonRemove = ({ id }: { id: number }) => {
  const dispatch = useDispatch();

  return (
    <button
      type="button"
      className="flex items-center gap-2 rounded-md bg-base-button p-2 hover:bg-base-hover"
      onClick={() => dispatch(removeFromCart(id))}
    >
      <Trash size={16} className="text-purple" weight="bold" />
      <p className="text-xs font-medium uppercase text-base-subtitle">
        remover
      </p>
    </button>
  );
};

export const ResetButton = ({ ...rest }) => {
  return (
    <div className="flex items-center justify-end gap-4 xl:col-span-2">
      <button
        className="size-max rounded-full bg-yellow p-1"
        type="button"
        {...rest}
      >
        <ArrowUDownLeft size={18} />
      </button>
    </div>
  );
};
