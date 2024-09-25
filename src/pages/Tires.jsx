import { useEffect, useState } from "react";
import Loader from "./Loader";
import TireList from "./TireList";
import TirePage from "./TirePage";

const Tires = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="tire-page w-[100%] pb-36 bg-[#f1f1f1] shadow-md">
      <TirePage />
      <div className="max-w-[85.4%] mx-auto">
        {loading ? (
          <Loader />
        ) : (
          <>
            <h1 className="text-black font-bold text-xl md:text-2xl lg:text-3xl mb-10 text-start">
              Tire Products
            </h1>
            <TireList />
          </>
        )}
      </div>
    </div>
  );
};

export default Tires;
