const projects = [
  {
    id: "1",
    title: "EcoTrack: Sustainable Living App",
    description:
      "A React Native mobile app designed to help users reduce their carbon footprint through daily habit tracking and personalized eco-friendly suggestions.",
    technologies: ["React Native", "Redux", "Node.js", "MongoDB"],
  },
  {
    id: "2",
    title: "Artisanal: E-commerce Platform Redesign",
    description:
      "A complete UX overhaul and front-end implementation for an artisanal goods marketplace, focusing on improved navigation and a streamlined checkout process.",
    technologies: ["React", "Next.js", "Tailwind CSS", "Stripe API"],
  },
  {
    id: "3",
    title: "DataViz Dashboard",
    description:
      "An interactive data visualization dashboard built with React and D3.js, allowing users to explore and analyze complex datasets through intuitive charts and filters.",
    technologies: ["React", "D3.js", "Node.js", "Express", "PostgreSQL"],
  },
];

export default function Work() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div key={project.id}>
            <h2 className="text-2xl mb-2">{project.title}</h2>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="mb-4">
              <h3 className="text-lg mb-2">Technologies Used:</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <a
              href={`/work/${project.id}`}
              className="text-blue-600 hover:underline"
            >
              View Project Details
            </a>
          </div>
        ))}
      </div>
    </>
  );
}
