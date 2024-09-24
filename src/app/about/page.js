export default function About() {
  return (
    <>
      <section className="mb-8">
        <h2 className="text-2xl  mb-4">Who I Am</h2>
        <p className="text-lg mb-4">
          Hello! I&apos;m [Your Name], a passionate UX designer and front-end
          developer with [X] years of experience creating intuitive and engaging
          web experiences. I love solving complex problems and turning ideas
          into reality through clean, efficient code and user-centered design.
        </p>
        <p className="text-lg">
          When I&apos;m not coding or designing, you can find me [mention some
          hobbies or interests]. I believe that these diverse interests help
          fuel my creativity and bring fresh perspectives to my work.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-gray-100 p-4 rounded">
            <h3 className="font-semibold mb-2">UX Design</h3>
            <ul className="list-disc list-inside">
              <li>User Research</li>
              <li>Wireframing</li>
              <li>Prototyping</li>
              <li>Usability Testing</li>
            </ul>
          </div>
          <div className="bg-gray-100 p-4 rounded">
            <h3 className="font-semibold mb-2">Front-End Development</h3>
            <ul className="list-disc list-inside">
              <li>HTML5 & CSS3</li>
              <li>JavaScript (ES6+)</li>
              <li>React</li>
              <li>Next.js</li>
            </ul>
          </div>
          <div className="bg-gray-100 p-4 rounded">
            <h3 className="font-semibold mb-2">Tools & Technologies</h3>
            <ul className="list-disc list-inside">
              <li>Figma</li>
              <li>Adobe XD</li>
              <li>Git</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
