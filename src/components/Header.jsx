import React from "react";
import logo from "../assets/img/tizi.svg";
import cart from "../assets/img/cart.svg";
import User from "../assets/img/UserCircle.svg";


function Header() {
    return (
            <header>
                <div className="flex items-center gap-[104px]">
                <div className="mx-[65px] my-[20px]">
                    <img src={logo} alt="Tizi"/>
                    <div className="flex list-none gap-5 text-xs font-light font-mainfont">
                        <li className="cursor-pointer hover:underline decoration 2">Homem</li>
                        <li className="cursor-pointer hover:underline decoration 2">Mulher</li>
                        <li className="cursor-pointer hover:underline decoration 2">Loja</li>
                        <li className="cursor-pointer hover:underline decoration 2">Manifesto</li>
                        <li className="cursor-pointer hover:underline decoration 2">Contato</li>
                    </div>
                </div>

                <div className="w-[388px] h-[42px] bg-[#d9d9d9]/80 rounded-[10px] border-[2px] border-black backdrop-blur-sm">
                    <button className="pt-[9px] px-[15px] text-xs font-mainfont font-light uppercase"><a href="#">pesquisa</a></button>
                </div>

                <div className="flex self-start align-baseline mt-[34px] ml-[70px] gap-[23px]">
                    <img className="w-[18px]" src={User} alt="Usuário"/>
                    <img className="w-[18px]" src={cart} alt="Carrinho"/>
                    <a className="font-mainfont font-light text-xs" href="#">Ajuda</a>
                </div>

                </div>

            </header>
        );
}

export default Header;