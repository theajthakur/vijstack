import React from "react";
import clsx from "clsx";

const Button = ({ type = "filled", text, children, onClick, className }) => {
  const baseStyles =
    "px-6 py-2 rounded-[var(--radius-button)] font-semibold transition-all duration-300 shadow-md cursor-pointer";

  const filledStyles =
    "bg-[var(--primary)] text-[var(--background)] hover:shadow-[var(--shadow-glow)]";

  const outlineStyles =
    "border-2 border-[var(--primary)] text-[var(--primary)] bg-transparent hover:bg-[var(--primary)] hover:text-[var(--background)]";

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
