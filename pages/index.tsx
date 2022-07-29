import type { NextPage, GetServerSideProps } from "next";
import Image from "next/image";
import Link from "next/link";
import Heading from "../components/Heading";
import InputField from "../components/InputField";
import { fetchGraphQL } from "../lib/api";

interface Props {
  skills: string[];
}

const Home: NextPage<Props> = ({ skills }) => {
  return (
    <main className="text-center p-16">
      <section
        id="about"
        className="max-w-7xl m-auto flex flex-col md:flex-row-reverse md:justify-center md:h-screen items-center gap-7"
      >
        <Image
          src="/images/transparent_me.png"
          width={300}
          height={300}
          objectFit="cover"
          alt="selfie"
          objectPosition="50% 0%"
          className="rounded-md"
        />
        <div className="flex flex-col gap-9">
          <div className="prose dark:prose-invert">
            <h2>About me:</h2>
            <ul className="text-left">
              <li>Hardworking</li>
              <li>Organized</li>
              <li>Avid learner</li>
              <li>Can work in groups or go it Han Solo</li>
              <li>Constantly improving</li>
              <li>Always needs a plan</li>
            </ul>
            <h2>What I love:</h2>
            <ul className="list-disc text-left">
              <li>Animal GIFs</li>
              <li>Taco Bell</li>
              <li>Spicy foods (within reason)</li>
            </ul>
          </div>
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
          <li
            key="skill-more"
            className="bg-slate-500/75 py-1 px-2 md:text-xl rounded-sm hover:bg-slate-500/95 transition-colors"
          >
            ...and more!
          </li>
        </ul>
      </section>

      <section id="contact">
        <Heading>Contact</Heading>
        <form action="" className="flex flex-col gap-4 max-w-xl m-auto">
          {/* <input
            type="email"
            name="email"
            id="email"
            className="input"
            data-placeholder="Email:"
          /> */}
          <InputField element="input" type="email" placeholder="Email:" />
          <InputField element="textarea" type="text" placeholder="Message:" />

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

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { data } = await fetchGraphQL(`
    query {
      techCollection(limit: 8) {
        items {
          label
        }
      }
    }
  `);

  return {
    props: {
      skills: data?.techCollection?.items?.map((item) => item.label) || [],
    },
  };
};

export default Home;
