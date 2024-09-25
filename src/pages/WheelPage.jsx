import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { MdCancel } from "react-icons/md";
import { FaChevronUp } from "react-icons/fa"; // FaChevronUp import qilishni qo'shdim
import { useNavigate } from "react-router-dom";
import ButtonGroup from "./ButtonGroup";
import OpenSelect from "./OpenSelect";

export default function DiskPage() {
  const navigate = useNavigate();
  const [params, setParams] = useState({
    width: "",
    height: "",
    diameter: "",
    manufacturer: "",
  });

  const [options, setOptions] = useState({
    width: [],
    height: [],
    diameter: [],
    manufacturer: [],
  });

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const isSearchDisabled = Object.values(params).every((value) => value === "");
  const [showProducts, setShowProducts] = useState(false);
  const lastProductRef = useRef();
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [isOpen, setIsOpen] = useState({
    width: true,
    height: true,
    diameter: true,
    manufacturer: true,
  });

  const [resetTrigger, setResetTrigger] = useState(0);

  const handleChange = (option, name) => {
    const newParams = { ...params, [name]: option };
    setParams(newParams);
  };

  const fetchDisks = async (page = 1) => {
    setLoading(true);
    try {
      const response = await axios.get(
        "http://195.26.240.163:4000/api/disks/disks",
        {
          params: {
            width: params.width,
            height: params.height,
            diametr: params.diameter,
            brand: params.manufacturer,
            page: page,
          },
        }
      );

      const data = response.data;
      setTotalItems(data.pagination.totalItems);
      setAllProducts((prev) => [...prev, ...data.data]);
      setFilteredProducts(data.data);
      setDisplayedProducts((prev) => [...prev, ...data.data]); // Append new products to displayed products
      updateOptions(data.data);
    } catch (error) {
      console.error("Error fetching disks:", error);
    } finally {
      setLoading(false);
    }
  };

  const updateOptions = (products) => {
    const newOptions = {
      width: [...new Set(products.map((p) => p.width))].filter(Boolean),
      height: [...new Set(products.map((p) => p.height))].filter(Boolean),
      diameter: [...new Set(products.map((p) => p.diametr))].filter(Boolean),
      manufacturer: [...new Set(products.map((p) => p.brand))].filter(Boolean),
    };
    setOptions(newOptions);
  };

  const handleSearch = () => {
    setDisplayedProducts(filteredProducts.slice(0, totalItems));
    setShowProducts(true);
  };

  const handleReset = () => {
    setParams({
      width: "",
      height: "",
      diameter: "",
      manufacturer: "",
    });
    setAllProducts([]);
    setDisplayedProducts([]);
    setTotalItems(0);
    setCurrentPage(1); // Reset to the first page
    setResetTrigger((prev) => prev + 1);
    setShowProducts(false);
  };

  const handleScroll = () => {
    if (window.scrollY > 550) {
      setShowScrollButton(true); // Show button when scrolled down
    } else {
      setShowScrollButton(false); // Hide button when near top
    }

    // Infinite Scroll Logika qismi
    if (
      !loading &&
      displayedProducts.length < totalItems &&
      lastProductRef.current
    ) {
      const lastProduct = lastProductRef.current;
      const { bottom } = lastProduct.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (bottom <= windowHeight) {
        setCurrentPage((prev) => prev + 1); // Next sahifani yuklash
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Scroll hodisasi uchun useEffect
  useEffect(() => {
    window.addEventListener("scroll", handleScroll); // Scroll event tinglovchisini qo‘shish
    return () => window.removeEventListener("scroll", handleScroll); // Tinglovchini tozalash
  }, [loading, displayedProducts.length, totalItems]);

  const toggleSection = (section) => {
    setIsOpen((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  // Ma'lumotlarni olish useEffect
  useEffect(() => {
    fetchDisks(currentPage);
  }, [params, currentPage]); // Parametrlar yoki currentPage o'zgarganda disklarni yuklash

  return (
    <>
      <div className="w-full bg-[#282828] p-4 shadow-md">
        <div className="max-w-[75%] mx-auto">
          <ButtonGroup />
          <div className="mb-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {["width", "height", "diameter", "manufacturer"].map((param) => (
                <div key={param}>
                  <h3
                    className="py-5 hover:text-orange-500 text-[#666666] bg-white rounded-t-md px-4 text-[13px] duration-300 cursor-pointer"
                    onClick={() => toggleSection(param)}
                  >
                    {param.charAt(0).toUpperCase() + param.slice(1)}
                  </h3>
                  {isOpen[param] && (
                    <OpenSelect
                      options={options[param]}
                      onChange={(option) => handleChange(option, param)}
                      name={param}
                      resetTrigger={resetTrigger}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="w-full flex gap-8 justify-center mb-4">
            <button
              className={`px-6 bg-[#666666] text-sm text-white py-3 rounded-md hover:bg-gray-600 ${
                isSearchDisabled ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={handleSearch}
              disabled={isSearchDisabled}
            >
              Поиск {totalItems > 0 ? `(${totalItems})` : ""}
            </button>
            <button
              className="px-6 flex items-center content-center gap-2 text-sm text-[#909090] py-2 rounded-md hover:text-orange-500 transition duration-300"
              onClick={handleReset}
            >
              <MdCancel /> Сбросить
            </button>
          </div>
        </div>
      </div>

      <div className="mt-4 p-4 rounded-md">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-[87.4%] mx-auto">
          {showProducts &&
            displayedProducts.map((product, index) => (
              <div
                key={product.id}
                className="border hover:border-orange-600 transition duration-500 bg-white cursor-pointer flex flex-col items-center p-4"
                onClick={() => navigate(`/wheel/${product.id}`)}
                ref={
                  index === displayedProducts.length - 1 ? lastProductRef : null
                }
              >
                <img
                  src={"https://sibirkoleso.ru" + product.picture}
                  className="w-40 h-52 mb-4 object-contain"
                  alt={product.name}
                />
                <h4 className="font-bold text-lg mb-2">{product.brand}</h4>
                <p className="text-gray-700 mb-2">{product.name}</p>
                <p className="text-gray-700">{product.type}</p>
                <p className="text-gray-800 font-bold mb-2">
                  {product.price} ₽
                </p>
              </div>
            ))}
        </div>
      </div>

      {showScrollButton && (
        <button
          className="fixed bottom-[67vh] right-[90vw] z-10 text-xl bg-white font-[400] p-4 rounded-full shadow-lg border hover:text-orange-600 hover:border-orange-600 transition duration-300"
          onClick={scrollToTop}
        >
          <FaChevronUp />
        </button>
      )}
    </>
  );
}
