import Image from "next/image";

export default function About() {
  const tools = [
    "React",
    "JavaScript",
    "Figma",
    "Contentful",
    "Next",
    "Tailwind",
    "Notion",
  ];

  return (
    <>
      <section>
        <h2 className="text-2xl font-bold mb-2 md:mb-8">
          Let me introduce myself.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="col-span-2">
            <p className="mb-2 md:mb-4 font-sans text-lg">
              I hold a Master&apos;s Degree in Media Technology and Interaction
              Design from KTH Royal Institute of Technology, where I developed a
              fascination for human-computer interaction. As a design and
              front-end development consultant, I have a strong foundation in
              user-centered design and bridge the gap between design and code,
              creating intuitive, seamless user experiences. I specialize in
              crafting scalable design systems and turning creative visions into
              functional, responsive applications. My work is driven by a
              passion for both aesthetics and functionality, ensuring every
              project I tackle both looks beautiful and works flawlessly across
              all devices.
            </p>
            <p className="mb-2 md:mb-4 font-sans text-lg">
              I thrive in collaborative environments where teams work across
              disciplines to bring ideas to life. I&apos;m passionate about
              continuous feedback loops and use real-time user insights to
              refine and improve designs. I believe the best solutions emerge
              when we combine creativity and technical expertise with a deep
              understanding of end users.
            </p>
            <p className="mb-2 md:mb-4 font-sans text-lg">
              Outside of work, I enjoy spending time with my family, exploring
              new hobbies, and taking on creative projects. Whether I&apos;m
              experimenting with new tools, diving into a good book, or enjoying
              outdoor adventures, I&apos;m always seeking fresh sources of
              inspiration and nurturing my curiosity.
            </p>
          </div>
          <div className="flex flex-col md:ml-8">
            <div className="mb-8">
              <Image
                src="/emma.jpeg"
                alt="A picture of Emma Klint"
                width={400}
                height={400}
                className="rounded-xl"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 ">My toolbox</h3>
              <ul className="text-lg">
                {tools.map((tool, index) => {
                  return (
                    <li key={index} className="inline-block ">
                      <span
                        key={index}
                        className="text-sm bg-action mr-2 px-2 py-1 text-white font-medium rounded-lg"
                      >
                        {tool}
                        {/* {index !== tags.length - 1 && <span className="mx-2">•</span>} */}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
