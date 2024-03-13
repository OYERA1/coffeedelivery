import { FieldError } from "react-hook-form";

interface IFormField {
  type: "Field" | "Button";
  className?: string;
  children?: React.ReactNode;
  errors?: FieldError | undefined;
}

export default function FormFields({ children, type, errors }: IFormField) {
  if (type === "Field")
    return (
      <fieldset
        className="flex grid-cols-[12.5rem_17.25rem_3.75rem]
        grid-rows-4 flex-col gap-3 gap-y-3 lg:grid
      "
      >
        {children}
      </fieldset>
    );
  if (type === "Button")
    return (
      <fieldset className="relative flex flex-col items-center">
        <div className="flex w-full flex-col gap-4 lg:flex-row">{children}</div>
        {errors && (
          <p
            className="absolute -bottom-4 left-0 italic
          leading-[1px] text-red-500 
          "
          >
            * {errors.message}
          </p>
        )}
      </fieldset>
    );
}
