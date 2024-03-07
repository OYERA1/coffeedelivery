import { Minus, Plus } from "@phosphor-icons/react";
import { useState } from "react";

export default function Button() {
  const [value, setValue] = useState(0);
  return (
    <div className="flex items-center gap-1 rounded-md bg-base-button p-2 hover:bg-base-hover">
      <Minus
        role="button"
        onClick={() => value > 0 && setValue(value - 1)}
        className="text-purple hover:text-purple-dark"
        weight="bold"
        size={14}
      />
      <p className="w-5 text-center text-base leading-5">{value}</p>
      <Plus
        role="button"
        onClick={() => setValue(value + 1)}
        className="text-purple hover:text-purple-dark"
        weight="bold"
        size={14}
      />
    </div>
  );
}
