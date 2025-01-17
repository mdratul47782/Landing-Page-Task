import Image from "next/image";

const ClientStories = () => {
  const stories = [
    {
      title: "Boerderij De Groene Hoop",
      description:
        "De gemeente Natuurstad wilde haar stedelijke omgeving vergroenen en biodiversiteit bevorderen. Met onze hulp hebben ze parken en.....",
      image: "/client Image.png", // Replace with actual image path
    },
    {
      title: "Gemeente Natuurstad",
      description:
        "Boerderij De Groene Hoop had te kampen met afnemende oogsten door bodemerosie en extreme weersomstandigheden. Door samen.....",
      image: "/client Image.png", // Replace with actual image path
    },
    {
      title: "Stichting Groen Leven",
      description:
        "De gemeente Natuurstad wilde haar stedelijke omgeving vergroenen en biodiversiteit bevorderen. Met onze hulp hebben ze parken en verlaten.....",
      image: "/client Image.png", // Replace with actual image path
    },
  ];

  return (
    <section className="py-16 bg-white">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-green-900">Klantverhalen</h2>
      </div>

      {/* Stories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {stories.map((story, index) => (
          <div
            key={index}
            className="relative rounded-lg overflow-hidden shadow-lg"
          >
            {/* Image */}
            <Image
              src={story.image}
              alt={story.title}
              width={400}
              height={300}
              className="w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 text-white">
              <h3 className="text-lg font-bold mb-2">{story.title}</h3>
              <p className="text-sm">{story.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientStories;
