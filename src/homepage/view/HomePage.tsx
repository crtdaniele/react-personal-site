import React from "react";
import DanieleCarta from "_shared/assets/img/daniele-carta.jpg";
import { Absolute, NavBar, ToggleTheme } from "_shared/components";
import { About } from "homepage/components/About";

const HomePage: React.FC = () => {
  return (
    <>
      <ToggleTheme />
      <NavBar />
      <Absolute
        customCss={{ transform: "translateY(-50%)" }}
        top='top-1/2'
        left='left-0'
        right='right-0'
      >
        <div className='sm:mx-0 flex justify-center mx-3'>
          <div className='sm:flex-row flex flex-col'>
            <div className='sm:mb-0 flex-none m-auto mb-5'>
              <img
                className='w-48 rounded-full shadow-sm'
                alt='Daniele Carta'
                src={DanieleCarta}
              />
            </div>
            <About
              title='Daniele Carta'
              subtitle='Frontend Developer, React, React Native, Typescript and JavaScript'
            />
          </div>
        </div>
      </Absolute>
    </>
  );
};

export { HomePage };
