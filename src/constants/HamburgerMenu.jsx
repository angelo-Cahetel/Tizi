import React, { useState } from "react";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="p-4 rounded-full cursor-pointer">
      <div className="container mx-auto flex justify-between items-center">

        {/* Botão aparece em todas as telas */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col space-y-1"
        >
          <span className="block w-6 h-0.5 bg-black"></span>
          <span className="block w-6 h-0.5 bg-black"></span>
          <span className="block w-6 h-0.5 bg-black"></span>
        </button>

        {/* Menu */}
        {isOpen && (
          <ul className="absolute top-16 left-0 right-0 bg-white shadow-md flex flex-col items-center space-y-2 p-4 z-10">
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-500">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-500">
                Sobre
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-500">
                Contato
              </a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default HamburgerMenu;
