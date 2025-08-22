import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: "Início", href: "#home" },
    { name: "Sobre", href: "#about" },
    { name: "Projetos", href: "#projects" },
    { name: "Experiência", href: "#experience" },
    { name: "Contato", href: "#contact" }
  ];

  return (
    <nav className={`
      fixed top-0 left-0 right-0 z-50 transition-portfolio
      ${isScrolled 
        ? 'bg-white/90 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
      }
    `}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className={`
              text-2xl font-bold transition-portfolio
              ${isScrolled ? 'text-gray-900' : 'text-white'}
            `}>
              <span style={{ color: "black" }}>Tiago de Almeida Santos</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`
                  transition-portfolio hover:scale-105 font-medium
                  ${isScrolled 
                    ? 'text-gray-700 hover:text-lime-600' 
                    : 'text-white hover:text-lime-400'
                  }
                `}
              >
                {item.name}
              </a>
            ))}
            <Button 
              className={`
                transition-portfolio
                ${isScrolled 
                  ? 'portfolio-lime' 
                  : 'bg-lime-400 hover:bg-lime-500 text-gray-900'
                }
              `}
            >
              Contratar
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`
                ${isScrolled ? 'text-gray-900' : 'text-white'}
              `}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-200">
            <div className="px-6 py-4 space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-gray-700 hover:text-lime-600 font-medium transition-portfolio"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button className="w-full portfolio-lime">
                Contratar
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;