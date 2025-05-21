import React from "react";
import { motion } from "framer-motion";
import NavLink from "./NavLink";
import Curve from "./Curve";
import { CurvedNavbarProps, MENU_SLIDE_ANIMATION } from "./types";
const CurvedNavbar: React.FC<CurvedNavbarProps> = ({
  setIsActive,
  navItems,
  footer
}) => {
  return <motion.div variants={MENU_SLIDE_ANIMATION} initial="initial" animate="enter" exit="exit" className="h-[100dvh] w-screen max-w-screen-sm fixed right-0 top-0 z-40 bg-white">
      <div className="h-full pt-11 flex flex-col justify-between">
        <div className="flex flex-col text-5xl gap-3 mt-0 px-10 md:px-24">
          <div className="text-black border-b border-black/30 uppercase text-sm mb-0">
            
          </div>
          <section className="bg-transparent mt-0">
            <div className="mx-auto max-w-7xl">
              {navItems.map((item, index) => <NavLink key={item.href} {...item} setIsActive={setIsActive} index={index + 1} />)}
            </div>
          </section>
        </div>
        {footer}
      </div>
      <Curve />
    </motion.div>;
};
export default CurvedNavbar;