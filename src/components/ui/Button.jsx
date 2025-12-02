import React from "react";
import clsx from "clsx";

const Button = ({ type = "filled", text, children, onClick, className }) => {
  const baseStyles =
    "px-6 py-2 rounded-button font-semibold transition-all duration-300 shadow-md cursor-pointer";

  const filledStyles = "bg-primary text-background hover:shadow-glow";

  const outlineStyles =
    "border-2 border-primary text-primary bg-transparent hover:bg-primary active:bg-primary hover:text-background active:text-background";

  return (
    <button
      onClick={onClick}
      className={clsx(
        baseStyles,
        type === "filled" ? filledStyles : outlineStyles,
        className
      )}
    >
      {text || children}
    </button>
  );
};

export default Button;
