import React from "react";
import classNames from "classnames";
import s from "./button.module.scss";

interface Props {
  variant?: "default" | "small";
}

const Button: React.FC<
  Props &
    React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >
> = ({ variant = "default", children, ...otherProps }) => {
  const className = classNames({
    "btn-darkblue btn-lg mt-2 text-white fw-bold p-3 fs-6":
      variant === "default",
    [s["small-button"]]: variant === "small",
  });

  return (
    <button className={className} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
