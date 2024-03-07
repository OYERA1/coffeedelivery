import { InputHTMLAttributes, forwardRef } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  optional?: boolean;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ optional, className, ...rest }, ref) => {
    return (
      <div
        className={`flex items-center  gap-1 rounded-[4px] border-[1px]
                  border-base-button bg-base-input  
                  p-3 placeholder:text-base-label ${className}`}
      >
        <input
          {...rest}
          ref={ref}
          className="flex-1 overflow-hidden bg-transparent caret-base-text
          focus:outline-none disabled:text-base-hover"
        />

        {optional && (
          <p className="select-none text-sm italic text-base-label">Opcional</p>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";
