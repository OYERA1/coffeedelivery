export default function CheckoutCard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section
      className="flex w-full max-w-[640px]
    flex-col flex-wrap gap-6 rounded-md rounded-bl-[44px] rounded-tr-[44px] bg-base-card p-10 xl:max-w-max"
    >
      {children}
    </section>
  );
}
