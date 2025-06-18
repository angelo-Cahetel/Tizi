import React from "react";
import logo from "../assets/img/tizi.svg";

function Footer() {
  return (
    <>
      <div className="flex justify-center">
        <div className="font-mainfont text-xs">
          <ul className="list-none flex flex-row p-1 gap-3">
            <li>Homem</li>
            <li>Mulher</li>
            <li>Loja</li>
            <li>Manifesto</li>
            <li>Contato</li>
          </ul>
        </div>

        <div className="">
          <img src={logo} alt="logo da tizi" />
        </div>
      </div>
    </>
  );
}

export default Footer;
