import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const Card = ({ title, content, images = [], completionDate }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  // Filter to show only important images
  const importantImages = images.filter((image) => image.important);

  const handleLearnMore = () => {
    navigate(`/projects/${title}`, { state: { images, content, title } });
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex + 1) % importantImages.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex - 1 + importantImages.length) % importantImages.length
    );
  };

  // Format the date to day-month-year
  const formatDate = (dateString) => {
    const options = { day: "2-digit", month: "2-digit", year: "numeric" };
    return new Date(dateString).toLocaleDateString("ro-RO", options);
  };

  return (
    <div className="bg-gradient-to-b from-cyan-500 to-blue-900 p-4 rounded-lg shadow-lg text-center">
      <div className="relative">
        {importantImages.length > 0 ? (
          <>
            <img
              src={importantImages[currentImageIndex].url}
              alt={`${title} Image ${currentImageIndex + 1}`}
              className="rounded-t-lg w-full h-48 object-cover"
            />
            <button
              onClick={prevImage}
              className="absolute top-1/2 left-4 transform  bg-gray-800 text-white px-2 py-1 rounded"
            >
              {"<"}
            </button>
            <button
              onClick={nextImage}
              className="absolute top-1/2 right-4 transform  bg-gray-800 text-white px-2 py-1 rounded"
            >
              {">"}
            </button>
          </>
        ) : (
          <p className="text-gray-400">No important images available</p>
        )}
      </div>
      <h2 className="text-xl font-bold text-white mt-4">{title}</h2>
      <p className="text-gray-200 mt-2 h-24">{content}</p>
      <p className="text-sm text-gray-300 mt-4">
        Data Finalizării: {formatDate(completionDate)}
      </p>
      <button
        className="mt-4 bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded"
        onClick={handleLearnMore}
      >
        Learn more
      </button>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      important: PropTypes.bool, // Indicate if the image is important
    })
  ).isRequired,
  completionDate: PropTypes.string.isRequired,
};

export default Card;
