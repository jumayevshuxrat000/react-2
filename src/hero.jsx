import React, { useState } from "react";
import hero from "./assets/img/Saly-1.png"

export default function Hero(){
    return(
        <>
        <section className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
            Продвижение во всех соцсетях за пару кликов
            </h1>
            <p className="text-gray-600 mb-6 text-base sm:text-lg">
            Получайте подписчиков, лайки, репосты, просмотры, прослушивания и любую другую активность на свои профили в социальных сетях по самым низким ценам на рынке и в самые быстрые сроки!
            </p>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-md text-base font-medium shadow hover:bg-blue-700">
            Начать продвижение
            </button>
            </div>
            <div className="flex justify-center">
            <img src={hero} alt="" className="w-full max-w-md" />
            </div>
            </div>
            </section>
        </>
    )
}

