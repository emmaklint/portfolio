import Link from "next/link";

export default function Home() {
  return (
    <section className="flex flex-col md:justify-center items-center">
      <p className="text-xl/relaxed  md:text-3xl/relaxed mb-8 max-w-prose text-center ">
        I&apos;m a developer and designer who enjoys creating user-centered
        digital experiences that combine thoughtful design with functional code.
      </p>
      <Link
        href="/work"
        className="mt-4 px-4 py-2 text-content font-semibold rounded btn bg-action"
      >
        See my work
      </Link>
    </section>
  );
}
