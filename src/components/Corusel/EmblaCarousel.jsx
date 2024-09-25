import React, { useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Importing icons

const EmblaCarousel = (props) => {
    const { logos, options } = props;
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [
        Autoplay({ playOnInit: true, delay: 3000 }),
    ]);
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const scrollPrev = () => {
        if (emblaApi) emblaApi.scrollPrev();
    };

    const scrollNext = () => {
        if (emblaApi) emblaApi.scrollNext();
    };

    return (
        <>

            <div className="relative flex h-12 justify-between items-center mb-5">
                <hr className="absolute w-[121.4%] top-1/2 transform -translate-y-1/2 border border-gray-300" />
                <div className="flex gap-2 items-center z-10">
                    <button
                        className="bg-gray-50 rounded border p-3 shadow"
                        onClick={scrollPrev}
                        ref={prevRef}
                    >
                        <span className="text-gray-500">
                            <FaChevronLeft />
                        </span>
                    </button>
                    <button
                        className="bg-gray-50 rounded border p-3 shadow"
                        onClick={scrollNext}
                        ref={nextRef}
                    >
                        <span className="text-gray-500">
                            <FaChevronRight />
                        </span>
                    </button>
                </div>
            </div>
            <div className="embla__viewport cursor-pointer" ref={emblaRef}>
                <div className="embla__container flex">
                    {logos.map((logo, i) => (
                        <div className="embla__slide flex justify-center items-center p-4" key={i}>
                            <img className="h-16 object-contain opacity-50" src={logo.src} alt={logo.alt} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default EmblaCarousel;