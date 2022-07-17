import type { NextPage } from "next";
import Image from "next/image";

const Home: NextPage = () => {
  const skills = [
    "HTML5",
    "CSS3",
    "React",
    "jQuery",
    "PostgreSQL",
    "TailwindCSS",
    "TypeScript",
  ];

  return (
    <main className="text-center p-16">
      <section id="about">
        <Image
          src="/images/me.jpg"
          width={200}
          height={200}
          objectFit="cover"
          objectPosition="50% 0%"
          className="rounded-md"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae delectus aliquid
          fuga necessitatibus libero. Architecto nesciunt aliquid eius qui nobis.
        </p>
      </section>
      <section id="skills">
        <h2>Skills</h2>
        <ul className="flex gap-3 flex-wrap justify-center">
          {skills.map((skill) => (
            <li className="bg-slate-500 py-1 px-2 rounded-sm">{skill}</li>
          ))}
        </ul>
      </section>
      <section id="projects">
        <h2>Projects</h2>
      </section>
      <section id="contact">
        <h2>Contact</h2>
      </section>
    </main>
  );
};

export default Home;
