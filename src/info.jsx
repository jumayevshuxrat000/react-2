
import React from "react";
import Saly_img from "./assets/img/Saly-2.png"

export default function Info() {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-blue-600 text-white rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
          
          <div className="max-w-lg mb-6 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold leading-snug">
              Скидки до 50% <br /> в нашем телеграм-канале
            </h2>
            <p className="mt-4 text-white/90 text-sm md:text-base">
              Хочешь покупать продвижение по выгодной цене? Тогда подпишись на наш тг-канал, 
              чтобы получать актуальные и лимитированные промокоды самым первым!
            </p>
            <button className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-100 transition">
              Получить промокод
            </button>
          </div>

          <div className="flex-shrink-0">
            <img
              src={Saly_img}
              alt=""
              className="w-56 md:w-72"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
