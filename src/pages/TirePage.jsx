import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { MdCancel } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import ButtonGroup from "./ButtonGroup";
import OpenSelect from "./OpenSelect";
import { FaChevronUp } from "react-icons/fa6";

export default function TyrePage() {
  const navigate = useNavigate();
  const [params, setParams] = useState({
    width: "",
    height: "",
    diameter: "",
    brand: "",
  });
  const [showProducts, setShowProducts] = useState(false);
  const [activeButton, setActiveButton] = useState(1);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [isOpen, setIsOpen] = useState({
    width: true,
    height: true,
    diameter: true,
    brand: true,
  });
  const [selectedCount, setSelectedCount] = useState(0);
  const [options, setOptions] = useState({
    width: [],
    height: [],
    diameter: [],
    brand: [],
  });
  const [resetTrigger, setResetTrigger] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [loading, setLoading] = useState(false);
  const lastProductRef = useRef();
  const [showScrollButton, setShowScrollButton] = useState(false); // State to track button visibility

  const handleChange = (option, name) => {
    const newParams = { ...params, [name]: option };
    setParams(newParams);
  };

  const fetchTyres = async (page = 1) => {
    setLoading(true);
    try {
      const response = await axios.get("http://195.26.240.163:4000/api/tyres", {
        params: {
          width: params.width,
          height: params.height,
          diametr: params.diameter,
          brand: params.brand,
          page: page,
        },
      });

      const data = response.data;
      setTotalItems(data.pagination.totalItems);
      setAllProducts((prev) => [...prev, ...data.data]);
      setFilteredProducts(data.data);
      setDisplayedProducts((prev) => [...prev, ...data.data]); // Append new products to displayed products
      updateOptions(data.data);
      setSelectedCount(data.pagination.totalItems);
    } catch (error) {
      console.error("Error fetching tyres:", error);
    } finally {
      setLoading(false);
    }
  };

  const updateOptions = (products) => {
    const newOptions = {
      width: [...new Set(products.map((p) => p.width))].filter(Boolean),
      height: [...new Set(products.map((p) => p.height))].filter(Boolean),
      diameter: [...new Set(products.map((p) => p.diametr))].filter(Boolean),
      brand: [...new Set(products.map((p) => p.brand))].filter(Boolean),
    };
    setOptions(newOptions);
  };

  const handleButtonClick = (buttonIndex) => {
    setActiveButton(buttonIndex);
    if (buttonIndex === 1) {
      handleReset();
    }
  };

  const handleSearch = () => {
    setDisplayedProducts(filteredProducts.slice(0, selectedCount));
    setShowProducts(true);
  };

  const handleReset = () => {
    setParams({
      width: "",
      height: "",
      diameter: "",
      brand: "",
    });
    setAllProducts([]);
    setDisplayedProducts([]);
    setSelectedCount(0);
    setCurrentPage(1); // Reset to the first page
    setResetTrigger((prev) => prev + 1);
    setShowProducts(false);
  };

  const toggleSection = (section) => {
    setIsOpen((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const isSearchDisabled = Object.values(params).every((value) => value === "");

  // Handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 550) {
      setShowScrollButton(true); // Show button when scrolled down
    } else {
      setShowScrollButton(false); // Hide button when near top
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll); // Add scroll event listener
    return () => window.removeEventListener("scroll", handleScroll); // Clean up on unmount
  }, []);

  useEffect(() => {
    fetchTyres(currentPage);
  }, [params]);

  useEffect(() => {
    const handleScroll = () => {
      if (loading || displayedProducts.length >= totalItems) return; // No more items to load

      if (lastProductRef.current) {
        const lastProduct = lastProductRef.current;
        const { bottom } = lastProduct.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (bottom <= windowHeight) {
          setCurrentPage((prev) => prev + 1); // Load next page
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentPage, loading, displayedProducts.length, totalItems]);

  useEffect(() => {
    if (currentPage > 1) {
      fetchTyres(currentPage);
    }
  }, [currentPage]);

  return (
    <>
      <div className="w-[100%] bg-[#282828] p-4 shadow-md">
        <div className="max-w-[75%] mx-auto">
          <ButtonGroup
            activeButton={activeButton}
            onButtonClick={handleButtonClick}
          />
          <div className="mb-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {["width", "height", "diameter", "brand"].map((param) => (
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
              Поиск {selectedCount > 0 ? `(${selectedCount})` : ""}
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
                className="relative border hover:border-orange-600 transition duration-500 bg-white cursor-pointer flex flex-col items-center p-4"
                onClick={() => navigate(`/tire/${product.id}`)}
                ref={
                  index === displayedProducts.length - 1 ? lastProductRef : null
                }
              >
                <img
                  src={"https://sibirkoleso.ru" + product.picture}
                  className="w-40 h-52 mb-4"
                  alt={product.name}
                />
                <h4 className="font-bold text-lg mb-2">{product.brand}</h4>
                <p className="text-gray-700 mb-2">{product.name}</p>
                <p className="text-gray-700">{product.type}</p>
                <p className="text-gray-800 font-bold mb-2">
                  {product.price} ₽
                </p>
                {product.season && (
                  <p className="text-gray-700">{product.season}</p>
                )}
              </div>
            ))}
        </div>
        {loading && (
          <div className="flex justify-center items-center">
            <div className="border-8 border-gray-300 border-t-8 border-t-orange-500 rounded-full w-16 h-16 animate-spin"></div>
          </div>
        )}
      </div>

      {/* Scroll to top button */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-[67vh] right-[90vw] z-10 text-xl bg-white font-[400] p-4 rounded-full shadow-lg border hover:text-orange-600 hover:border-orange-600 transition duration-300"
        >
          <FaChevronUp size={20} className="font-normal" />
        </button>
      )}
    </>
  );
}
