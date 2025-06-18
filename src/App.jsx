import { useState } from "react";
import exemplo from "../src/assets/img/exemplo.jpg";
import homeVideo from "../src/assets/video/homeVideo.mp4";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full">
      {/* Seção do vídeo */}
      <section className=" w-full h-[660px] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute z-[-1] top-0 left-0 w-full h-[740px] object-cover pointer-events-none"
        >
          <source src={homeVideo} type="video/mp4" />
        </video>
        {/* Overlay opcional para contraste */}
        <div className="absolute top-0 left-0 w-full h-[740px] bg-black bg-opacity-30"></div>
      </section>

      {/* Conteúdo abaixo do vídeo */}
      <section className="flex justify-center">
        <div className="w-[1440px] inline-flex justify-center items-center gap-7">
          {/* PRIMEIRA IMAGEM */}
          <div className="relative flex justify-start items-end group">
            <img
              className="w-[650px] h-[1164px] object-cover"
              src="https://placehold.co/650x1164"
            />

            {/* Overlay escurecedor */}
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>

            {/* Textos */}
            <div className="absolute left-[20px] bottom-[44px] text-white text-base font-normal font-archivo capitalize opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              novidade
            </div>
            <div className="absolute left-[20px] bottom-[20px] text-white text-xs font-normal font-archivo lowercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              shop now
            </div>
          </div>

          {/* SEGUNDA IMAGEM */}
          <div className="relative flex justify-start items-end group">
            <img
              className="w-[650px] h-[1164px] object-cover"
              src="https://placehold.co/650x1164"
            />

            {/* Overlay escurecedor */}
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>

            {/* Textos */}
            <div className="absolute left-[20px] bottom-[44px] text-white text-base font-normal font-archivo capitalize opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Acessórios
            </div>
            <div className="absolute left-[20px] bottom-[20px] text-white text-xs font-normal font-archivo lowercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              shop now
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
