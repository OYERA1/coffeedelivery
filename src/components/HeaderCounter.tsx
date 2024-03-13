export function HeaderCounter({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="absolute -right-2 -top-2 flex size-5 items-center justify-center overflow-hidden rounded-full bg-yellow-dark p-2 text-center text-xs
    text-white 
    "
    >
      <p className=" font-bold">{children}</p>
    </div>
  );
}
