import Image from "next/image";

const Navbar = () => {
  return (
    <header className="relative bg-[#f2efe6] border-b">
      {/* Navigation Menu */}
      <nav
        className="absolute inset-x-0 bg-green-900 z-10 h-14"
        style={{ top: "60%" }} // Start from the middle of the image
      >
        <ul className="container mx-auto flex space-x-6 px-4 py-2 text-white justify-end">
          <li className="hover:underline cursor-pointer">Home</li>
          <li className="hover:underline cursor-pointer">Over Ons</li>
          <li className="hover:underline cursor-pointer">Agroforestry</li>
          <li className="hover:underline cursor-pointer">De Kwekerij</li>
          <li className="hover:underline cursor-pointer">Projecten & Foto’s</li>
          <li className="hover:underline cursor-pointer">Contact</li>
        </ul>
      </nav>

      {/* Top Navbar */}
      <div
        className="relative container mx-auto flex justify-between items-center px-4 py-3 z-10"
        style={{ maxWidth: "1200px", margin: "0 auto" }}
      >
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Image
            height={250}
            width={250}
            src="/e72e6d3782262b6707712334b8111b69.png"
            alt="Jade Reforestry"
            className="h-50 w-50"
          />
        </div>

        {/* Search bar */}
        <div className="relative max-w-md w-full mx-4 flex-grow pt-1 mt-4 pb-12">
          <input
            type="text"
            placeholder="Zoeken..."
            className="w-full pl-4 pr-12 py-2  border border-gray-300 rounded-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400 "
          />
          <button
            type="submit"
            className="absolute inset-y-0 right-0 flex items-center pr-3 text-green-700 hover:text-green-800 pb-10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
              />
            </svg>
          </button>
        </div>
        {/* User Options */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <button className="text-green-700 flex items-center space-x-1 hover:text-green-800 pb-9">
              <span>Netherlands</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
          <button className="text-green-700 hover:text-green-800 pb-9">
            <Image
            src={"/image.png"}
            height={40}
            width={40}
            alt="Jade Reforestry"
            className="rounded-full"
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
