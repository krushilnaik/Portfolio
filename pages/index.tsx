import type { NextPage } from "next";
import Image from "next/image";

const Home: NextPage = () => {
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
      <section id="skills">Skills</section>
      <section id="projects">Projects</section>
      <section id="contact">Contact</section>
    </main>
  );
};

export default Home;
