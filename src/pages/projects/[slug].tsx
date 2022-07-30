import { GetStaticProps } from "next";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { useEffect } from "react";
import { ArrowBack, Home } from "emotion-icons/boxicons-regular";
import { FolderSymlinkFill } from "emotion-icons/bootstrap";
import { Web } from "emotion-icons/material";
import Image from "next/image";
import { useBackground } from "@/hooks/useBackground";
import { fetchGraphQL } from "@/lib/api";
import { renderOptions } from "@/util/contentful";
import FooterButton from "@/components/FooterButton";
import Head from "next/head";

interface Tech {
  label: string;
  accentColor: string;
}

interface Project {
  title: string;
  accentColor: string;
  gitHubRepo: string;
  deployedLink: string | null;
  desktopDemoImage: {
    filename: string;
    url: string;
    contentType;
  };
  techStackCollection: {
    items: Tech[];
  };
  description: {
    json: any;
    links: any;
  };
}

interface Props {
  project: Project;
}

const ProjectPage = ({ project }: Props) => {
  const router = useRouter();
  const { setBackgroundColor } = useBackground();

  useEffect(() => {
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
    <>
      <Head>
        <title>Krushil | Projects | {project.title}</title>
      </Head>
      <motion.main
        initial="hidden"
        animate="visible"
        exit="hidden"
        className="w-screen min-h-screen grid place-content-center"
      >
        <div className="relative z-20 md:p-9 flex flex-wrap justify-center gap-y-9 gap-x-48">
          <div className="flex flex-col md:m-0">
            <figure className="flex flex-col mt-10 items-center gap-6">
              <motion.div
                variants={previewVariants}
                key="project_demo"
                className="relative flex flex-col gap-6 items-center"
              >
                {/* "Computer" frame and base */}
                <div className="bg-slate-600 dark:bg-slate-200 rounded-lg w-80 lg:w-[550px] grid place-content-center aspect-video p-2">
                  {/* Computer "screen" */}
                  <Image
                    src={project.desktopDemoImage?.url || "/images/image_not_found.jpg"}
                    layout="intrinsic"
                    width={550}
                    height={310}
                    alt={`${project.title} screenshot`}
                    className="bg-rose-600 rounded-lg drop-shadow-2xl"
                  />
                </div>
                <div className="bg-slate-600 dark:bg-slate-200 w-40 h-3 rounded-lg before:bg-inherit before:w-28 before:h-7 before:absolute before:bottom-2 before:left-1/2 before:-translate-x-1/2"></div>
              </motion.div>
              <figcaption className="text-center text-3xl md:text-4xl font-medium">
                {project.title}
              </figcaption>
            </figure>
            <div className="flex gap-9 justify-center rounded-full border-2 border-slate-600/20 dark:border-white/10 p-1 px-5 m-auto w-fit">
              <Link href={project.gitHubRepo} passHref>
                <a className="hover:text-rose-400 transition-colors cursor-pointer">
                  <FolderSymlinkFill size={40} />
                </a>
              </Link>
              <Link href={project.deployedLink || ""} passHref>
                <a className="hover:text-rose-400 transition-colors cursor-pointer">
                  <Web size={40} />
                </a>
              </Link>
            </div>
          </div>

          <div className="grid gap-9 md:gap-0">
            <motion.ul
              variants={containerVariants}
              className="flex flex-wrap gap-2 my-2 mx-auto justify-center md:justify-start h-fit w-80"
            >
              {project.techStackCollection.items.map(({ label, accentColor }, i) => (
                <motion.li
                  variants={techStackVariants}
                  key={`tech-${i}`}
                  className="border-2 font-bold rounded-full px-2 w-fit h-8"
                  style={{
                    borderColor: accentColor,
                    backgroundColor: `${accentColor}77`,
                  }}
                >
                  {label}
                </motion.li>
              ))}
            </motion.ul>
            <article className="w-96 md:w-full prose dark:prose-invert">
              {documentToReactComponents(
                project.description.json,
                renderOptions(project.description.links)
              )}
            </article>
          </div>
        </div>

        <div className="font-mono flex gap-2 fixed bottom-4 left-3 z-50" key="bottom-nav">
          <FooterButton href="/projects">
            <ArrowBack size={25} />
          </FooterButton>
          <FooterButton href="/">
            <Home size={25} />
          </FooterButton>
        </div>
      </motion.main>
    </>
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
          gitHubRepo
          deployedLink
          desktopDemoImage {
            fileName
            url
            contentType
          }
          techStackCollection {
            items {
              label
              accentColor
            }
          }
          description {
            json
            links {
              entries {
                inline {
                  sys {
                    id
                  }
                  __typename
                  ... on Project {
                    title
                    slug
                  }
                }
                block {
                  sys {
                    id
                  }
                  __typename
                  ... on Project {
                    title
                    slug
                  }
                  ... on BlogPost {
                    title
                    slug
                  }
                }
              }
              assets {
                block {
                  sys {
                    id
                  }
                  url
                  title
                  width
                  height
                  description
                }
              }
            }
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
