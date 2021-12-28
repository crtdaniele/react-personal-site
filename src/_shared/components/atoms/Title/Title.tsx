type Props = {
  Type: "h1" | "h2" | "h3";
};

const Title: React.FC<Props> = ({ children, Type }) => {
  return <Type className='dark:text-white'>{children}</Type>;
};

export { Title };
