import { useState } from "react";
import { GiSettingsKnobs } from "react-icons/gi";
import { IoCarOutline } from "react-icons/io5";

const ButtonGroup = () => {
    const [activeButton, setActiveButton] = useState(1); // Defaultda 1-button active

    const handleButtonClick = (buttonIndex) => {
        setActiveButton(buttonIndex); // Active bo'lgan buttonni yangilash
    };

    return (
        <div className="flex gap-x-7 py-4 ">
            <button
                className={`flex gap-x-2 ${activeButton === 1 ? "text-white" : "text-[#808080]"
                    } hover:text-white duration-300`}
                onClick={() => handleButtonClick(1)} // 1-button active bo'ladi
            >
                <GiSettingsKnobs
                    color={activeButton === 1 ? "white" : "#808080"}
                    size={20}
                    className="font-bold"
                />
                <h2 className="text-sm font-normal mb-4">По параметрам</h2>
            </button>

            <button
                className={`flex gap-x-2 ${activeButton === 2 ? "text-white" : "text-[#808080]"
                    } hover:text-white duration-300`}
                onClick={() => handleButtonClick(2)} // 2-button active bo'ladi
            >
                <IoCarOutline
                    color={activeButton === 2 ? "white" : "#808080"}
                    size={20}
                    className="font-bold"
                />
                <h2 className="text-sm font-normal mb-4">По автомобилям</h2>
            </button>
        </div>
    );
};

export default ButtonGroup;
