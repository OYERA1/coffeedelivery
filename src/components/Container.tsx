import { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
  return (
    <div className="flex w-full px-4  antialiased sm:justify-center sm:px-40 ">
      <div className=" w-full max-w-[1440px] ">{children}</div>
    </div>
  );
}
