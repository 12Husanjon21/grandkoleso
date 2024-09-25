import { useState, useEffect } from "react";
import DiskImage from "../assets/batch_3.jpg";
import Loader from "./Loader"; // Import the Loader component

const AboutCompany = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="container grid mx-auto w-[100%] p-4 md:p-8">
            {/* Move the hr element here */}
            {loading ? (
                <Loader />
            ) : (
                <>
                    <div>
                        <hr className="border mb-5 mt-5 w-[16%] md:w-[6%] border-tt border-black md:mb-12" />

                        <h1 className="text-lg mt-12 md:text-3xl font-bold mb-6">О компании</h1>
                            <p className="mb-6 md:mt-16 text-xs text-gray-600 md:w-[60%] md:m-auto  md:text-sm">
                            Склад: «Сибирь Колесо». Мы представляем вашему вниманию широкий выбор зимних и <br /> летних шин.
                            Наш ассортимент постоянно обновляется и пополняется. Обращайтесь в нашу <br /> компанию и убедитесь,
                            что сотрудничать с нами не только выгодно и удобно, но и очень <br /> приятно.
                            Не случайно наш магазин имеет много постоянных клиентов с которыми мы <br /> работаем вот уже много лет.
                        </p>

                        <div className="grid grid-cols-1 md:mt-16 md:grid-cols-2 gap-6">
                            <div className="bg-white md:w-[85%] p-6 border border-gray-300 rounded-sm  cursor-pointer">
                                <h2 className="text-md md:text-lg font-semibold mb-4">Широкий ассортимент</h2>
                                <p className="text-xs md:text-sm">
                                    Наша компания предлагает все виды моделей шин, как для спокойной езды в населенном пункте,
                                    так и для быстрой и надежной езды при высокой скорости за городом.
                                    Являясь официальным дилером многих всемирно известных производителей дисков,
                                    мы предлагаем качественную продукцию по низким ценам.
                                </p>
                            </div>

                            <div className="bg-white p-6 border md:w-[85%] border-gray-300 rounded-sm cursor-pointer">
                                <h2 className="text-md md:text-lg font-semibold mb-4">Профессионализм</h2>
                                <p className="text-xs md:text-sm">
                                    Теперь не нужны «носить» по всему городу в поисках подходящих шин,
                                    достаточно позвонить по нашему номеру телефона.
                                    Наш сайт функционирует круглосуточно, мы принимаем заказы по всей России,
                                    предоставляя детальную консультацию по всем интересующим вопросам.
                                </p>
                            </div>
                        </div>
                        <div className="md:mt-16 ">
                                <p className="mb-6 mt-6 text-xs text-gray-600 md:w-[60%] md:m-auto  md:text-sm">
                                Наши специалисты без труда подберут для вас нужные шины и диски, учитывая все <br /> индивидуальные особенности вашего автомобиля. Если вы затрудняетесь самостоятельно <br /> сделать выбор, наши консультанты с радостью и абсолютно бесплатно помогут вам. Подберут <br /> подходящий размер, производителя, цену и. т. д. Если в нашем ассортименте не оказалось каких- <br /> то конкретных шин, которые вы ищете, мы пойдем вам навстречу, выполнив ваш <br /> индивидуальный заказ по доставке эксклюзивного товара.
                            </p>
                        </div>
                            <div className="md:flex grid md:mb-20 mb-12 h-auto  md:flex-row md:justify-center md:my-6">
                                <div className="md:w-[75%] flex justify-center">
                                    <img src={DiskImage} alt="Store Interior" className="md:w-[900px] md:h-[500px]" />
                                </div>
                                <div className="md:w-[30%] md:h-[35%] bg-gray-50 md:pt-8 md:pb-8 md:pl-16 flex flex-col md:absolute right-24 md:mt-80 mt-8 justify-center items-start">
                                    <hr className="border md:mt-10 mb-5 h-auto w-[100%] md:w-[83%] border-tt border-gray-300 md:mb-10" />
                                    <p className="mb-4 text-xs md:text-sm text-gray-700">
                                        Мы всегда готовы выслушать ваши пожелания и <br /> замечания по работе нашего магазина, для этого <br /> вам нужно позвонить по телефону:
                                    </p>
                                    <h2 className="text-2xl md:text-3xl font-semibold mb-2 hover:text-orange-600 cursor-pointer">
                                        8 800 775 1050
                                    </h2>
                                    <p className="text-xs md:text-xs md:mb-10 text-gray-600">(звонок бесплатный)</p>
                                </div>
                            </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default AboutCompany;