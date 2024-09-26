import Image from "next/image";

export default function About() {
  return (
    <>
      <section className="flex flex-col items-center justify-between">
        <div className="mb-8">
          <Image
            src="/emma.jpeg"
            alt="Description of my image"
            width={200}
            height={200}
            className="rounded-full"
          />
        </div>
        <p className="text-lg md:text-xl mb-4 max-w-prose">
          I’m a UX design and front-end development consultant with a Master’s
          Degree in Media Technology and Interaction Design from KTH. For the
          past 6 years, I’ve worked in various roles, from building design
          systems and landing pages as a developer to enhancing onboarding
          experiences as a designer. In my current role, I combine my skills in
          both design and development to create seamless digital experiences
          that prioritize user needs and functionality.
        </p>
        <p className="text-lg md:text-xl mb-4 max-w-prose">
          I enjoy collaborating with teams across disciplines and working
          closely with users to gather continuous feedback, ensuring that every
          project I take on is both effective and user-centered. My approach
          blends technical problem-solving with thoughtful design, resulting in
          solutions that make a real impact.
        </p>
        <p className="text-lg md:text-xl max-w-prose">
          Outside of work, I love reading, cooking, and going on adventures with
          my family. I value accountability, curiosity, and a systematic
          approach to my work.
        </p>
      </section>
    </>
  );
}
