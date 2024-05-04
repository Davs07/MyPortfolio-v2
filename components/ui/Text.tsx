import React, { HTMLAttributes } from "react";

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  variant?: "normal" | "green" | "red"; // Define los colores disponibles
  size?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "mp"; // Define los tipos de texto disponibles
  font?: "satoshi" | "work-sans" | "melodrama" | "alpino";
}

const Text: React.FC<TextProps> = ({
  children,
  variant = "normal",
  size = "p",
  font = "satoshi",
  className,
  ...rest
}) => {
  const textColorClass = {
    normal: "text-black dark:text-white",
    green: "text-green-500",
    red: "text-red-500",
  }[variant];

  const textSizeClass = {
    h1: "text-2xl sm:text-7xl font-semibold ",
    h2: "text-3xl ",
    h3: "text-2xl ",
    h4: "text-xl ",
    h5: "text-lg ",
    h6: "text-base ",
    p: "text-sm ",
    mp: "text-xs ",
  }[size];

  const fontClass = {
    satoshi: "font-satoshi",
    "work-sans": "font-work-sans",
    melodrama: "font-melodrama",
    alpino: "font-alpino",
  }[font];

  return (
    <p
      className={`${textColorClass} ${textSizeClass} ${className} ${fontClass}`}
      {...rest}>
      {children}
    </p>
  );
};

export default Text;
