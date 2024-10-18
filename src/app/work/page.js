const projects = [
  {
    id: "1",
    client: "EcoTrack",
    title: "Sustainable Living App",
    description:
      "A React Native mobile app designed to help users reduce their carbon footprint through daily habit tracking and personalized eco-friendly suggestions.",
    technologies: ["React Native", "Redux", "Node.js", "MongoDB"],
  },
  {
    id: "2",
    client: "Artisanal",
    title: "E-commerce Platform Redesign",
    description:
      "A complete UX overhaul and front-end implementation for an artisanal goods marketplace, focusing on improved navigation and a streamlined checkout process.",
    technologies: ["React", "Next.js", "Tailwind CSS", "Stripe API"],
  },
  {
    id: "3",
    client: "DataViz",
    title: "Dashboard",
    description:
      "An interactive data visualization dashboard built with React and D3.js, allowing users to explore and analyze complex datasets through intuitive charts and filters.",
    technologies: ["React", "D3.js", "Node.js", "Express", "PostgreSQL"],
  },
  {
    id: "2",
    client: "EcoTrack",
    title: "Sustainable Living App",
    description:
      "A React Native mobile app designed to help users reduce their carbon footprint through daily habit tracking and personalized eco-friendly suggestions.",
    technologies: ["React Native", "Redux", "Node.js", "MongoDB"],
  },
];

export default function Work() {
  return (
    <>
      <section className="">
        <h2 className="text-2xl font-bold mb-2 md:mb-8 font-serif">
          What I have been working on lately.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          {projects.map((project) => (
            <div key={project.id} className="flex flex-col gap-2">
              <div className="bg-amber-400 p-4 h-80 rounded-lg" />
              <span className="font-serif">{project.client}</span>
              <h2 className="text-base md:text-xl font-serif font-bold">
                {project.title}
              </h2>
              <p className="text-gray-600">{project.description}</p>
              <div className="">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="text-sm">
                    {tech}
                    {index !== project.technologies.length - 1 && (
                      <span className="mx-2">•</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
