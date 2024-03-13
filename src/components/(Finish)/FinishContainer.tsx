export default function FinishContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-[36px] rounded-br-md rounded-tl-md bg-gradient-to-tl from-purple via-yellow-dark to-yellow p-[2px]">
      <div className="flex size-full flex-col gap-8 rounded-[34px] rounded-br-[4.7px] rounded-tl-[4.7px] bg-white p-10 ">
        {children}
      </div>
    </div>
  );
}
