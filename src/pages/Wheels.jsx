import { useEffect, useState } from "react";
import Loader from "./Loader"; // Import the Loader component
import WheelsList from "./TireList"; // Ensure this points to the correct component
import WheelPage from "./WheelPage";

const Wheels = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay (e.g., API call)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="wheels-page w-full bg-[#f1f1f1] pb-36 shadow-md">
      <WheelPage />
      <div className="max-w-[85.4%] mx-auto">
        {loading ? (
          <Loader /> // Show loader while loading
        ) : (
          <>
            <h1 className="text-black font-bold text-2xl mb-10 text-start">
              Wheels Products
            </h1>
            <WheelsList />
          </>
        )}
      </div>
    </div>
  );
};

export default Wheels;
