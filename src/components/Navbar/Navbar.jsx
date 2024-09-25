import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md";
import { FiX } from "react-icons/fi";
import { PiTireBold } from "react-icons/pi";
import { GiCarWheel } from "react-icons/gi";
import { RiDeleteBin6Line } from "react-icons/ri"; // Iconni import qilish
import { CartContext } from "../../pages/CartProvider";
import Logo from "../../../public/Logo.png";

const ArrowButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { cartItems, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleCartDrawer = () => {
    if (cartItems.length > 0) {
      setIsDrawerOpen(!isDrawerOpen);
    }
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + parseFloat(item.price), 0);
  };

  const totalPrice = calculateTotalPrice().toFixed(3);

  const handleLinkClick = (path) => {
    navigate(path);
    window.scrollTo(0, 0); // Sahifa yuqoriga o‘tadi
    setIsOpen(false);
  };

  const [isAnimating, setIsAnimating] = useState(false);

  const toggleDrawer = () => {
    if (!isAnimating) {
      setIsAnimating(true); // Animatsiyani boshlash
      setTimeout(() => {
        setIsDrawerOpen(false); // Drawer ni yopish
        setIsAnimating(false); // Animatsiyani tugatish
      }, 300); // Animatsiya davomiyligi (0.3 sekund)
    }
  };

  return (
    <>
      <header className="bg-white py-7 border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-[1140px] mx-auto flex items-center justify-between">
          <div className="flex gap-x-14">
            <div
              onClick={() => handleLinkClick("/")}
              className="font-bold text-xl flex items-center gap-x-3 cursor-pointer"
            >
              <img
                src={Logo}
                className="w-[200px] md:w-[100%] h-[34px]"
                alt="logo"
              />
            </div>
            <span className="h-[34px] w-[1px] hidden md:block bg-slate-300"></span>
            <div className="flex items-center gap-x-7">
              <button
                onClick={toggleMenu}
                className="flex items-center gap-x-3 text-[13px] group duration-300"
              >
                {isOpen ? (
                  <FiX
                    size={20}
                    className=" group-hover:text-[#FF5601] -mr-[6px] transition duration-300"
                  />
                ) : (
                  <div className="hamburger-menu">
                    <div className="line w-full bg-[#bababa] group-hover:bg-[#FF5601] transition-all duration-300 ease"></div>
                    <div className="line w-full bg-[#bababa] group-hover:bg-[#FF5601] transition-all duration-300 ease"></div>
                    <div className="line w-full bg-[#bababa] group-hover:bg-[#FF5601] transition-all duration-300 ease group-hover:w-1/2"></div>
                  </div>
                )}
                <span className="hidden md:block group-hover:text-[#FF5601] transition duration-300">
                  Меню
                </span>
              </button>
            </div>
          </div>

          <div className="flex md:pl-2 items-center gap-5 md:gap-x-11">
            <span className="md:h-[34px] h-[40px] w-[1px] md:block bg-slate-300"></span>
            <button
              onClick={toggleCartDrawer}
              className="flex items-center content-center cursor-pointer text-black hover:text-[#FF5601] duration-300"
            >
              <span className="material-symbols-outlined mt-1 size-5 md:mb-2 text-xl md:text-lg hover:text-[#FF5601] text-[#bababa] duration-300">
                <MdShoppingCart size={20} />
              </span>
              {cartItems.length > 0 && (
                <span className="bg-red-600 text-white px-[7px] py-[2px] rounded-full -ml-2 mt-[10px] text-[11px]">
                  {cartItems.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed left-0 right-0 top-15 h-[55vh] md:h-[33vh] bg-gray-50 border-t border-slate-200 transition-transform duration-300 ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="w-[75%] h-[50px] grid md:h-auto m-auto py-5 md:flex gap-5 md:items-center">
          <div className="flex md:flex-row gap-4 md:gap-0 justify-between w-full md:w-[25%]">
            <p
              className="flex hover:text-orange-600 cursor-pointer flex-col items-center mb-4 duration-500"
              onClick={() => handleLinkClick("/tires")}
            >
              <span className="text-7xl pb-3">
                <PiTireBold />
              </span>
              <span className="text-lg font-semibold">Шины</span>
              <span className="text-sm">36 655 моделей</span>
            </p>
            <p
              className="flex flex-col hover:text-orange-600 duration-500 cursor-pointer items-center mb-4"
              onClick={() => handleLinkClick("/wheels")}
            >
              <span className="text-7xl pb-3">
                <GiCarWheel />
              </span>
              <span className="text-lg font-semibold">Диски</span>
              <span className="text-sm">11 144 модели</span>
            </p>
          </div>

          <div className="hidden md:block border-l-4 rounded border-gray-300 h-40 mx-auto"></div>

          <div className="flex flex-col md:flex-row items-start md:justify-between w-full md:w-[55%] gap-4">
            <div className="flex gap-20 md:gap-12 items-center content-center">
              <div className="flex flex-col items-start mb-2">
                <p
                  className="hover:text-orange-600 cursor-pointer mb-1 duration-300"
                  onClick={() => handleLinkClick("/about")}
                >
                  О компании
                </p>
                <p
                  className="hover:text-orange-600 cursor-pointer mb-1 duration-300"
                  onClick={() => handleLinkClick("/contacts")}
                >
                  Контакты
                </p>
              </div>
              <div className="flex flex-col items-start mb-2">
                <p
                  className="hover:text-orange-600 cursor-pointer mb-1 duration-300"
                  onClick={() => handleLinkClick("/payment")}
                >
                  Оплата
                </p>
                <p
                  className="hover:text-orange-600 cursor-pointer mb-1 duration-300"
                  onClick={() => handleLinkClick("/delivery")}
                >
                  Доставка
                </p>
              </div>
            </div>
            <div className="mt-4 text-center cursor-default">
              <h2 className="font-bold">Единая справочная</h2>
              <p className="text-3xl">8 800 775-10-50</p>
              <p>+7 (383) 388-55-32</p>
            </div>
          </div>
        </div>
      </div>

      {isDrawerOpen && (
        <div
          className={`fixed right-0 top-0 h-full w-[440px] bg-white shadow-lg z-50 p-8 overflow-y-auto transform ${
            isAnimating ? "translate-x-full" : "translate-x-0"
          } transition-transform duration-300`}
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold text-lg">Cart</h2>
            <button
              onClick={toggleDrawer}
              className="text-2xl hover:text-orange-600 duration-500"
            >
              <FiX />
            </button>
          </div>
          {cartItems.length === 0 ? (
            <p>No items in the cart</p>
          ) : (
            <div className="flex justify-between flex-col h-[88%]">
              <ul>
                {cartItems.map((item) => (
                  <li key={item.id} className="mb-4 border-b pb-2">
                    <div className="flex justify-between items-center p-3">
                      <div className="flex gap-x-5">
                        <img
                          src={`https://sibirkoleso.ru${item.picture}`} // To'liq URL qo'shildi
                          alt={item.name}
                          className="w-16 h-20 "
                          onError={(e) => {
                            e.target.src = "/fallback-image.jpg";
                          }} // Agar rasm yuklanmasa, zaxira rasm
                        />
                        <div>
                          <div className="cursor-default">
                            <p className="font-semibold">{item.brand}</p>
                            <p>{item.type}</p>
                          </div>
                          <p className="text-gray-600 cursor-default">4 шт</p>
                        </div>
                      </div>
                      <p className="cursor-default">{item.price} ₽</p>
                      <button
                        onClick={() => removeFromCart(item.cartId)}
                        className="text-xl text-gray-900 hover:text-red-700 transition duration-300"
                      >
                        <RiDeleteBin6Line />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between">
                <button className="text-white text-sm rounded-md bg-orange-600 px-6 py-3">
                  Оформление заказа
                </button>
                <p className="text-sm">
                  Итог:{" "}
                  <span className="font-bold text-base">{totalPrice}</span> ₽
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ArrowButton;
