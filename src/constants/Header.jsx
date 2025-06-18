import React from "react";
import HamburgerMenu from "./HamburgerMenu";
import bag from "../assets/img/bag.svg";
import cart from "../assets/img/cart.svg";
import favoritos from "../assets/img/Favoritos.svg";

function Header() {
  return (
    <header>
      <div className="mx-[80px] my-[15px] flex flex-row justify-between items-center gap-[200px]">
        <div className="flex justify-items-center w-6 h-6 cursor-pointer">
          <img src={bag}></img>
          <img src={favoritos}></img>
          <img src={cart}></img>
        </div>
        <div className="text-black text-[50px] font-normal font-['Brilliant_-_Personal_Use'] lowercase">
          tizi
        </div>
            <HamburgerMenu />
      </div>
    </header>
  );
}

export default Header;
