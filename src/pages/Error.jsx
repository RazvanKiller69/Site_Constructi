import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {/* Error Image */}
      <img
        src="/pictures/Error404.png"
        alt="Error 404"
        className="w-80 h-auto mb-8"
      />

      {/* Message */}
      <h1 className="text-2xl font-bold mb-4">Oops! Page Not Found</h1>
      <p className="mb-6 text-center text-gray-600">
        The page you’re looking for doesn’t exist or has been moved.
      </p>

      {/* Button */}
      <Link
        to="/"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
      >
        Take Me Back Home
      </Link>
    </div>
  );
};

export default Error404;
