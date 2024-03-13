import { InputHTMLAttributes, ReactNode, forwardRef } from "react";
import { FieldError } from "react-hook-form";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  optional?: boolean;
  error?: FieldError | undefined;
  icon?: ReactNode;
  title?: string;
};

export const InputField = forwardRef<HTMLInputElement, InputProps>(
  ({ optional, className, value, error, ...rest }, ref) => {
    return (
      <div
        className={`relative flex flex-wrap
                  items-center gap-1 rounded-[4px]
                  border-[1px] border-base-button  
                  bg-base-input p-3
                  placeholder:text-base-label autofill:bg-base-input
                  read-only:bg-base-input [&>svg]:text-purple appearance-none
                  ${className}`}
      >
        <input
          {...rest}
          ref={ref}
          className="flex-1 overflow-hidden bg-transparent caret-base-text
          focus:outline-none disabled:text-base-label"
        />
        {optional && (
          <p className="select-none text-sm italic text-base-label">Opcional</p>
        )}
        {error && error?.message !== "ok" && (
          <p className="absolute -bottom-4 left-0 z-20 whitespace-nowrap text-xs italic text-red-500">
            *{error?.message}
          </p>
        )}
      </div>
    );
  },
);

InputField.displayName = "Input";

export const InputPayment = forwardRef<HTMLInputElement, InputProps>(
  ({ icon, title, id, ...rest }, ref) => {
    return (
      <label
        htmlFor={id}
        className="flex w-full items-center justify-center gap-3
        whitespace-nowrap rounded-md border-[1px]
        border-transparent bg-base-button p-4 text-xs 
         uppercase text-base-text hover:bg-base-hover has-[:checked]:border-purple has-[:checked]:bg-purple-light [&>svg]:text-purple select-none" 
      >
        {icon}
        {title}
        <input
          className="appearance-none "
          {...rest}
          type="radio"
          id={id}
          ref={ref}
        />
      </label>
    );
  },
);

InputField.displayName = "Input";
