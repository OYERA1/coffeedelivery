export default function FormCard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full max-w-[640px] flex-col flex-wrap gap-8 rounded-md bg-base-card p-10">
      {children}
    </div>
  );
}
