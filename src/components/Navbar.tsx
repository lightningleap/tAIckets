import React from 'react';
import { Menu } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <img src="/logo.svg" alt="tAIckets Logo" className="h-8 w-8 mr-2" />
            <span className="text-primary font-bold text-2xl">tAIckets</span>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <a href="#" className="text-accent-dark hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Dashboard</a>
            <a href="#" className="text-accent-dark hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Tickets</a>
            <a href="#" className="text-accent-dark hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Vendors</a>
            <a href="#" className="text-accent-dark hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Analytics</a>
          </div>
          <div className="flex items-center sm:hidden">
            <button type="button" className="text-accent-dark hover:text-primary">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;