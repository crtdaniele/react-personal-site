import React from "react";

type Props = {
  Type: "h1" | "h2" | "h3" | "h4" | "h5";
  className?: string;
};

const Title: React.FC<Props> = ({ children, Type, className }) => {
  return <Type className={className}>{children}</Type>;
};

export { Title };
