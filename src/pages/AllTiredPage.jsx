import { useState } from "react";
import TirePage from "./TirePage";
import DiskPage from "./WheelPage";

const TirePages = () => {
  const [activeTab, setActiveTab] = useState("tires");

  return (
    <div className="mt-5">
      <div className="">
        <div className="flex justify-center ">
          <button
            className={`text-lg font-semibold px-4 pb-3  ${
              activeTab === "tires"
                ? "border-b-2 border-black text-black"
                : "text-black"
            }`}
            onClick={() => setActiveTab("tires")}
          >
            Шины
          </button>
          <button
            className={`text-lg font-semibold px-4 pb-3  ${
              activeTab === "disks"
                ? "border-b-2 border-black text-black"
                : "text-black"
            }`}
            onClick={() => setActiveTab("disks")}
          >
            Диски
          </button>
        </div>

        <div className=" w-full">
          {activeTab === "tires" ? <TirePage /> : <DiskPage />}
        </div>
      </div>
    </div>
  );
};

export default TirePages;
