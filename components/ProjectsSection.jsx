import Image from "next/image";
import Link from "next/link";

const ProjectsSection = () => {
  const projects = [
    {
      location: "Veluwe, Nederland",
      title: "Herbebossing Veluwe",
      description:
        "Dit project richt zich op het herstellen van gedegradeerde bossen in de Veluwe.....",
      stats: [
        "2.000.000 bomen geplant",
        "10 bedreigde diersoorten beschermd",
        "150 lokale banen gecreëerd",
      ],
      image: "/f0784e5c7c8fb85fae236d4c7052d846.png", // Replace with the actual image path
    },
    {
      location: "Groningen, Nederland",
      title: "Groen Groningen",
      description:
        "Dit project werkt aan het herstellen van gedegradeerde gronden in de provincie.....",
      stats: [
        "1.500.000 bomen geplant",
        "3.000 hectare onder herstel",
        "20 gemeenschappen betrokken",
      ],
      image: "/f0784e5c7c8fb85fae236d4c7052d846.png", // Replace with the actual image path
    },
    {
      location: "Rotterdam, Nederland",
      title: "Stadsbos Rotterdam",
      description:
        "Dit project focust op het vergroenen van stedelijke gebieden in Rotterdam door het.....",
      stats: [
        "500.000 bomen geplant",
        "1.000 hectare onder herstel",
        "50.000 inwoners direct gebaat",
      ],
      image: "/f0784e5c7c8fb85fae236d4c7052d846.png", // Replace with the actual image path
    },
  ];

  return (
    <section
      className="bg-neutral-50 py-16"
      style={{ maxWidth: "1200px", margin: "0 auto" }}
    >
      {/* Header */}
      <div className="text-center mb-12" style={{ maxWidth: "800px", margin: "0 auto" }}>
        <h2 className="text-4xl font-bold text-green-800 mb-6">
          Samen werken aan een groenere wereld: bekijk onze projecten
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Bossen zijn een van de meest effectieve oplossingen om de effecten van
          klimaatverandering aan te pakken. Ze zijn ook een krachtige kracht om
          mensen uit de armoede te halen, biodiversiteit te behouden en
          verwoestijning terug te dringen.
        </p>
      </div>

      {/* Secondary Text */}
      <div
        className="bg-green-100 p-6 rounded-lg text-gray-700 mb-12"
        style={{ maxWidth: "1000px", margin: "0 auto" }}
      >
        <p className="text-center">
          In plaats van alleen meer bomen te planten, werken we aan het
          herstellen van landschappen en het beschermen ervan tegen ontbossing
          op de lange termijn.
        </p>
      </div>

      {/* Projects Grid */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        style={{ maxWidth: "1200px", margin: "0 auto" }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
            style={{ height: "100%" }}
          >
            <Image
              src={project.image} // Replace with actual image paths
              alt={project.title}
              width={400}
              height={250}
              className="rounded-t-lg"
            />
            <div className="p-6">
              <p className="text-sm text-green-700 mb-2">{project.location}</p>
              <h3 className="text-xl font-semibold text-green-800 mb-4">
                {project.title}
              </h3>
              <p className="text-gray-700 text-sm mb-4">{project.description}</p>
              <ul className="space-y-2 mb-4">
                {project.stats.map((stat, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-600 mr-2"
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
                    {stat}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Call-to-Action Button */}
      <div className="text-center mt-12">
        <Link href="/projects">
          <p className="bg-green-800 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-700 transition duration-300 inline-block">
            Bekijk onze projecten
          </p>
        </Link>
      </div>
    </section>
  );
};

export default ProjectsSection;
