import { useState } from "react";
import { useLocation,  } from "react-router-dom";

const Carousel = () => {
 
  const location = useLocation();

  const { images = [], content = "", title = "" } = location.state || {};

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="flex flex-col items-center">
      {/* Title */}
      <h1 className="text-3xl font-bold text-center my-4">{title}</h1>

      {/* Image Carousel */}
      <div className="relative w-full ">
        {images.length > 0 ? (
          <div className="relative">
            <img
              src={images[currentImageIndex].url}
              alt={`${title} Image ${currentImageIndex + 1}`}
              className="w-full max-h-[60vh] object-cover rounded-md"
            />
            <button
              onClick={prevImage}
              className="absolute top-1/2 left-4 transform bg-gray-800 text-white px-2 py-1 rounded"
            >
              {"<"}
            </button>
            <button
              onClick={nextImage}
              className="absolute top-1/2 right-4 transform bg-gray-800 text-white px-2 py-1 rounded"
            >
              {">"}
            </button>
          </div>
        ) : (
          <p className="text-gray-400 text-center">No images available</p>
        )}
      </div>

      {/* Descriere */}
      <p className="max-w-4xl text-center my-6 text-white-700">{content}</p>

    
      
    </div>
  );
};

export default Carousel;
