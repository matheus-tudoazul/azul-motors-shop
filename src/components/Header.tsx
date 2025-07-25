
import React from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';

interface HeaderProps {
  cartItemsCount: number;
  onCartClick: () => void;
  onMenuClick: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ cartItemsCount, onCartClick, onMenuClick }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { label: 'Início', section: 'inicio' },
    { label: 'Produtos', section: 'produtos' },
    { label: 'Simulador', section: 'simulador' },
    { label: 'Contato', section: 'contato' }
  ];

  const handleMenuClick = (section: string) => {
    onMenuClick(section);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
           <div className="flex items-center">
              <div className="w-24 h-24">
                <img
                  src="/logo_motors.svg"
                  alt="Logo Motors"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.section}
                onClick={() => handleMenuClick(item.section)}
                className="text-[#063f5c] hover:text-[#0485e0] font-medium transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Cart and Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Cart Icon */}
            <button
              onClick={onCartClick}
              className="relative p-2 text-[#063f5c] hover:text-[#0485e0] transition-colors duration-200"
            >
              <ShoppingCart size={24} />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#0485e0] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-[#063f5c]"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <nav className="py-4">
              {menuItems.map((item) => (
                <button
                  key={item.section}
                  onClick={() => handleMenuClick(item.section)}
                  className="block w-full text-left px-4 py-2 text-[#063f5c] hover:bg-gray-50 transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
