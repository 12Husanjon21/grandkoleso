import { useState, useEffect } from "react";
import Loader from "./Loader"; // Import the Loader component

const Contacts = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="m-auto w-[100%] md:w-[100%]">

            {loading ? (
                <Loader /> // Show loader while loading
            ) : (
                <div className="w-full pl-2  flex md:p-8">
                    <div className="grid md:flex gap-12 m-auto items-baseline md:flex-row md:w-[70%] md:justify-center">
                        <div className="md:flex m-auto items-baseline justify-between w-[100%] ">
                            <span>
                                <hr className="border mb-5 mt-5 w-[16%] md:w-[36%] border-tt border-black md:mb-12" />
                                <h1 className="text-lg  md:text-3xl mb-5 font-bold md:mb-6 text-gray-800 text-start">Контакты</h1>
                            </span>
                            <div className="md:w-[50%]">
                                <div className="mb-6">
                                    <p className="text-xs md:text-lg text-gray-600 ">Единая справочная:</p>
                                    <p className="text-3xl w-[80%] md:w-[55%] md:text-3xl mb-3 text-gray-800 font-semibold">8 800 775 1050</p>
                                    <p className="text-gray-600 text-sm mb-3 md:mb-8 ">+7 (383) 388-55-32</p>
                                    <p className="text-lg font-bold text-gray-800  md:mb-8">info@sibirkoleso.ru</p>
                                </div>
                                <div className="mb-8">
                                    <h2 className="text-xs md:text-md text-gray-800">Сибирь-Колесо, головной офис</h2>
                                    <p className="text-xs  text-gray-800">630088, Россия, г. Новосибирск, ул. Петухова, 35, корпус 8</p>
                                </div>
                                <div className="mb-8">
                                    <h2 className="text-sm  text-gray-500 pb-2">Реквизиты</h2>
                                    <p className="text-xs md:text-sm">Индивидуальный предприниматель Панфилов Сергей Александрович <br />
                                    Почтовый адрес: 630077, г. Новосибирск, ул. Печатикова, 9, кв. 256. <br />
                                    Фактический адрес: 630088, г. Новосибирск, ул. Петухова, 9, кв. 256. <br />
                                    ИНН: 540861752310 <br />
                                    ОГРНИП: 309547331600022 (от 12 ноября 2009 г.) <br />
                                    Расчетный счет: 40802810094450031010 <br /> в Сибирском банке ПАО «Сбербанк» <br />
                                    БИК: 045004641 <br />
                                    Кор. счет: 30101810150000000641</p>
                                </div>
                                <div className="mb-12  md:mb-10">
                                        <h2 className="text-sm text-gray-500 pb-2">Реквизиты</h2>
                                        <p className="text-xs md:text-sm">Индивидуальный предприниматель Панфилов Александр Александрович <br />
                                            Почтовый адрес: 630098, г. Новосибирск, ул. Приморская, д. 26, кв. 62. <br />
                                            Фактический адрес: 630098, г. Новосибирск, ул. Приморская, д. 26, кв. 62. <br />
                                            ИНН 540809560848 <br />
                                            ОГРНИП 305547305300045 (от 22 Февраля 2005 г.) <br />
                                            Расчетный счет №40802810532020000230 <br />
                                            в филиал ПАО «БАНК УРАЛСИБ» в г. Новосибирске. <br />
                                            БИК 045004725 <br />
                                            Кор. счет №30101810400000000725</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Contacts;