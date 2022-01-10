import { VscSymbolNamespace } from "react-icons/vsc";
import { useTheme } from "_shared/hooks";

const Logo: React.FC = () => {
  const { currentTheme } = useTheme();
  return (
    <>
      <VscSymbolNamespace
        color={currentTheme === "dark" ? "white" : "black"}
        size={30}
      />{" "}
      <div className='logo'>Daniele Carta.</div>
    </>
  );
};

export { Logo };
