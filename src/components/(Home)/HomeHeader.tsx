export default function HomeHeader({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex w-full flex-col flex-wrap gap-4 text-center xl:text-start ">
      <h1 className="text-center font-baloo text-2xl font-extrabold leading-snug sm:text-5xl xl:text-start">
        {title}
      </h1>
      <h3 className="leading-[26px]">
        {description}
      </h3>
    </div>
  );
}
