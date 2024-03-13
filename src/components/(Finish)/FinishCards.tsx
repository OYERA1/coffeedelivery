export default function FinishCards({
  icon,
  variant,
  children,
}: {
  icon: React.ReactNode;
  variant: "bg-purple" | "bg-yellow-dark" | "bg-yellow";
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <div className={`flex size-8 rounded-full p-2 ${variant}`}>{icon}</div>
      <div className="flex flex-col text-base-text">{children}</div>
    </div>
  );
}
