
import React from "react";

export interface NavItem {
  heading: string;
  href: string;
  subheading?: string;
  imgSrc?: string;
}

export interface NavLinkProps extends NavItem {
  setIsActive: (isActive: boolean) => void;
  index: number;
}

export interface CurvedNavbarProps {
  setIsActive: (isActive: boolean) => void;
  navItems: NavItem[];
  footer?: React.ReactNode;
}

export interface HeaderProps {
  navItems?: NavItem[];
  footer?: React.ReactNode;
}

export const MENU_SLIDE_ANIMATION = {
  initial: { x: "calc(100% + 100px)" },
  enter: { x: "0", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
  exit: {
    x: "calc(100% + 100px)",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
};

export const defaultNavItems: NavItem[] = [
  {
    heading: "Features",
    href: "#features",
    subheading: "Explore our features"
  }, 
  {
    heading: "®Rafiki AI",
    href: "#rafiki",
    subheading: "Meet our AI assistant"
  }, 
  {
    heading: "Jamii",
    href: "#community",
    subheading: "Join our community"
  }, 
  {
    heading: "Testimonials",
    href: "#testimonials",
    subheading: "What people say"
  }
];
