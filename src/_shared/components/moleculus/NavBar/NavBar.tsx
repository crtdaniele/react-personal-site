import { useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "_shared/routing";
import { Logo } from "./Logo";

const NavBar: React.FC = () => {
  const navigate = useNavigate();

  const items = useMemo(() => {
    return [
      {
        label: "Home",
        route: RoutePath.Home,
      },
      {
        label: "About",
        route: RoutePath.About,
      },
      {
        label: "News",
        route: RoutePath.News,
      },
      {
        label: "Corsi",
        route: RoutePath.Courses,
      },
    ];
  }, []);

  const goTo = useCallback(
    (route: RoutePath) => {
      navigate(route);
    },
    [navigate]
  );

  return (
    <div className='flex mt-6'>
      <div className='flex items-center'>
        <Logo />
      </div>
      <div className='flex flex-1 justify-end items-center'>
        <div className='inline-flex md:hidden'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='w-6 h-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='M4 6h16M4 12h16m-7 6h7'
            />
          </svg>
        </div>
        <ul className='hidden md:inline-flex'>
          {items.map((item, index) => (
            <li
              key={item.route}
              className={`float-left ${index !== 0 ? "ml-8" : ""}`}
            >
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a
                className='dark:text-white font-medium text-gray'
                onClick={() => goTo(item.route)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export { NavBar };
