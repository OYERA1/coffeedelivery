import { toBRL } from "../../_store";
import { AddToCartButton, QuantityButton } from "../Button";
import { ProductInterface } from "../../@types/interface";

export function CoffeCard({ item }: { item: ProductInterface }) {
  const { description, image, tags, title, id, price } = item;

  return (
    <div
      className="
    flex w-max select-none flex-col items-center justify-center rounded-md rounded-bl-[36px] rounded-tr-[36px] bg-base-card p-5"
    >
      <img
        src={image}
        alt=""
        className="-mt-10 mb-3 object-fill"
        width={120}
        height={120}
      />
      <section className="mb-8 flex flex-col items-center gap-5">
        <div className="flex gap-2">
          {tags.map((title: string) => (
            <div
              className="rounded-full bg-yellow-light px-2 py-1 text-[10px] font-bold uppercase leading-3 text-yellow-dark"
              key={title}
            >
              {title}
            </div>
          ))}
        </div>
        <div className="flex w-[216px] flex-col items-center justify-center gap-2 text-center">
          <h1 className="font-baloo text-xl font-bold text-base-subtitle">
            {title}
          </h1>
          <p className="max-w-52 text-sm font-normal text-base-label ">
            {description}
          </p>
        </div>
      </section>
      <section className="flex w-full items-center justify-between">
        <div className="flex items-center gap-1 text-base-text">
          <p className="text-sm">R$</p>
          <p className="font-baloo text-2xl font-extrabold">
            {toBRL.format(price).slice(3)}
          </p>
        </div>
        <div className="flex gap-2">
          <QuantityButton id={id} />
          <AddToCartButton id={id} />
        </div>
      </section>
    </div>
  );
}
