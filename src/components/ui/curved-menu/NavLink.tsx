import React, { useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
import { Link } from "react-router-dom";
import { NavLinkProps } from "./types";
const NavLink: React.FC<NavLinkProps> = ({
  heading,
  href,
  setIsActive,
  index
}) => {
  const ref = useRef<HTMLAnchorElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const rect = ref.current!.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / rect.width - 0.5);
    y.set(mouseY / rect.height - 0.5);
  };
  const handleClick = () => {
    return setIsActive(false);
  };
  return <motion.div onClick={handleClick} initial="initial" whileHover="whileHover" className="group relative flex items-center justify-between border-b border-black/30 py-4 transition-colors duration-500 md:py-8 uppercase">
      <a ref={ref} onMouseMove={handleMouseMove} href={href}>
        <div className="relative flex items-start bg-slate-50">
          
          <div className="flex flex-row gap-2">
            <motion.span variants={{
            initial: {
              x: 0
            },
            whileHover: {
              x: -16
            }
          }} transition={{
            type: "spring",
            staggerChildren: 0.075,
            delayChildren: 0.25
          }} className="relative z-10 block text-4xl font-extralight text-black transition-colors duration-500 md:text-4xl">
              {heading.split("").map((letter, i) => {
              return <motion.span key={i} variants={{
                initial: {
                  x: 0
                },
                whileHover: {
                  x: 16
                }
              }} transition={{
                type: "spring"
              }} className="inline-block text-purple-800 text-xl font-extrabold">
                    {letter}
                  </motion.span>;
            })}
            </motion.span>
          </div>
        </div>
      </a>
    </motion.div>;
};
export default NavLink;