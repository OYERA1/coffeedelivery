import Coffe from "./CoffeCard";
import { coffees } from "../../../data.json";

const type = coffees[0];
export type JSONData = typeof type;

export default function CoffeList() {
  return (
    <section className="flex flex-col flex-wrap items-center justify-center gap-8 p-2 py-8 sm:items-start">
      <h1 className="font-baloo text-[32px] font-extrabold leading-snug text-base-subtitle">
        Nossos cafés
      </h1>
      <div className="grid w-max grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5">
        {coffees.map(
          ({ description, id, price, image, tags, title }: JSONData) => (
            <Coffe
              price={price}
              key={id}
              id={id}
              description={description}
              image={image}
              title={title}
              tags={tags}
            />
          ),
        )}
      </div>
    </section>
  );
}
