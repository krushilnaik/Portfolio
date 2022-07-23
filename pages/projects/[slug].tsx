import { GetServerSideProps } from "next";
import { motion, Variants } from "framer-motion";
import ProjectCard from "../../components/ProjectCard";
import Link from "next/link";

interface Props {
  projectName: String;
}

const ProjectPage = (props: Props) => {
  const variants: Variants = {
    open: {
      width: "120vw",
      height: "120vw",
      transition: {
        duration: 0.6,
      },
    },
    close: {
      width: 0,
      height: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <>
      <div className="absolute top-0 left-0 w-screen h-screen max-w-[100vw] overflow-hidden z-10">
        <motion.div
          variants={variants}
          initial="close"
          animate="open"
          exit="close"
          key="project-background"
          className="absolute -top-[40vw] left-1/2 -translate-x-1/2 origin-center z-10 rounded-full bg-red-900"
        ></motion.div>
      </div>

      <div className="relative z-20 p-3 flex flex-col gap-9">
        <ProjectCard {...props} />
        <ul className="flex flex-wrap gap-2 my-2 mx-auto justify-center w-80">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <li
              key={`tech-${i}`}
              className="bg-rose-300 border-rose-400 border-2 text-slate-600 font-bold rounded-full px-2 w-fit"
            >
              {`Tech ${i + 1}`}
            </li>
          ))}
        </ul>
        <p className="max-w-md m-auto text-center text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam amet quidem
          enim obcaecati, sit asperiores eos nulla similique minus. Quisquam, nam?
          Nesciunt a voluptas, sequi est modi non aspernatur quod?
        </p>
      </div>

      <div
        className="font-mono flex gap-2 absolute bottom-4 left-3 z-50"
        key="bottom-nav"
      >
        <Link href="/projects" passHref>
          <a className="text-4xl bg-gray-50/5 hover:bg-gray-50/20 grid place-content-center rounded-full w-14 h-14">
            &larr;
          </a>
        </Link>
        <Link href="/" passHref>
          <a className="bg-gray-50/5 hover:bg-gray-50/20 grid place-content-center rounded-full w-14 h-14">
            home
          </a>
        </Link>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { params } = ctx;

  return {
    props: {
      projectName: params?.slug ?? "random",
    },
  };
};

export default ProjectPage;
