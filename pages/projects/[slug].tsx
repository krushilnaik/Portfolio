import { GetStaticProps } from "next";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { fetchGraphQL } from "../../lib/api";
import { useRouter } from "next/router";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { useBackground } from "../../hooks/useBackground";
import { useEffect } from "react";

interface Tech {
  label: string;
  accentColor: string;
}

interface Project {
  title: string;
  accentColor: string;
  techStackCollection: {
    items: Tech[];
  };
  description: {
    json: any;
  };
}

interface Props {
  project: Project;
}

const ProjectPage = ({ project }: Props) => {
  const router = useRouter();
  const { setBackgroundColor } = useBackground();

  useEffect(() => {
    console.log(`Setting background color to ${project.accentColor}`);

    setBackgroundColor(project.accentColor);

    return () => {
      setBackgroundColor("darkslategray");
    };
  });

  const previewVariants: Variants = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.4,
        duration: 0.6,
      },
    },
    hidden: {
      y: -50,
      opacity: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const containerVariants: Variants = {
    visible: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: -1,
      },
    },
  };

  const techStackVariants: Variants = {
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
    hidden: {
      x: -50,
      opacity: 0,
    },
  };

  return router.isFallback ? (
    <h1>loading...</h1>
  ) : (
    <motion.div initial="hidden" animate="visible" exit="hidden">
      <div className="relative z-20 md:p-9 flex flex-wrap justify-center gap-y-9 gap-x-48">
        <figure className="flex flex-col items-center gap-6">
          <motion.img
            src=""
            variants={previewVariants}
            alt={`${project.title} screenshot`}
            key="project_demo"
            className="bg-rose-600 rounded-lg w-48 h-96 lg:w-[550px] lg:h-[300px] drop-shadow-2xl"
          />
          <figcaption className="text-center text-3xl md:text-4xl">
            {project.title}
          </figcaption>
        </figure>

        <div className="grid gap-9 md:gap-0 md:w-1/3">
          <motion.ul
            variants={containerVariants}
            className="flex flex-wrap gap-2 my-2 mx-auto justify-center md:justify-start h-fit w-80"
          >
            {project.techStackCollection.items.map(({ label, accentColor }, i) => (
              <motion.li
                variants={techStackVariants}
                key={`tech-${i}`}
                className="border-2 font-bold rounded-full px-2 w-fit h-8"
                style={{ borderColor: accentColor, backgroundColor: `${accentColor}77` }}
              >
                {label}
              </motion.li>
            ))}
          </motion.ul>
          <article className="w-96 md:w-full prose dark:prose-invert">
            {documentToReactComponents(project.description.json)}
          </article>
        </div>
      </div>

      <div className="font-mono flex gap-2 fixed bottom-4 left-3 z-50" key="bottom-nav">
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
    </motion.div>
  );
};

/**
 * Run on the server. Gets all the data for the requested project
 */
export const getStaticProps: GetStaticProps = async (ctx) => {
  const { slug } = ctx.params!;

  const { data } = await fetchGraphQL(`
    query {
      projectCollection(where: {slug: "${slug}"}, limit: 1) {
        items {
          title
          accentColor
          techStackCollection {
            items {
              label
              accentColor
            }
          }
          description {
            json
          }
        }
      }
    }
  `);

  return {
    props: {
      project: data?.projectCollection?.items?.[0],
    },
  };
};

export async function getStaticPaths() {
  const { data } = await fetchGraphQL(`
    query {
      projectCollection(preview: false) {
        items {
          title
          slug
        }
      }
    }
  `);

  return {
    paths: data?.projectCollection?.items.map(({ slug }) => `/projects/${slug}`) ?? [],
    fallback: true,
  };
}

export default ProjectPage;
