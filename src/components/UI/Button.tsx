import React from "react";

const Button = ({
  children,
  variant = "primary",
  size = "normal",
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "normal" | "small";
}) => {
  return (
    <button
      className={`${
        variant !== "secondary"
          ? `bg-primary btn transition-all active:scale-90 text-darkPrimary px-6 ${
              size !== "small" ? "py-3" : "py-2"
            } hover:`
          : "hover:text-primary transition-colors"
      } font-semibold flex items-center gap-2 rounded-[10px] whitespace-nowrap ${
        size !== "small" ? "text-xl" : "text-lg"
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
