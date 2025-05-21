import React, { useState, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import CurvedNavbar from "./CurvedNavbar";
import CustomFooter from "./CustomFooter";
import { HeaderProps, defaultNavItems } from "./types";
const Header: React.FC<HeaderProps> = ({
  navItems = defaultNavItems,
  footer = <CustomFooter />
}) => {
  const [isActive, setIsActive] = useState(false);
  const openAudioRef = useRef<HTMLAudioElement | null>(null);
  const closeAudioRef = useRef<HTMLAudioElement | null>(null);
  const handleClick = () => {
    if (isActive) {
      closeAudioRef.current?.play();
    } else {
      openAudioRef.current?.play();
    }
    setIsActive(!isActive);
  };
  return <>
      <div className="relative">
        <div onClick={handleClick} className="fixed -right-1 top-0 md:-right-1 m-5 z-50 w-12 h-12 rounded-none flex items-center justify-center cursor-pointer mx-[25px] px-0 py-0 my-px bg-white">
          <div className="relative w-8 h-6 flex flex-col justify-between items-center bg-gray-50">
            <span className={`block h-1 w-7 bg-black transition-transform duration-300 ${isActive ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`block h-1 w-7 bg-black transition-opacity duration-300 ${isActive ? "opacity-0" : ""}`}></span>
            <span className={`block h-1 w-7 bg-black transition-transform duration-300 ${isActive ? "-rotate-45 -translate-y-3" : ""}`}></span>
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {isActive && <CurvedNavbar setIsActive={setIsActive} navItems={navItems} footer={footer} />}
      </AnimatePresence>
    </>;
};
export default Header;