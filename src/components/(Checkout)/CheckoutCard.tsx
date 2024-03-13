export default function CheckoutCard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section
      className="flex w-full 
    flex-col gap-6 rounded-md rounded-bl-[44px] rounded-tr-[44px] bg-base-card p-10 "
    >
      {children}
    </section>
  );
}
