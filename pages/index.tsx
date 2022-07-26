import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import Heading from "../components/Heading";
import ProjectCard from "../components/ProjectCard";

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

  return (
    <main className="text-center p-16">
      <section
        id="about"
        className="max-w-7xl m-auto flex flex-col md:flex-row-reverse md:justify-center items-center gap-7"
      >
        <Image
          src="/images/me.jpg"
          width={220}
          height={220}
          objectFit="cover"
          alt="selfie"
          objectPosition="50% 0%"
          className="rounded-md"
        />
        <div className="flex flex-col gap-2">
          <p className="max-w-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae delectus aliquid
            fuga necessitatibus libero. Architecto nesciunt aliquid eius qui nobis.
          </p>
          <div className="flex gap-4 items-center w-fit m-auto">
            <Link href="#contact">
              <a className="bg-rose-600 hover:bg-rose-500 m-auto p-2 rounded-md text-lg">
                Get in touch
              </a>
            </Link>
            <Link href="/projects" passHref>
              <a className="text-lg hover:text-rose-400 transition-colors">
                See my projects
              </a>
            </Link>
          </div>
        </div>
      </section>
      <section id="skills">
        <Heading>Skills</Heading>
        <ul className="flex gap-3 flex-wrap justify-center">
          {skills.map((skill, i) => (
            <li
              key={`skill-${i}`}
              className="bg-slate-500/75 py-1 px-2 md:text-xl rounded-sm hover:bg-slate-500/95 transition-colors"
            >
              {skill}
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
