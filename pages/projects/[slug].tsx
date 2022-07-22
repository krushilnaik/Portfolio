import { GetServerSideProps } from "next";
import { motion, Variants } from "framer-motion";
import ProjectCard from "../../components/ProjectCard";

interface Props {
  projectName: String;
}

const ProjectPage = (props: Props) => {
  const variants: Variants = {
    open: {
      width: "100vw",
      height: "100vw",
      transition: {
        duration: 0.6,
      },
    },
    close: {
      width: 0,
      height: 0,
    },
  };

  return (
    <>
      <motion.div
        variants={variants}
        initial="close"
        animate="open"
        exit="close"
        key="project-background"
        className="absolute translate-y-1/2 origin-center -top-1/2 left-0 z-10 rounded-full bg-red-900"
      >
        h
      </motion.div>

      <ProjectCard {...props} />

      <ul className="flex flex-wrap gap-2 my-2 mx-auto justify-center w-64">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <li
            key={`tech-${i}`}
            className="bg-rose-300 border-rose-400 border-2 text-slate-600 font-bold rounded-full px-2 w-fit"
          >
            {`Tech ${i + 1}`}
          </li>
        ))}
      </ul>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam amet quidem
        enim obcaecati, sit asperiores eos nulla similique minus. Quisquam, nam? Nesciunt
        a voluptas, sequi est modi non aspernatur quod?
      </p>
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
