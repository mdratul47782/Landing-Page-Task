import Image from 'next/image';

export default function ContactSection() {
  return (
    <div className="bg-neutral-100 flex flex-col md:flex-row items-center justify-center py-10 px-5">
      {/* Left Section */}
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Samen maken we het verschil
        </h2>
        <p className="text-gray-600 mb-6">
          Wij geloven dat elke stap richting een groenere toekomst telt. Neem contact met ons op om te ontdekken hoe we jou kunnen helpen te vergroenen en versterken. Samen maken we het verschil.
        </p>
        <Image
          src="/contact Image.png"
          alt="Group Discussion"
          width={600}
          height={400}
          className="rounded-lg shadow-md object-cover mx-60 md:mx-0 md:ml-10 items-center"
        />
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 bg-white p-8 shadow-lg rounded-lg mt-8 md:mt-0 md:ml-10">
        <h3 className="text-2xl font-medium text-gray-800 mb-6">
          Natuurlijk horen we graag van je. Laten we contact opnemen.
        </h3>
        <form className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Voornaam"
              className="w-full md:w-1/2 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Achternaam"
              className="w-full md:w-1/2 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="email"
              placeholder="E-mailadres"
              className="w-full md:w-1/2 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Telefoonnummer"
              className="w-full md:w-1/2 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>
          <input
            type="text"
            placeholder="Onderwerp"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
          />
          <textarea
            placeholder="Bericht"
            rows="4"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Verzenden
          </button>
        </form>
      </div>
    </div>
  );
}
