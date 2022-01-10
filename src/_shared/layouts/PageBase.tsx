import { NavBar, ToggleTheme } from "_shared/components";

const PageBase: React.FC = ({ children }) => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <section>{children}</section>
      <footer></footer>
      <ToggleTheme />
    </>
  );
};

export { PageBase };
