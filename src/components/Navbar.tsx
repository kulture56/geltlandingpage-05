
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const navigationItems = {
  overview: {
    title: "Overview",
    href: "/overview",
    items: [
      { title: "Mission", href: "/overview#mission" },
      { title: "Platform Features", href: "/overview#platform-features" },
      { title: "Who Can Join GELT?", href: "/overview#who-can-join" },
      { title: "Benefits of Joining", href: "/overview#benefits" },
      { title: "Community Posts", href: "/overview#community-posts" },
      { title: "Trending Topics", href: "/overview#trending-topics" },
      { title: "Testimonials", href: "/overview#testimonials" },
      { title: "Newsletter Signup", href: "/overview#newsletter" },
    ]
  },
  resources: {
    title: "Resources",
    href: "/resources",
    items: [
      { title: "Rafiki AI Assistant", href: "/resources#rafiki-ai" },
      { title: "Learning Content", href: "/resources#learning-content" },
      { title: "Career Hub", href: "/resources#career-hub" },
      { title: "Resume Building", href: "/resources#resume-building" },
      { title: "Interview Tips", href: "/resources#interview-tips" },
      { title: "Glossary", href: "/resources#glossary" },
      { title: "Streaks", href: "/resources#streaks" },
      { title: "FAQs", href: "/resources#faqs" },
    ]
  },
  about: {
    title: "About Us",
    href: "/about",
    items: [
      { title: "Our Story", href: "/about#our-story" },
      { title: "Vision", href: "/about#vision" },
      { title: "Impact", href: "/about#impact" },
      { title: "Commitment", href: "/about#commitment" },
      { title: "Team", href: "/about#team" },
      { title: "Locations", href: "/about#locations" },
      { title: "Founder", href: "/about#founder" },
    ]
  },
  contact: {
    title: "Contact",
    href: "/contact",
    items: [
      { title: "Email Us", href: "/contact#email" },
      { title: "Social Media", href: "/contact#social-media" },
      { title: "Office Address", href: "/contact#office-address" },
      { title: "Phone Number", href: "/contact#phone-number" },
    ]
  }
};

interface SubTopicListProps {
  items: Array<{ title: string; href: string }>;
  activeSection?: string;
}

const SubTopicList = ({ items, activeSection }: SubTopicListProps) => {
  return (
    <div className="bg-gray-50 border-t border-gray-200 py-3">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap gap-6 justify-center md:justify-start">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-geltPurple px-3 py-1 rounded-md hover:bg-white",
                activeSection === item.href.split('#')[1] ? "text-geltPurple bg-white" : "text-gray-600"
              )}
            >
              {item.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

interface NavbarProps {
  showSubTopics?: boolean;
  currentPage?: keyof typeof navigationItems;
  activeSection?: string;
}

const Navbar = ({ showSubTopics = false, currentPage, activeSection }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b shadow-sm">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-geltPurple">GELT</span>
          <img src="/lovable-uploads/ca24dfd5-0135-4e64-8fc9-70bfdf8f9867.png" alt="Kenyan Flag" className="h-6 mx-2" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <NavigationMenu>
            <NavigationMenuList>
              {Object.entries(navigationItems).map(([key, section]) => (
                <NavigationMenuItem key={key}>
                  <NavigationMenuTrigger 
                    className={cn(
                      "text-sm font-medium hover:text-geltPurple transition-colors",
                      currentPage === key ? "text-geltPurple font-bold" : ""
                    )}
                  >
                    <Link to={section.href}>{section.title}</Link>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[400px]">
                      {section.items.map((item) => (
                        <NavigationMenuLink key={item.href} asChild>
                          <a
                            href={item.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{item.title}</div>
                          </a>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <Button variant="outline" className="border-geltPurple text-geltPurple hover:text-white hover:bg-geltPurple">
            Log In
          </Button>
          <Button className="bg-geltPurple hover:bg-geltPurple-600">
            Sign Up Free
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span className={`block h-0.5 w-6 bg-gray-600 transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-gray-600 transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-gray-600 transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b shadow-lg md:hidden">
            <div className="p-4 space-y-4">
              {Object.entries(navigationItems).map(([key, section]) => (
                <div key={key}>
                  <Link 
                    to={section.href}
                    className="block text-lg font-medium text-gray-900 hover:text-geltPurple"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {section.title}
                  </Link>
                  <div className="ml-4 mt-2 space-y-2">
                    {section.items.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className="block text-sm text-gray-600 hover:text-geltPurple"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.title}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
              <div className="pt-4 space-y-2">
                <Button variant="outline" className="w-full border-geltPurple text-geltPurple hover:text-white hover:bg-geltPurple">
                  Log In
                </Button>
                <Button className="w-full bg-geltPurple hover:bg-geltPurple-600">
                  Sign Up Free
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Sub-topics navigation */}
      {showSubTopics && currentPage && (
        <SubTopicList 
          items={navigationItems[currentPage].items} 
          activeSection={activeSection}
        />
      )}
    </div>
  );
};

export default Navbar;
export { navigationItems };
