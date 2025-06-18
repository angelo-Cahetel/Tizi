import { useState } from "react";
import titulo from "../src/assets/img/seguindoANuvem.svg";
import exemplo from "../src/assets/img/exemplo.jpg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex justify-center">
      <div
        id="background"
        className="relative mt-[134px] w-screen h-[1779px] z-10 bg-cover bg-center rounded-tl-[900px] rounded-tr-[900px]"
      >
        <div className="grid gap-[35px] justify-items-center pt-[115px] align-center ">
          <img className="w-fit" src={titulo} alt="" />
          <div className="text-center">
            <p className="w-[631px] font-mainfont text-base text-tiziOff">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel
              condimentum magna, a scelerisque justo. Suspendisse magna augue,
              fermentum et imperdiet vitae, faucibus sit amet nulla. Vivamus
              rhoncus porttitor cursus. In vehicula gravida nisl, vitae
              ullamcorper lectus euismod vel.{" "}
            </p>
            <button class="left-[180px] mt-[35px] relative flex h-[50px] w-[269px] items-center justify-center overflow-hidden border-[2px] border-tiziOff rounded-[15px] text-tiziOff font-mainfont font-base hover:text-[#92C7EB] shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-tiziOff before:duration-500 before:ease-out hover:before:h-56 hover:before:w-[269px]">
              <span class="relative z-10">ver coleção</span>
            </button>
          </div>
        </div>
{/* seção das roupas */}
        <div className="mt-[112px]">
          <div className="flex justify-center gap-[175px] mx-[70px]">
            <div className="w-[316px] h-[381px]">
              <img className="w-full h-[350px]" src={exemplo} alt="" />
              <div className="grid gap-[3px] mt-[20px] text-tiziOff font-light font-mainfont">
                <p className="text-[18px]">modelo</p>
                <p className="w-[316px] leading-[14px] font-normal opacity-80 text-[15px] lowercase">
                  Os olhos são a lâmpada do corpo. Portanto, se os seus olhos
                  forem bons, todo o seu corpo estará cheio de luz.
                </p>
                <p className=" text-[18px]">R$: 300</p>
              </div>
            </div>
            <div className="w-[316px] h-[381px]">
              <img className="w-[316px] h-[350px]" src={exemplo} alt="" />
              <div className="grid gap-[3px] mt-[20px] text-tiziOff font-light font-mainfont">
                <p className="text-[18px]">modelo</p>
                <p className="w-[316px] leading-[14px] font-normal opacity-80 text-[15px] lowercase">
                  Os olhos são a lâmpada do corpo. Portanto, se os seus olhos
                  forem bons, todo o seu corpo estará cheio de luz.
                </p>
                <p className="text-[18px]">R$: 300</p>
              </div>
            </div>
            <div className="w-[316px] h-[381px]">
              <img className="w-[316px] h-[350px]" src={exemplo} alt="" />
              <div className="grid gap-[3px] mt-[20px] text-tiziOff font-light font-mainfont">
                <p className="text-[18px]">modelo</p>
                <p className="w-[316px] leading-[14px] font-normal opacity-80 text-[15px] lowercase">
                  Os olhos são a lâmpada do corpo. Portanto, se os seus olhos
                  forem bons, todo o seu corpo estará cheio de luz.
                </p>
                <p className="text-[18px]">R$: 300</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[152px]">
          <div className="flex justify-center gap-[175px] mx-[70px]">
            <div className="w-[316px] h-[381px]">
              <img className="w-[316px] h-[350px]" src={exemplo} alt="" />
              <div className="grid gap-[3px] mt-[20px] text-tiziOff font-light font-mainfont">
                <p className="text-[18px]">modelo</p>
                <p className="w-[316px] leading-[14px] font-normal opacity-80 text-[15px] lowercase">
                  Os olhos são a lâmpada do corpo. Portanto, se os seus olhos
                  forem bons, todo o seu corpo estará cheio de luz.
                </p>
                <p className="text-[18px]">R$: 300</p>
              </div>
            </div>
            <div className="w-[316px] h-[381px]">
              <img className="w-[316px] h-[350px]" src={exemplo} alt="" />
              <div className="grid gap-[3px] mt-[20px] text-tiziOff font-light font-mainfont">
                <p className="text-[18px]">modelo</p>
                <p className="w-[316px] leading-[14px] font-normal opacity-80 text-[15px] lowercase">
                  Os olhos são a lâmpada do corpo. Portanto, se os seus olhos
                  forem bons, todo o seu corpo estará cheio de luz.
                </p>
                <p className="text-[18px]">R$: 300</p>
              </div>
            </div>
            <div className="w-[316px] h-[381px]">
              <img className="w-[316px] h-[350px]" src={exemplo} alt="" />
              <div className="grid gap-[3px] mt-[20px] text-tiziOff font-light font-mainfont">
                <p className="text-[18px]">modelo</p>
                <p className="w-[316px] leading-[14px] font-normal opacity-80 text-[15px] lowercase">
                  Os olhos são a lâmpada do corpo. Portanto, se os seus olhos
                  forem bons, todo o seu corpo estará cheio de luz.
                </p>
                <p className="text-[18px]">R$: 300</p>
              </div>
            </div>
          </div>
        </div>
        {/* fim da seção das roupas */}
      </div>
    </div>
  );
}

export default App;
