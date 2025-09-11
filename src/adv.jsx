import React from "react";
import {
  FaInstagram,
  FaVk,
  FaTiktok,
  FaTelegram,
  FaYoutube,
  FaFacebook,
  FaTwitter,
  FaTwitch,
} from "react-icons/fa";

export default function Adv() {
  return (
    <section className="bg-blue-600 py-10 text-center flex flex-col">
      <h2 className="text-white text-2xl font-bold mb-6">Быстрый заказ</h2>
      <div className=" max-w-5xl mx-auto px-4 rounded-xl grid grid-flow-col auto-cols-max  gap-6 bg-white text-gray-700 text-sm py-2  overflow-x-auto">
        <button className="flex items-center gap-2 px-3 py-1 bg-white rounded-md shadow hover:bg-gray-100 transition">
          <FaInstagram className="text-xl" /> <span className="hidden sm:inline text-sm">Instagram</span>
        </button>
        <button className="flex items-center gap-2 px-3 py-1 bg-white rounded-md shadow hover:bg-gray-100 transition">
          <FaVk className="text-xl" /> <span className="hidden sm:inline text-sm">VK</span>
        </button>
        <button className="flex items-center gap-2 px-3 py-1 bg-white rounded-md shadow hover:bg-gray-100 transition">
          <FaTiktok className="text-xl" /> <span className="hidden sm:inline text-sm">TikTok</span>
        </button>
        <button className="flex items-center gap-2 px-3 py-1 bg-white rounded-md shadow hover:bg-gray-100 transition">
          <FaTelegram className="text-xl" /> <span className="hidden sm:inline text-sm">Telegram</span>
        </button>
        <button className="flex items-center gap-2 px-3 py-1 bg-white rounded-md shadow hover:bg-gray-100 transition">
          <FaYoutube className="text-xl" /> <span className="hidden sm:inline text-sm">YouTube</span>
        </button>
        <button className="flex items-center gap-2 px-3 py-1 bg-white rounded-md shadow hover:bg-gray-100 transition">
          <FaFacebook className="text-xl" /> <span className="hidden sm:inline text-sm">Facebook</span>
        </button>
        <button className="flex items-center gap-2 px-3 py-1 bg-white rounded-md shadow hover:bg-gray-100 transition">
          <FaTwitter className="text-xl" /> <span className="hidden sm:inline text-sm">Twitter</span>
        </button>
        <button className="flex items-center gap-2 px-3 py-1 bg-white rounded-md shadow hover:bg-gray-100 transition">
          <FaTwitch className="text-xl" /> <span className="hidden sm:inline text-sm">Twitch</span>
        </button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-10 max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center hover:shadow-lg transition">
          <span className="text-3xl mb-2">🙋‍♂️</span>
          <p className="text-lg font-medium">Подписчики</p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center hover:shadow-lg transition">
          <span className="text-3xl mb-2">👀</span>
          <p className="text-lg font-medium">Просмотры</p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center hover:shadow-lg transition">
          <span className="text-3xl mb-2">👍</span>
          <p className="text-lg font-medium">Реакции</p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center hover:shadow-lg transition">
          <span className="text-3xl mb-2">💬</span>
          <p className="text-lg font-medium">Комментарии</p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center hover:shadow-lg transition">
          <span className="text-3xl mb-2">👀</span>
          <p className="text-lg font-medium">Авто-просмотры</p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center hover:shadow-lg transition">
          <span className="text-3xl mb-2">👍</span>
          <p className="text-lg font-medium">Авто-реакции</p>
        </div>
      </div>
    </section>
  );
}
