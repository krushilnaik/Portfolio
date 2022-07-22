import type { NextPage } from "next";
import Image from "next/image";
import Heading from "../components/Heading";

const Home: NextPage = () => {
  const skills = [
    "HTML5",
    "CSS3",
    "React",
    "jQuery",
    "PostgreSQL",
    "TailwindCSS",
    "TypeScript",
    "Java",
    "Python",
  ];

  const projects = ["Quizvar", "Flashback", "Would You Redux"];

  return (
    <main className="text-center p-16">
      <section
        id="about"
        className="max-w-7xl m-auto flex flex-col lg:flex-row-reverse items-center gap-7"
      >
        <Image
          src="/images/me.jpg"
          width={220}
          height={220}
          objectFit="cover"
          objectPosition="50% 0%"
          className="rounded-md"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae delectus aliquid
          fuga necessitatibus libero. Architecto nesciunt aliquid eius qui nobis.
        </p>

        <div className="flex gap-4 items-center">
          <Link href="#contact">
            <a className="bg-rose-600 hover:bg-rose-500 w-fit m-auto p-2 rounded-md text-lg">
              Get in touch
            </a>
          </Link>
          <Link href="/projects" passHref>
            <a className="text-lg">See my projects</a>
          </Link>
        </div>
      </section>
      <section id="skills">
        <Heading>Skills</Heading>
        <ul className="flex gap-3 flex-wrap justify-center">
          {skills.map((skill, i) => (
            <li
              key={`skill-${i}`}
              className="bg-slate-500 py-1 px-2 md:text-xl rounded-sm hover:bg-slate-400 transition-colors"
            >
              {skill}
            </li>
          ))}
        </ul>
      </section>
      <section id="projects">
        <Heading>Projects</Heading>
        <ul className="flex gap-3 flex-wrap justify-center">
          {projects.map((blob, i) => (
            <li className="min-w-[360px]" key={`project-${i}`}>
              <figure className="bg-slate-700 rounded-md flex flex-col items-center p-2">
                <img
                  src=""
                  width={350}
                  height={200}
                  alt={`${blob} screenshot`}
                  className="bg-rose-600 rounded-md"
                />
                <figcaption>{blob}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </section>
      <section id="contact">
        <Heading>Contact</Heading>
        <form action="" className="flex flex-col gap-4 max-w-xl m-auto">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email:"
            className="p-2 bg-transparent border-[1px] rounded-md"
          />
          <textarea
            name="message"
            id="message"
            cols={30}
            rows={10}
            placeholder="Message:"
            className="p-2 bg-transparent resize-none border-[1px] rounded-md"
          ></textarea>
          <button
            type="submit"
            className="bg-rose-600 hover:bg-rose-500 w-fit m-auto p-2 rounded-md"
          >
            Get in touch
          </button>
        </form>
      </section>
    </main>
  );
};

export default Home;
