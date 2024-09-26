import { notFound } from "next/navigation";
import Link from "next/link";

const projects = [
  {
    id: "1",
    title: "EcoTrack: Sustainable Living App",
    description:
      "A React Native mobile app designed to help users reduce their carbon footprint through daily habit tracking and personalized eco-friendly suggestions.",
    fullDescription:
      "EcoTrack is a comprehensive mobile application built with React Native, aimed at promoting sustainable living. The app features daily challenges, a carbon footprint calculator, and personalized recommendations for eco-friendly lifestyle changes. Key features include:\n\n- Intuitive UI design with gamification elements to encourage regular use\n- Integration with device sensors to automatically track travel methods and energy usage\n- Machine learning algorithm to provide tailored sustainability tips\n- Social sharing features to build a community of environmentally conscious users",
  },
  {
    id: "2",
    title: "Artisanal: E-commerce Platform Redesign",
    description:
      "A complete UX overhaul and front-end implementation for an artisanal goods marketplace, focusing on improved navigation and a streamlined checkout process.",
    fullDescription:
      "The Artisanal project involved a comprehensive redesign of an existing e-commerce platform specializing in handcrafted goods. The primary goals were to enhance user experience, increase conversion rates, and showcase products more effectively. Key improvements include:\n\n- Responsive design implementation using React and Tailwind CSS\n- User research and persona development to inform design decisions\n- A/B testing of new navigation patterns and product page layouts\n- Implementation of a one-page checkout process, reducing cart abandonment by 25%\n- Integration of a custom product customization tool for bespoke items",
  },
  {
    id: "3",
    title: "DataViz Dashboard",
    description:
      "An interactive data visualization dashboard built with React and D3.js, allowing users to explore and analyze complex datasets through intuitive charts and filters.",
    fullDescription:
      "The DataViz Dashboard is a powerful web application designed to make complex data accessible and actionable for non-technical users. Built with React for the UI and D3.js for visualizations, this project showcases the intersection of data science and user-centric design. Features include:\n\n- Real-time data updates and animations\n- Customizable dashboard layouts to suit different user needs\n- Advanced filtering and search capabilities\n- Responsive design for desktop and tablet use\n- Export functionality for reports and individual visualizations\n- User testing and iterative design process to optimize chart readability and interaction patterns",
  },
];

export default function ProjectPage({ params }) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <div>
      <Link href="/" className="text-amber-700 hover:underline mb-4 block">
        &larr; Back to Home
      </Link>
      <h1 className="text-2xl font-bold mb-4 font-serif">{project.title}</h1>
      <p className="text-xl mb-8">{project.description}</p>
      <div className="whitespace-pre-line">{project.fullDescription}</div>
    </div>
  );
}
