import { useState, useEffect } from "react";
import { BsCashStack } from "react-icons/bs";
import { CiBank, CiCreditCard2 } from "react-icons/ci";
import { IoDocumentTextOutline } from "react-icons/io5";
import { RiQrCodeLine } from "react-icons/ri";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import Loader from "./Loader"; // Import the Loader component

const Payment = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="container mx-auto w-[100%] md:w-[95%] p-4 md:p-8">
            {loading ? (
                <Loader />
            ) : (
                <>
                    <hr className="border w-[6%] border-tt border-black mb-6" />
                    <h1 className="text-3xl md:text-4xl font-bold mb-6 text-start">Оплата</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white border border-gray-300  rounded text-start p-5 md:p-12">
                            <BsCashStack className="text-3xl mb-6" />
                            <h2 className="text-sm md:text-xl    font-semibold mb-2">При получении заказа</h2>
                            <p className="text-xs md:text-sm">Вы всегда можете оплатить заказ при получении: наличными или с помощью банковской карты.</p>
                        </div>

                            <div className="bg-white border border-gray-300 rounded text-start p-5 md:p-10 ">
                            <CiCreditCard2 className="text-3xl mb-6" />
                            <h2 className="text-xl font-semibold mb-2">Банковская карта</h2>
                            <p className="text-xs md:text-sm">Онлайн оплатить заказ с помощью: Visa, MasterCard, American Express, JSB, Diners Club, Мир и др.</p>
                        </div>

                            <div className="bg-white border border-gray-300 rounded text-start p-5 md:p-10  ">
                            <IoDocumentTextOutline className="text-3xl mb-6" />
                            <h2 className="text-xl font-semibold mb-2">Безналичный расчет</h2>
                                <p className="text-xs md:text-sm">Оплатить с помощью банковского перевода (по счету), для юридических лиц, так и для физических лиц.</p>
                        </div>
                            <div className="bg-white border right-5 border-gray-300 rounded text-start p-5 md:p-10 ">
                                <CiBank className="text-3xl mb-6" />
                                <h2 className="text-xl font-semibold mb-2">Кредит</h2>
                                <p className="text-xs md:text-sm">Возможность приобрести товар в кредит. <br /> Подробнее об условиях и банках <br /> партнерах читайте в разделе «Кредит».</p>
                            </div>

                            <div className="bg-white border mx-auto right-5 border-gray-300 rounded text-start p-5 md:p-10 ">
                                <RiQrCodeLine className="text-3xl mb-6 " />
                                <h2 className="text-xl font-semibold mb-2">QR-Код (СБП)</h2>
                                <p className="text-xs md:text-sm">Система быстрых платежей. Вы можете оплатить заказ, отсканировав QR-код в мобильном приложении вашего банка.</p>
                            </div>
                    </div>
                    <div className='w-full pt-12'>
                        <h1 className="text-md w-full md:text-md md:mx-auto md:w-[60%]  font-bold mb-6">Система быстрых платежей (QR-Код)</h1>
                        <p className="mb-4  text-xs md:w-[60%] md:mx-auto">
                            Платежи по QR-коду через СБП максимально удобны для онлайн-оплаты покупок, они быстрее <br /> классических карточных платежей.
                            Так, на сайте «Сибирь Колесо» покупателю достаточно <br /> выбрать способ оплаты через СБП.
                            После того, как на экране будет сформирован QR-код, <br /> отсканируйте его смартфоном через мобильное приложение своего банка
                            и завершите уже в <br /> нем операцию. Подчеркиваем, банк плательщика должен быть участником СБП, а также <br /> поддерживать
                            в собственном мобильном приложении оплату по QR-кодам. Деrounded-lg shadow-md ньги со счета будут <br /> перечислены мгновенно после совершения оплаты.
                        </p>

                            <h2 className="text-md w-full md:text-md md:mx-auto md:w-[60%]  font-bold mb-6">Безопасность онлайн платежей</h2>
                            <p className="mb-4  text-xs md:w-[60%] md:mx-auto">
                            Оплата происходит через авторизационный сервер Процессингового центра Банка с использованием банковских кредитных карт следующих платежных систем:
                            VISA International, MasterCard World Wide.
<br />
                            Для оплаты покупки Вы будете перенаправлены на платежный шлюз ОАО "Сбербанк России" для ввода реквизитов Вашей карты.
                            Пожалуйста, приготовьте Вашу пластиковую карту заранее. Соединение с платежным шлюзом и передача информации осуществляется в защищенном
                            режиме с использованием протокола шифрования SSL.
<br />
                            В случае если Ваш банк поддерживает технологию безопасного проведения интернет-платежей Verified By Visa или MasterCard Secure Code
                            для проведения платежа также может потребоваться ввод специального пароля. Способы и возможности получения паролей для совершения
                            интернет-платежей Вы можете уточнить в банке, выпустившем карту.
<br />
                            Настоящий сайт поддерживает 128-битное шифрование. Конфиденциальностью сообщаемой информации обеспечивается ОАО "Сбербанк России".
                            Введенная информация не будет предоставлена третьим лицам за исключением случаев, предусмотренных законодательством РФ.
                            Проведение платежа на сайте "Сбербанк России". Введенная информация не соответствует требованиям платежных систем Visa Int.
                            и MasterCard Europe Sprl.
                        </p>
                            <ul className="list-disc list-inside text-xs mb-4  text-xs md:w-[60%] md:mx-auto">
                                <li> Политика обработки персональных данных.</li>
                        </ul>
                    </div>
                    <div className='w-full mb-8 pt-16'>
                            <h1 className="text-md w-full md:text-md md:mx-auto md:w-[60%]  font-bold mb-6">Возврат дисков</h1>
                            <p className="mb-4  text-xs md:w-[60%] md:mx-auto">
                            Перед монтажом шин на диск (в течение 2-х недель после покупки) обязательно примерьте диск на автомобиль.
                            Убедитесь, что диск ни за что не задевает (тормозной механизм, стойки подвески и т.д.).
                        </p>

                        
                            <p className="gap-2 flex items-baseline mb-4  text-xs md:w-[60%] md:mx-auto"><span><IoMdCheckmarkCircleOutline /></span>Проверьте, что диск точно центрируется (без люфта) на ступице автомобиля.</p>
                            <p className="gap-2 flex items-baseline mb-4  text-xs md:w-[60%] md:mx-auto"><span><IoMdCheckmarkCircleOutline /></span>Проверьте что (если на автомобиле болты) чтобы они не были слишком длинные, дабы предотвратить повреждение ручного тормоза и датчиков ABS.</p>
                            <p className="gap-2 flex items-baseline mb-4  text-xs md:w-[60%] md:mx-auto"><span><IoMdCheckmarkCircleOutline /></span>Проверьте что ступичные колпачки не вываливают заглушку диска, а крепеж не препятствует закрыванию крышки.</p>

                            <p className="mb-4  text-xs md:w-[60%] md:mx-auto">Во избежание потери колес на ходу:</p>
                            <p className="gap-2 flex items-baseline mb-4  text-xs md:w-[60%] md:mx-auto"><span><IoMdCheckmarkCircleOutline /></span>Проверьте, крепеж должен соответствовать посадочным отверстиям на диске (сфера, конус или шайба).</p>
                            <p className="gap-2 flex items-baseline mb-4  text-xs md:w-[60%] md:mx-auto"><span><IoMdCheckmarkCircleOutline /></span>Проверьте, колесные болты или гайки закручиваются минимум на пять витков резьбы.</p>
                            <p className="gap-2 flex items-baseline mb-4  text-xs md:w-[60%] md:mx-auto"><span><IoMdCheckmarkCircleOutline /></span>Проверьте что все 4 диска одного цвета, одинаковой сверловки, одинакового диаметра и ширины.</p>

                            <p className="mb-4  text-xs md:w-[60%] md:mx-auto">
                            Необходимо устанавливать диски как на переднюю, так и на заднюю ось. Возврат возможен только в товарном виде при сохранении заводской упаковки.
                            Данные правила не служат для ущемления прав покупателей, а наоборот, служат для предотвращения спорных и конфликтных ситуаций.
                            Например, если факт неосответствия выяснится после проведения шиномонтажных работ на стороннем сервисе, Вам придется оплатить их стоимость,
                            а потом заплатить за обратную перевозку.
  <br />
  <br />
                            Просим отнестись с пониманием к таким фактам, что диски универсальные, а не оригинальные, производитель оставляет за собой право замены сферы болта (гайки) на конус, и наоборот.
                            Ни один даже самый полный каталог не содержит такой информации, как критична внутренняя форма диска и его совместимость с тормозными механизмами, особенно на тонких моделях а/м.
                        </p>
                    </div>
                </>
            )}
        </div>
    );
}

export default Payment;