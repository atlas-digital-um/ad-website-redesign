"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { ad_logo, close, menu as menuLogo } from "./svg";
import { navBar, applicationPortal, currentlyRecruiting } from "./text";

const Navbar = () => {
  const pathname = usePathname();
  const [menu, setMenu] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = window.scrollY;
      const triggerHeight = 0; // Set your trigger height here

      if (scrollHeight <= triggerHeight) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenu(false)
        document.body.style.overflow = 'auto';
      }
    };


    if (pathname == "/" || pathname == '/team') {
      handleScroll()
      window.addEventListener("scroll", handleScroll);
    } else {
      setIsVisible(true);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      if (pathname == "/" || pathname == '/team') {
        window.removeEventListener("scroll", handleScroll);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [pathname]);

  const toggleMenu = () => {
    setMenu(!menu);
    document.body.style.overflow = menu ? 'auto' : 'hidden';
  };

  return (
    <header className={`flex flex-col px-8 text-white font-kanit z-50 relative`}>
      <div className={`absolute top-0 left-0 h-full w-full -z-10 border-b border-white/10 transition-opacity duration-200 opacity-0 ${isVisible ? 'opacity-100' : 'opacity-0'}`} />
      <div className={`absolute top-0 left-0 h-full w-full -z-20 transition-all duration-200 ${isVisible ? 'backdrop-blur-lg backdrop-brightness-50' : 'backdrop-blur-none backdrop-brightness-100'}`} />
      <div className="flex flex-row items-center justify-between py-4">
        <Link href="/" className="flex items-center md:pl-8 sm:pl-4">
          {ad_logo}
        </Link>

        <div className="flex md:hidden items-center md:pr-8 sm:pr-4 hover:cursor-pointer" onClick={toggleMenu}>
          {menuLogo}
        </div>

        <div className="hidden md:flex sm:pr-8">
          <nav className="flex justify-end items-center">
            <ul className="flex space-x-12 items-center">
              {navBar.map(
                (page, idx) => (
                  <li key={idx} className={"group"}>
                    <Link className='group-hover:text-ad-blue duration-200' href={page['route']}>{page['page']}</Link>
                    {/* <div className={"w-full h-0.5 rounded " + (pathname === page['route'] ? "bg-white group-hover:bg-ad-blue duration-200" : "")}></div> */}


                    <div
                      className={
                        "w-full h-0.5 rounded duration-200 group-hover:cursor-pointer " +
                        (pathname === page['route']
                          ? "bg-white animate-desktopLineExpand group-hover:bg-ad-blue"
                          : "")
                      }
                    />

                  </li>
                )
              )}
              <li className={`${currentlyRecruiting ? '' : 'hidden'}`}>
                <Link href={applicationPortal} target="_blank">
                  <button className="w-28 py-1 rounded-lg text-white font-bold hover:shadow-button bg-gradient-to-r from-ad-dark-blue to-[#1DAFEC] duration-200">
                    Apply
                  </button>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className={`fixed inset-y-0 w-80 bg-ad-dark text-white transition-all duration-300 z-40 p-6 ${menu ? 'left-0' : '-left-80'}`}>
        <div className="group absolute right-4 top-5 hover:cursor-pointer p-2 " onClick={toggleMenu}>{close}</div>
        <div className="flex flex-col text-lg space-y-4">
          {navBar.map(
            (page, idx) => (
              <Link key={idx} href={page['route']} onClick={toggleMenu} className="group">
                <div className={"flex flex-row group-hover:text-ad-blue duration-200 w-min" + (pathname === page['route'] ? " space-x-2" : "")}>
                  <div className={(pathname === page['route'] ? "flex" : "hidden")}>|</div>
                  <div>{page['page']}</div>
                </div>
              </Link>
            )
          )}
        </div>
      </div>

      <div className={`fixed inset-0 w-full duration-300 bg-black backdrop-blur-xl bg-opacity-50 z-30 ${menu ? '' : 'opacity-0 backdrop-blur-none pointer-events-none'} `} onClick={toggleMenu} />
    </header>
  );
};

export default Navbar;
