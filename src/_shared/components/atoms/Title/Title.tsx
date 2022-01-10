type Props = {
  Type: "h1" | "h2" | "h3";
};

const Title: React.FC<Props> = ({ children, Type }) => {
  return <Type>{children}</Type>;
};

export { Title };
