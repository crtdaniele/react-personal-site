import { useCallback } from "react";
import { VscSymbolNamespace } from "react-icons/vsc";
import { useTheme } from "_shared/hooks";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "_shared/routing";

const Logo: React.FC = () => {
  const { currentTheme } = useTheme();
  const navigate = useNavigate();

  const goToHome = useCallback(
    (route: RoutePath) => {
      navigate(route);
    },
    [navigate]
  );

  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a onClick={() => goToHome(RoutePath.Home)} className="flex text-black">
      <VscSymbolNamespace
        color={currentTheme === "dark" ? "white" : "black"}
        size={30}
      />{" "}
      <div className="dark:text-white text-2xl font-medium ml-2">Daniele Carta.</div>
    </a>
  );
};

export { Logo };
