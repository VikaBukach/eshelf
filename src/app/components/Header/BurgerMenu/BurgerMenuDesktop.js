import React, { useState } from 'react';

const BurgerMenuDesktop = ({ isOpen, onClose }) => {
  const [menuOpen, setMenuOpen] = useState(isOpen);

  const handleCloseMenu = () => {
    setMenuOpen(false);
    onClose(); 
  };

  return (
    <div className="burger-menu-desktop">
      <div className="">
        <span>Desktop</span>
      </div>
    </div>
  );
};

export default BurgerMenuDesktop;