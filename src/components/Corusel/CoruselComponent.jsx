import React from "react";
import EmblaCarousel from "./EmblaCarousel";

const App = () => {
    const logos = [
        { src: "https://sibirkoleso.ru/upload/iblock/05c/s21n.gif", alt: "Barum" },
        { src: "https://sibirkoleso.ru/upload/iblock/328/s20n.gif", alt: "Tigar" },
        { src: "https://sibirkoleso.ru/upload/iblock/033/s19n.gif", alt: "Toyo Tires" },
        { src: "https://sibirkoleso.ru/upload/iblock/911/s18n.gif", alt: "Michelin" },
        { src: "https://sibirkoleso.ru/upload/iblock/599/s17n.gif", alt: "Cordiant" },
        { src: "https://sibirkoleso.ru/upload/iblock/8f8/s16n.gif", alt: "Cordiant" },
        { src: "https://sibirkoleso.ru/upload/iblock/cdb/s15n.gif", alt: "Cordiant" },
        { src: "https://sibirkoleso.ru/upload/iblock/59e/s14n.gif", alt: "Cordiant" },
        { src: "https://sibirkoleso.ru/upload/iblock/34e/s13n.gif", alt: "Cordiant" },
        { src: "https://sibirkoleso.ru/upload/iblock/33c/s12n.gif", alt: "Cordiant" },
        { src: "https://sibirkoleso.ru/upload/iblock/329/s11n.gif", alt: "Cordiant" },
        { src: "https://sibirkoleso.ru/upload/iblock/637/s10n.gif", alt: "Cordiant" },
        { src: "https://sibirkoleso.ru/upload/iblock/cbe/s9n.gif", alt: "Cordiant" },
        { src: "https://sibirkoleso.ru/upload/iblock/80d/s7n.gif", alt: "Cordiant" },
        { src: "https://sibirkoleso.ru/upload/iblock/454/s6n.gif", alt: "Cordiant" },
        { src: "https://sibirkoleso.ru/upload/iblock/5fb/s5n.gif", alt: "Cordiant" },
        { src: "https://sibirkoleso.ru/upload/iblock/19b/s4n.gif", alt: "Cordiant" },
        { src: "https://sibirkoleso.ru/upload/iblock/689/s3n.gif", alt: "Cordiant" },
        { src: "https://sibirkoleso.ru/upload/iblock/cb4/s2n.gif", alt: "Cordiant" },
    ];

    const options = {
        loop: true,
    };

    return (
        <div className="container mx-auto">
            <EmblaCarousel logos={logos} options={options} />
        </div>
    );
};

export default App;