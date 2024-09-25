import { useState } from "react";
import TireMahsulotlari from "./TireProduct";
import { tires } from "../utils"; // tires arrayini import qilish
import { BiMenuAltRight } from "react-icons/bi";

const TireList = () => {
  const [sortCriteria, setSortCriteria] = useState("");
  const [sortedTires, setSortedTires] = useState(tires);
  const [loading, setLoading] = useState(false);

  // Narxni stringdan son formatiga o'zgartirish funksiyasi
  const formatPrice = (price) => {
    return Number(price.replace(/\s/g, "").replace("₽", ""));
  };

  // Saralash funksiyasi
  const handleSort = (criteria) => {
    setSortCriteria(criteria);
    setLoading(true);

    setTimeout(() => {
      const sortedArray = [...tires];

      if (criteria === "high-to-low") {
        // Eng qimmatdan eng arzonga qarab saralash
        sortedArray.sort((a, b) => formatPrice(b.price) - formatPrice(a.price));
      } else if (criteria === "low-to-high") {
        // Eng arzondan eng qimmatga qarab saralash
        sortedArray.sort((a, b) => formatPrice(a.price) - formatPrice(b.price));
      }

      setSortedTires(sortedArray);
      setLoading(false);
    }, 1000);
  };

  return (
    <div>
      <div className="flex gap-x-8 mb-4">
        <h3 className="text-[13px] text-gray-500 font-light">
          Сортировать по:
        </h3>
        <button
          className={`flex gap-x-2 text-sm transition duration-500 ${
            sortCriteria === "high-to-low"
              ? "text-black"
              : "text-gray-500 hover:text-orange-600"
          }`}
          onClick={() => handleSort("high-to-low")}
        >
          <BiMenuAltRight size={16} className="mt-[1px]" />
          Наличию
        </button>
        <button
          className={`flex gap-x-2 text-sm transition duration-500 ${
            sortCriteria === "low-to-high"
              ? "text-black"
              : "text-gray-500 hover:text-orange-600"
          }`}
          onClick={() => handleSort("low-to-high")}
        >
          Цене
        </button>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-40">
          <div className="loader border-t-4 border-orange-500 rounded-full w-8 h-8 animate-spin"></div>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
          {sortedTires.map((tire) => (
            <TireMahsulotlari
              key={tire.id}
              id={tire.id}
              name={tire.name}
              model={tire.model}
              size={tire.size}
              price={tire.price}
              originalPrice={tire.originalPrice}
              imageUrl={tire.imageUrl} // Rasm URL'sini qo'shing
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TireList;
