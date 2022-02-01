import { useEffect } from "react";
import { BsLightningFill, BsLightning } from "react-icons/bs";
import { useTheme } from "_shared/hooks";

const ToggleTheme = () => {
  const { setTheme, checkTheme, currentTheme } = useTheme();

  useEffect(() => {
    checkTheme();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='cursor-pointer' onClick={setTheme}>
      <>
        {currentTheme !== "dark" ? (
          <BsLightningFill size={20} />
        ) : (
          <BsLightning size={20} color='white' />
        )}
      </>
    </div>
  );
};

export { ToggleTheme };
