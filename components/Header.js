import Image from 'next/image';
import React, { useRef } from 'react';
import Link from 'next/link';

const Header = () => {
  const sideBarRef = useRef();

  function toggleSideBar() {
    sideBarRef.current.classList.toggle('translate-x-full');
  }

  return (
    <div className="flex flex-row-reverse items-center p-2 bg-gray-800 ">
      <div className="flex flex-row-reverse items-center w-full md:w-auto">
        <div className="mr-24 cursor-pointer md:ml-28">
          <Link href={'/'}>
            <Image src={'/logo.svg'} width={250} height={44} alt={'logo'} />
          </Link>
        </div>
      </div>

      {/* <div className="flex-row-reverse items-center hidden w-1/4 border-2 border-gray-700 rounded-lg md:flex group">
        <RiSearchLine className="ml-3 mr-3 text-xl text-gray-400 " />
        <input
          type="text"
          placeholder="لێگەریان"
          className="w-full py-2 pl-10 text-right text-white bg-transparent outline-none font-speda"
        />
      </div> */}
    </div>
  );
};

export default Header;
