
import React from "react";
import { FaStar } from "react-icons/fa";
import user_pic from "./assets/img/Group 30.png"

export default function User() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">
          Отзывы клиентов
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          
          <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-3">
              <img
                src={user_pic}
                alt=""
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h3 className="font-semibold">Александр</h3>
                <div className="flex text-yellow-400 text-sm">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
              </div>
            </div>
            <p className="text-gray-600 text-sm">
              SMMFLOW помог мне продвинуть канал на YouTube. Заказывал подписчиков
              и лайки, все прошло быстро и качественно, всем рекомендую!
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-3">
              <img
                src={user_pic}
                alt=""
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h3 className="font-semibold">Анна</h3>
                <div className="flex text-yellow-400 text-sm">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
              </div>
            </div>
            <p className="text-gray-600 text-sm">
              Я не ожидала, что продвижение в Instagram может быть таким простым.
              Заказала подписчиков через SMMFLOW и очень довольна результатом.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-3">
              <img
                src={user_pic}
                alt=""
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h3 className="font-semibold">Дмитрий</h3>
                <div className="flex text-yellow-400 text-sm">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
              </div>
            </div>
            <p className="text-gray-600 text-sm">
              Приобрел подписчиков и лайки на TikTok, результат превзошел все ожидания.
              Быстро, качественно, оправдало свои деньги. Рекомендую!
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-3">
              <img
                src={user_pic}
                alt=""
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h3 className="font-semibold">Ксения</h3>
                <div className="flex text-yellow-400 text-sm">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
              </div>
            </div>
            <p className="text-gray-600 text-sm">
              Воспользовалась SMMFLOW для прокачки своего TikTok аккаунта и рада результату.
              Получила множество новых подписчиков и лайков!
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
