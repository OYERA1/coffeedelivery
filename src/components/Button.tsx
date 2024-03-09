import {
  ArrowUDownLeft,
  Minus,
  Plus,
  ShoppingCartSimple,
  Trash,
} from "@phosphor-icons/react";
import { add, minus, remove } from "../_store";
import { useDispatch } from "react-redux";
import { ComponentPropsWithRef } from "react";

type GenericTypeButton = ComponentPropsWithRef<"button">;

export const Button = ({ id, qtd }: { id: string; qtd: number }) => {
  const dispatch = useDispatch();
  const addCoffee = () => {
    dispatch(add({ id }));
  };
  const minusCoffe = () => {
    dispatch(minus({ id }));
  };

  return (
    <div className="flex w-full items-center gap-1 rounded-md bg-base-button p-2 hover:bg-base-hover">
      <Minus
        onClick={minusCoffe}
        role="button"
        className="text-purple hover:text-purple-dark"
        weight="bold"
        size={14}
      />
      <p className="w-5 text-center text-base leading-5">{qtd ? qtd : "0"}</p>
      <Plus
        role="button"
        onClick={addCoffee}
        className="text-purple hover:text-purple-dark"
        weight="bold"
        size={14}
      />
    </div>
  );
};

export const CartButton = () => {
  return (
    <button
      type="button"
      className="rounded-md bg-purple-dark p-2 hover:bg-purple"
    >
      <ShoppingCartSimple weight="fill" color="white" size={22} />
    </button>
  );
};

export const ButtonRemove = ({ id }: { id: string }) => {
  const dispatch = useDispatch();
  const removeCoffe = () => {
    dispatch(remove({ id }));
  };
  return (
    <button
      type="button"
      className="flex items-center gap-2 rounded-md bg-base-button p-2 hover:bg-base-hover"
      onClick={removeCoffe}
    >
      <Trash size={16} className="text-purple" weight="bold" />
      <p className="text-xs font-medium uppercase text-base-subtitle">
        remover
      </p>
    </button>
  );
};

export const ResetButton = ({ className, ...rest }: GenericTypeButton) => {
  return (
    <div className={`flex items-center justify-end gap-4 ${className}`}>
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
