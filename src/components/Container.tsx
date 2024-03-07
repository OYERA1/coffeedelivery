import { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
  return (
    <div className="flex w-full flex-wrap px-2 antialiased sm:justify-center sm:px-40">
      <div className=" max-w-[1440px] flex-wrap">{children}</div>
    </div>
  );
}
