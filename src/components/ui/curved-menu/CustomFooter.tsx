
import React from "react";
import { Linkedin, Github, Dribbble, Figma } from "lucide-react";

const CustomFooter: React.FC = () => {
  return (
    <div className="flex w-full text-sm justify-between text-black px-10 md:px-24 py-5">
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <Linkedin size={24} />
      </a>
      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
        <Github size={24} />
      </a>
      <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer">
        <Dribbble size={24} />
      </a>
      <a href="https://www.figma.com" target="_blank" rel="noopener noreferrer">
        <Figma size={24} />
      </a>
    </div>
  );
};

export default CustomFooter;
