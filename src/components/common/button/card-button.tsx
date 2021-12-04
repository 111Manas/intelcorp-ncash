import React from "react";
import classNames from "classnames";
import { images } from "../../../utils/staticData";
import s from "./button.module.scss";

interface Props {
  variant?: "default";
  size?: "small";
  icon: keyof typeof images;
}

const CardButton: React.FC<
  Props &
    React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >
> = ({ variant = "default", icon, size = "small", ...otherProps }) => {
  const className = classNames(s.cardButton, {
    "bg-white border-0 editButton rounded shadow w-7": variant === "default",
  });

  return (
    <button className={className} {...otherProps}>
      <img
        className={classNames("img-fluid", {
          [s.smallIcon]: size === "small",
        })}
        src={images[icon]}
        alt="Icon"
      />
    </button>
  );
};

export default CardButton;
