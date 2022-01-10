import { useEffect } from "react";
import { BsLightningFill, BsLightning } from "react-icons/bs";
import { useTheme } from "_shared/hooks";
import { Absolute } from "../../atoms/Absolute";

const ToggleTheme = () => {
  const { setTheme, checkTheme, currentTheme } = useTheme();

  useEffect(() => {
    checkTheme();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='cursor-pointer' onClick={setTheme}>
      <Absolute bottom='bottom-3' right='right-3'>
        {currentTheme !== "dark" ? (
          <BsLightningFill size={25} />
        ) : (
          <BsLightning size={25} color='white' />
        )}
      </Absolute>
    </div>
  );
};

export { ToggleTheme };
