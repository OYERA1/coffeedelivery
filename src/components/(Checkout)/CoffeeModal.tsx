import { toBRL } from "../../_store";
import { Button, ButtonRemove } from "../Button";

interface ICoffeeModal {
  title: string;
  img?: string;
  value: number;
  qtd: number;
  id: string;
}

export default function CoffeeModal({
  title,
  img,
  value,
  qtd,
  id,
}: ICoffeeModal) {
  return (
    <div className="flex items-center gap-5 border-b-[1px] border-base-button p-2 py-6 first:pt-0 last:mb-6">
      <img src={img} alt={title} className="size-16" />
      <div className="flex flex-col items-start  gap-5">
        <div className="flex gap-5">
          <p>{title}</p>
          <p> {toBRL.format(value)}</p>
        </div>
        <div className="flex gap-3">
          <Button id={id} qtd={qtd} />
          <ButtonRemove id={id} />
        </div>
      </div>
    </div>
  );
}
