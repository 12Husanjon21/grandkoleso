import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "./CartProvider";

const SingleCartPage = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const [tire, setTire] = useState(null);
  const [error, setError] = useState("");
  const [isAdded, setIsAdded] = useState(false); // Yangi holat

  useEffect(() => {
    const fetchTire = async () => {
      try {
        const response = await axios.get(
          `http://195.26.240.163:4000/api/tyres/${id}`
        );
        if (response.data.status === "success") {
          setTire(response.data.data);
        }
      } catch (error) {
        setError("Tire not found");
      }
    };

    fetchTire();
  }, [id]);

  const handleAddToCart = () => {
    addToCart(tire);
    setIsAdded(true); // Tugma bosilganda holatni yangilash
  };

  if (error) {
    return <p className="min-h-screen text-center mt-52 text-3xl">{error}</p>;
  }

  if (!tire) {
    return (
      <p className="min-h-screen text-center mt-52 text-3xl">Loading...</p>
    );
  }

  return (
    <main className="container min-h-[90vh] mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">
        {tire.name} - {tire.type}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex justify-center">
          <img
            src={"https://sibirkoleso.ru" + tire.picture}
            alt={tire.name}
            className="w-full max-w-md object-cover"
          />
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <h2 className="mt-4 text-4xl font-bold text-gray-900">
              {tire.name}
            </h2>
            <p className="mt-1 text-3xl font-medium">{tire.type}</p>
            <p className="mt-8">{`${tire.width} / ${tire.height} / ${tire.diametr}`}</p>
            <p className="mt-24 text-3xl font-bold flex flex-col text-black">
              <span className="text-black text-xs font-light">
                Цена (при заказе на сайте):
              </span>
              {tire.price} Rubl
            </p>
          </div>

          <button
            className={`mb-40 px-6 py-3 text-sm max-w-44 bg-[#FF5601] text-white rounded hover:bg-[#e04f00] transition duration-300 ${
              isAdded ? "bg-gray-500 cursor-default hover:bg-gray-500" : ""
            }`} // Tugmani o'chirish
            onClick={isAdded ? null : handleAddToCart} // Tugma bosilishi shart
            disabled={isAdded} // Tugma holatini o'zgartirish
          >
            {isAdded ? "Уже в корзине" : "Добавить в корзину"}{" "}
            {/* Tugma matni o'zgartiriladi */}
          </button>
        </div>
      </div>
    </main>
  );
};

export default SingleCartPage;
