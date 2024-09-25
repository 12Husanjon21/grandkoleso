import { useState, useEffect } from "react";
import { BsBoxSeamFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { FaWarehouse } from 'react-icons/fa';
import { LuPlane } from "react-icons/lu";
import { CiLocationOn } from "react-icons/ci";
import Loader from "./Loader"; // Import the Loader component

const Delivery = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
          const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="container mx-auto w-[100%] border md:w-[95%] p-4 md:p-8">
            {loading ? (
                <Loader />  ) : (
                <>
                        <hr className="border w-[20%] md:w-[6%] border-tt border-black mb-8 md:mb-12" />    

                    <h1 className="text-xl md:text-4xl font-bold mb-6">Доставка</h1>
                    <p className="mb-6 md:w-[65%] m-auto text-xs md:text-sm   ">
                        Мы всегда рады предложить самые удобные способы доставки для наших клиентов. Если вы не <br />
                        нашли удобный для вас способ доставки — вы всегда можете связаться с нашими менеджерами <br />
                        по телефону: <strong>8 800 775 10 50</strong> (звонок бесплатный) и обсудить любые варианты доставки
                        вашего заказа.
                    </p>

                    <div className="mb-8">
                        <div className="flex pl-12 md:pl-0 gap-2 md:gap-5 items-center mb-2">
                            <BsBoxSeamFill className="text-2xl md:text-3xl mr-2" />
                            <h2 className="text-sm md:text-xl font-bold">Постаматы TyreBox</h2>
                        </div>
                        <p className="mb-2 text-sm md:text-md md:pl-12 ">Сроки: от 2 до 72 часов. <br /> Стоимость: Бесплатно.
                        <br />
                        <br />
                                <span className="flex md:w-[72.5%] m-auto gap-8 items-baseline">
                                        Оформите заказ на сайте и выберите способ доставки через постаматы TyreBox. После подтверждения
                                    наличия товара статус заказа изменится на «На складе», и вы сможете оплатить его онлайн.
                                    После оплаты ваш заказ будет доставлен в выбранный постамат TyreBox, и вы получите уведомление о готовности к
                                    получению. Вы сможете забрать свой заказ в любое удобное время. Открытие ячейки осуществляется
                                    через личный кабинет на сайте.
                                </span>
                        </p>
                    </div>

                    <div className="mb-8">
                        <div className="flex items-center mb-2">
                            <TbTruckDelivery className="text-5xl mr-2" />
                            <h2 className="text-2xl font-bold">Доставка по городу</h2>
                        </div>
                        <p className="mb-2">Сроки: от 2 до 72 часов (кроме воскресенья). <br />Стоимость при заказе от 4 шт.: Бесплатно (менее 4 шт., стоимость доставки 200 руб).</p>

                        <p className="mt-4">
                            В день доставки с вами предварительно свяжутся по телефону, указанному в заказе.
                            Доставка осуществляется курьерской машиной, как правило, на следующий день после заказа.
                            Товар оплачивается наличными, либо картой при получении.
                            В случае отказа вы оплачиваете сумму за использование транспорта — 200 руб. <br /><br />
                            Мы доставляем товар до подъезда, водитель не имеет права отдаляться от машины, так как несет ответственность за груз.
                        </p>
                        <p className="italic mt-5 text-gray-400">
                            Районы: Пашино, Кольцово, Мочище, Марусино, г. Обь: 300 руб.
                            Бердск, Верх-Тула, Раздольное, Морозово: 500 руб.
                            <br />
                            Грузовые автошины: 200 руб за 1 шт.
                        </p>
                    </div>

                    <div>
                        <div className="flex items-center mb-2">
                            <FaWarehouse className="text-5xl mr-2" />
                            <h2 className="text-2xl font-bold">Самовывоз со склада</h2>
                        </div>
                        <p className="mt-4">
                            Самовывоз заказанного товара осуществляется только в рабочее время.
                            По всем вопросам, обращайтесь по телефону в ваш пункт выдачи.
                        </p>
                        <p className="mt-4">
                            Срок доставки товара в пункт выдачи от мгновенного (товар в наличии) до 3-х рабочих дней.
                            Информацию о сроках доставки можно получить в пункте выдачи.
                            По приходу товара на склад с вами свяжется менеджер.
                        </p>

                        <p className="flex mb-5 items-center content-center gap-2 mt-5 cursor-pointer hover:text-orange-600">
                            <CiLocationOn /> Пункты выдачи
                        </p>
                    </div>

                    <div className="flex items-center mb-4">
                        <LuPlane className="text-5xl mr-2" />
                        <h1 className="text-xl font-bold">Транспортные компании</h1>
                    </div>
                    <p className="mb-6">
                        Доставка по России и другим странам осуществляется с помощью сторонних транспортных компаний.
                        Выбор транспортной компании осуществляется покупателем. Стоимость и сроки зависят от выбранной компании.
                    </p>

                    <p>
                        Заказанный товар вы можете оплатить через банк. Счет на оплату отправляется электронным письмом на
                        основании заказа. Необходимо произвести оплату в тридневный срок заказа.
                        В случае оплаты другим лицом свяжитесь с нами для смены платежщика.
                        Электронный перевод может занимать от 1 до 3 дней в зависимости от банка.
                        При поступлении денежных средств мы свяжемся с вами для уточнения информации по отправке.
                        Если звонка от нас не поступило, вы всегда можете уточнить информацию по телефону:
                        <strong> 8-800-775-10-50</strong>.
                    </p>
                </>
            )}
        </div>
    );
}

export default Delivery;