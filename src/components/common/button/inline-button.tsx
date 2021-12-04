import React from "react";
import s from "./button.module.scss";
import classnames from "classnames";

interface Props {
  text: string;
  color?: "primary" | "secondary";
}

const InlineButton: React.FC<
  Props &
    React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >
> = ({ text, color = "primary", ...otherProps }) => {
  const className = classnames(s["inline-button"], {
    [s["color-primary"]]: color === "primary",
    [s["color-secondary"]]: color === "secondary",
  });
  // const className = classnames(s["inline-button"], {
  //   [s["color-primary"]]: color === "primary",
  // });
  return (
    <button {...otherProps} className={className}>
      {text}
    </button>
  );
};
export default InlineButton;
