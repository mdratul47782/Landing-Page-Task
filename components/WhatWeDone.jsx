import Image from 'next/image';
import React from 'react';

const WhatWeDoSection = () => {
  return (
    <section
      className="px-4 py-12"
      style={{ maxWidth: "1200px", margin: "0 auto" }} // Center and set fixed max width
    >
      <h2 className="text-green-800 font-semibold text-sm mb-2">WAT WE DOEN</h2>
      <h3 className="text-3xl font-bold text-green-900 mb-6">
        Passie voor duurzame landbouw en natuur
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-3">
        {/* Left Image */}
        <div className="flex justify-center">
          <Image
            height={400} // Fixed height
            width={400} // Fixed width
            src="/0506009a77d4feda642ca05135d9661b.png" // Replace with the actual path for the image
            alt="Tree Care"
            className="rounded-lg shadow-md"
          />
        </div>
        {/* Right Content */}
        <div>
          <p className="text-gray-700 mb-4">
            Met meer dan 15 jaar ervaring in de sector hebben we bij Jade Reforestry een hands-on aanpak ontwikkeld voor duurzame landbouw en natuurbeheer. We begrijpen de ecologische uitdagingen en bieden oplossingen die zowel de natuur als de productiviteit ten goede komen.
          </p>
          <p className="text-gray-700 mb-4">
            We helpen jou aan slimme beplantingsplannen en zorgen dat de juiste bomen op de juiste plek staan, zodat je kunt profiteren van verbeterde bodemkwaliteit, verhoogde biodiversiteit en hogere opbrengsten.
          </p>
          <button className="mt-6 px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition">
            Meer over ons &rarr;
          </button>
          {/* Bottom Image */}
          <div className="mt-8 flex justify-center">
            <Image
              height={300} // Fixed height
              width={300} // Fixed width
              src="/036db309d20fc7b8b8ea457c2cba1abc.png" // Replace with the actual path for the image
              alt="Team Working"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
