
export default function FAQ() {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Частые вопросы
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-100 rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              Почему цены на ваши услуги ниже, чем у конкурентов?
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Мы стремимся предложить наши услуги по наиболее конкурентоспособным ценам,
              чтобы обеспечить удобство и доступность для наших клиентов.
            </p>
          </div>
          <div className="bg-gray-100 rounded-xl p-5">
            <h3 className="font-semibold mb-2">Какие способы оплаты вы принимаете?</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Мы принимаем оплату различными способами, такими как банковские карты,
              Qiwi-кошелек, Payeer и криптовалюты.
            </p>
          </div>

          <div className="bg-gray-100 rounded-xl p-5">
            <h3 className="font-semibold mb-2">Как вы гарантируете качество услуг?</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Мы используем только безопасные и эффективные методы, которые позволяют
              нам гарантировать высокое качество наших услуг.
            </p>
          </div>

          <div className="bg-gray-100 rounded-xl p-5">
            <h3 className="font-semibold mb-2">Меня не заблокируют?</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Мы используем только безопасные и этичные методы привлечения подписчиков
              и лайков, которые не нарушают условия использования социальных сетей.
            </p>
          </div>
          <div className="bg-gray-100 rounded-xl p-5">
            <h3 className="font-semibold mb-2">Как я могу узнать о статусе моего заказа?</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Вы можете отслеживать статус своего заказа через свой личный кабинет на нашем сайте.
            </p>
          </div>
          <div className="bg-gray-100 rounded-xl p-5">
            <h3 className="font-semibold mb-2">Как я могу связаться с вами?</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Вы можете связаться с нами через онлайн-чат на сайте или через социальные сети.
            </p>
          </div>
          <div className="bg-gray-100 rounded-xl p-5">
            <h3 className="font-semibold mb-2">Как быстро выполняется заказ?</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Срок выполнения заказа зависит от типа и объема услуги, которую вы заказываете.
              Обычно мы указываем срок выполнения в описании услуги.
            </p>
          </div>
          <div className="bg-gray-100 rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              Что произойдет, если мои подписчики или лайки уйдут?
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Мы предлагаем гарантию возврата денег на баланс в случае удаления подписчиков
              или лайков, а также предоставляем гарантию от списаний по некоторым услугам
              в течение 1 месяца.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
