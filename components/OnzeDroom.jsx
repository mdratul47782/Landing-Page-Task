import Image from "next/image";
import applePicker from "../public/2d2051ef0666d0e5832bb9c3b38d73ac.png"; // Replace with your image path

const OnzeDroom = () => {
  return (
    <section
      className="bg-neutral-50 px-8 py-16 lg:px-24 lg:py-20"
      style={{ maxWidth: "1200px", margin: "0 auto" }} // Centralized layout with a max width
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-4xl font-bold text-green-800 mb-6">Onze droom</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            We streven ernaar landbouw op een slimme manier te vergroenen,
            zonder in te boeten op productie. Stel je een groene dooradering
            voor die Europa doorkruist, waar natuur en landbouw harmonieus
            samenkomen. Een plek waar een hert van Polen naar Portugal kan
            lopen, onder een weelderig bladerdak, door bossen en velden, zonder
            ooit het gevoel te hebben de veilige groene haven van de natuur te
            verlaten.
          </p>
          <ul className="space-y-4">
            {[
              "Slimme groene landbouw",
              "Een groen netwerk door heel Europa",
              "Harmonie tussen natuur en landbouw",
              "Vrij bewegende wilde dieren",
              "Een aaneengesloten weelderig bladerdak",
              "Veilige groene havens",
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-center text-green-700 font-medium"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-600 mr-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <Image
            src={applePicker} // Replace with your image import
            alt="Woman picking apples"
            className="rounded-lg shadow-md"
            width={400} // Fixed width for the image
            height={300} // Fixed height for the image
          />
        </div>
      </div>
    </section>
  );
};

export default OnzeDroom;
