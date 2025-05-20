import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
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
            <a href="#rafiki" className="text-sm font-medium hover:text-geltPurple transition-colors">Rafiki AI</a>
            <a href="#community" className="text-sm font-medium hover:text-geltPurple transition-colors">Community</a>
            <a href="#testimonials" className="text-sm font-medium hover:text-geltPurple transition-colors">Testimonials</a>
          </div>
          <Button variant="outline" className="border-geltPurple text-geltPurple hover:text-white hover:bg-geltPurple">
            Log In
          </Button>
          <Button className="bg-geltPurple hover:bg-geltPurple-600">
            Sign Up Free
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && <div className="fixed inset-0 top-16 bg-white z-40 md:hidden">
          <div className="container mx-auto px-4 py-8 flex flex-col gap-6 bg-slate-50">
            <a href="#features" className="text-lg font-medium hover:text-geltPurple transition-colors py-2 border-b" onClick={() => setIsMenuOpen(false)}>
              Features
            </a>
            <a href="#rafiki" className="text-lg font-medium hover:text-geltPurple transition-colors py-2 border-b" onClick={() => setIsMenuOpen(false)}>
              Rafiki AI
            </a>
            <a href="#community" className="text-lg font-medium hover:text-geltPurple transition-colors py-2 border-b" onClick={() => setIsMenuOpen(false)}>
              Community
            </a>
            <a href="#testimonials" className="text-lg font-medium hover:text-geltPurple transition-colors py-2 border-b" onClick={() => setIsMenuOpen(false)}>
              Testimonials
            </a>
            <div className="flex flex-col gap-4 mt-4">
              <Button variant="outline" className="border-geltPurple text-geltPurple hover:text-white hover:bg-geltPurple" onClick={() => setIsMenuOpen(false)}>
                Log In
              </Button>
              <Button className="bg-geltPurple hover:bg-geltPurple-600" onClick={() => setIsMenuOpen(false)}>
                Sign Up Free
              </Button>
            </div>
          </div>
        </div>}
    </nav>;
};
export default Navbar;