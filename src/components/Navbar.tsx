
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import CurvedMenu from "@/components/ui/curved-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-geltPurple">GELT</span>
          <img src="/lovable-uploads/ca24dfd5-0135-4e64-8fc9-70bfdf8f9867.png" alt="Kenyan Flag" className="h-6 mx-2" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6">
            <a href="#features" className="text-sm font-medium hover:text-geltPurple transition-colors">Features</a>
            <a href="#rafiki" className="text-sm font-medium hover:text-geltPurple transition-colors">®Rafiki AI</a>
            <a href="#community" className="text-sm font-medium hover:text-geltPurple transition-colors">Jamii</a>
            <a href="#testimonials" className="text-sm font-medium hover:text-geltPurple transition-colors">Testimonials</a>
          </div>
          <Button variant="outline" className="border-geltPurple text-geltPurple hover:text-white hover:bg-geltPurple">
            Log In
          </Button>
          <Button className="bg-geltPurple hover:bg-geltPurple-600">
            Sign Up Free
          </Button>
        </div>

        {/* Mobile Menu - Now using Curved Menu for mobile */}
        <div className="md:hidden">
          <CurvedMenu />
        </div>
      </div>
    </nav>;
};

export default Navbar;
