import { Link } from "react-router-dom";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const Footer = () => {
  return (
    <footer className="bg-[#282828] text-white p-6">
      <div className="container  w-[90%] md:w-[75%] flex flex-col md:flex-row justify-between">
        <div className="flex tes flex-col text-sm mb-4 md:mb-0">
          <Link
            to="/tires"
            className="cursor-pointer hover:text-orange-500 duration-500 font-semibold"
            onClick={scrollToTop}
          >
            Шины
          </Link>
          <Link
            to="/wheels"
            className="cursor-pointer hover:text-orange-500 duration-500 font-semibold"
            onClick={scrollToTop}
          >
            Диски
          </Link>
        </div>

        <div className="flex flex-col text-sm mb-4 md:mb-0">
          <Link
            to="/about"
            className="cursor-pointer hover:text-orange-500 duration-500"
            onClick={scrollToTop}
          >
            О компании
          </Link>
          <Link
            to="/contacts"
            className="cursor-pointer hover:text-orange-500 duration-500"
            onClick={scrollToTop}
          >
            Контакты
          </Link>
        </div>
        <div className="flex flex-col text-sm mb-4 md:mb-0">
          <Link
            to="/payment"
            className="cursor-pointer hover:text-orange-500 duration-500"
            onClick={scrollToTop}
          >
            Оплата
          </Link>
          <Link
            to="/delivery"
            className="cursor-pointer hover:text-orange-500 duration-500"
            onClick={scrollToTop}
          >
            Доставка
          </Link>
        </div>
      </div>
      <div className="mt-4  text-center text-gray-400 text-xs">
        <p className="text-start m-auto justify-center flex">
          © Все права защищены. <br />
          Информация на сайте — не является публичной офертой, согласно ст. №437
          Гражданского кодекса РФ. Цены действительны при заказе с сайта. Товар{" "}
          <br /> резервируется на сутки после поступления на склад. Цена
          актуальна в течении суток.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
