import { Signature } from "_shared/assets";

const NavBar: React.FC = () => {
  return (
    <div className='flex justify-start ml-7 mt-7'>
      <div>
        <img
          style={{ width: "220px" }}
          src={Signature}
          alt='Firma Daniele Carta'
        />
      </div>
      <div className='flex items-center navbar'>
        <ul>
          <li>Homepage</li>
          <li>About</li>
        </ul>
      </div>
    </div>
  );
};

export { NavBar };
