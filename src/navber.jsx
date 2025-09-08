import React, { useState } from "react";
import logo from "./assets/img/Group 15.png"

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white border-b">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center">
        <div className="flex items-center flex-shrink-0">
          {/* Replace src with your logo */}
          <img
            src={logo}
            alt=""
            className="h-8 w-auto"
          />
        </div>

        <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-8">
          <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900">
            Услуги
          </a>
          <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900">
            Преимущества
          </a>
          <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900">
            Отзывы
          </a>
        </nav>

        <div className="ml-auto flex items-center gap-4">
          <a href="#" className="text-sm text-gray-700 hover:text-gray-900 hidden sm:inline">
            Войти
          </a>

          <button className="hidden sm:inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium shadow-sm hover:bg-blue-700">
            Быстрый заказ
          </button>

          <button
            onClick={() => setOpen(!open)}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:bg-gray-100 md:hidden"
            aria-expanded={open}
          >
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t">
          <div className="px-4 py-3 space-y-2">
            <a href="#" className="block text-base font-medium text-gray-700">Услуги</a>
            <a href="#" className="block text-base font-medium text-gray-700">Преимущества</a>
            <a href="#" className="block text-base font-medium text-gray-700">Отзывы</a>
            <div className="pt-2 border-t mt-2 flex items-center justify-between">
              <a href="#" className="text-base text-gray-700">Войти</a>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium">Быстрый заказ</button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
