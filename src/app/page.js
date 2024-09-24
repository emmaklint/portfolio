import Link from "next/link";

const projects = [
  {
    id: "1",
    title: "EcoTrack: Sustainable Living App",
    description:
      "A React Native mobile app designed to help users reduce their carbon footprint through daily habit tracking and personalized eco-friendly suggestions.",
  },
  {
    id: "2",
    title: "Artisanal: E-commerce Platform Redesign",
    description:
      "A complete UX overhaul and front-end implementation for an artisanal goods marketplace, focusing on improved navigation and a streamlined checkout process.",
  },
  {
    id: "3",
    title: "DataViz Dashboard",
    description:
      "An interactive data visualization dashboard built with React and D3.js, allowing users to explore and analyze complex datasets through intuitive charts and filters.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="flex items-center justify-center flex-col max-w-prose">
        <p className="text-2xl mb-8">
          I’m a developer and designer who enjoys creating user-centered digital
          experiences that combine thoughtful design with functional code.
        </p>
        <p>
          With experience in both UX design and front-end development, I
          collaborate closely with other designers and developers to bring
          projects to life. I value accountability, curiosity, and a systematic
          approach to solving problems, always aiming to create solutions that
          improve people’s everyday lives
        </p>
      </section>
    </div>
  );
}
