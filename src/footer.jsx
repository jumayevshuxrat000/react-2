import logo from "./assets/img/Group 15.png"
import master from "./assets/img/Frame 84.png"
import qishi from "./assets/img/Frame 87.png"
import vica from "./assets/img/Frame 83.png"
import mir from "./assets/img/Frame 86.png"
export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm text-gray-700">

        <div>
          <div className="flex items-center gap-2 mb-3">
            <img
              src={logo}
              alt=""
              className="h-6"
            />
            <span className="font-bold text-lg">
              SMM<span className="text-blue-500">FLOW</span>
            </span>
          </div>
          <p className="text-gray-600 mb-4">
            SMMFLOW – сервис, где вы сможете приобрести качественное продвижение
            в социальных сетях по выгодным ценам.
          </p>
          <div className="flex gap-3">
            <img src={mir} alt="" className="h-6" />
            <img src={vica} alt="" className="h-6" />
            <img src={qishi} alt="" className="h-6" />
            <img src={master} alt="" className="h-6" />
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <a href="" className="hover:text-blue-500">Каталог услуг</a>
          <a href="" className="hover:text-blue-500">Преимущества</a>
          <a href="" className="hover:text-blue-500">Отзывы</a>
        </div>
        <div className="flex flex-col space-y-2">
          <a href="" className="hover:text-blue-500">Политика конфиденциальности</a>
          <a href="" className="hover:text-blue-500">Публичная оферта</a>
          <a href="" className="hover:text-blue-500">Пользовательское соглашение</a>
          <a href="" className="hover:text-blue-500">Правила сервиса</a>
          <a href="" className="hover:text-blue-500">Контакты</a>
        </div>

        <div>
          <p className="font-semibold mb-3">Нужна помощь?</p>
          <button className="bg-gray-200 hover:bg-gray-300 text-sm px-4 py-2 rounded">
            Онлайн-чат
          </button>
          <p className="mt-3 text-gray-600">support@smmflow.net</p>
        </div>
      </div>
    </footer>
  );
}
