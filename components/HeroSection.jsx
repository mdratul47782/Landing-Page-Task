import React from 'react';

const HeroSection = () => {
  return (
    <div>
      

      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-[500px] " style={{ backgroundImage: "url('/backround.png')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative container mx-auto text-white px-4 py-20 text-center">
          <h1 className="text-4xl font-bold  ">Jade Reforestry</h1>
          <p className="mt-4 text-lg">Vergroening in harmonie met natuur en landbouw</p>
          <p className="mt-4 max-w-2xl mx-auto">
            Bij Jade Reforestry geloven we in een toekomst waar landbouw en natuur samen floreren. Met onze praktische groene oplossingen maken we dit werkelijkheid.
          </p>
          <button className="mt-6 px-6 py-2 bg-green-600 rounded-full hover:bg-green-700 transition">
            Doe met ons mee
          </button>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold mb-6">Praktische groene oplossingen</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src="/forest-background.png" // Replace with actual image path
              alt="Agroforestry"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Agroforestry</h3>
              <p className="text-gray-600 mb-4">
                We integreren bomen en gewassen voor een duurzamer landbouwsysteem. Dit verbetert de bodemkwaliteit, verhoogt de biodiversiteit en zorgt voor een gezondere oogst.
              </p>
              <a href="#" className="text-green-600 hover:underline">Meer over Agroforestry &rarr;</a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src="/forest-background.png" // Replace with actual image path
              alt="Kwekerij"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Kwekerij</h3>
              <p className="text-gray-600 mb-4">
                Onze kwekerij biedt een ruim assortiment aan bomen en planten, zorgvuldig geselecteerd voor gezonde groei en duurzaamheid.
              </p>
              <a href="#" className="text-green-600 hover:underline">Meer over ons Assortiment &rarr;</a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src="/forest-background.png" // Replace with actual image path
              alt="Boomverzorging"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Boomverzorging</h3>
              <p className="text-gray-600 mb-4">
                Boomverzorgers zorgen ervoor dat jouw bomen gezond en sterk blijven. Van aanplanting tot onderhoud en snoeien tot vellen.
              </p>
              <a href="#" className="text-green-600 hover:underline">Meer over Boomverzorging &rarr;</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
