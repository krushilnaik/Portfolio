import { GetServerSideProps, GetStaticProps } from "next";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { fetchGraphQL } from "../../lib/api";
import { useRouter } from "next/router";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

interface Project {
  title: string;
  accentColor: string;
  techStackCollection: object;
  description: {
    json: any;
  };
}
interface Props {
  project: Project;
}

const ProjectPage = ({ project }: Props) => {
  const router = useRouter();

  const { title, accentColor, description } = project;
  // const title = "test";
  // const accentColor = "#333";

  const mobileVariants: Variants = {
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
      transition: {
        duration: 0.5,
      },
    },
  };

  const desktopVariants: Variants = {
    open: {
      width: "70vw",
      transition: {
        duration: 0.6,
      },
    },
    close: {
      width: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const DesktopBackground = () => (
    <div className="hidden md:block absolute top-0 left-0 max-w-[100%] overflow-hidden">
      <motion.div
        variants={desktopVariants}
        style={{
          clipPath: "polygon(0 0, 80% 0%, 55% 100%, 0% 100%)",
          backgroundColor: accentColor,
        }}
        initial="close"
        animate="open"
        exit="close"
        key="project_desktop_background"
        className="bg-red-900 h-screen"
      ></motion.div>
    </div>
  );

  const MobileBackground = () => (
    <div className="absolute md:hidden top-0 left-0 w-screen h-screen max-w-[100%] overflow-hidden z-10">
      <motion.div
        variants={mobileVariants}
        initial="close"
        animate="open"
        exit="close"
        key="project_mobile_background"
        className="absolute -top-[40vw] left-1/2 -translate-x-1/2 z-10 rounded-full bg-red-900"
        style={{ backgroundColor: accentColor }}
      ></motion.div>
    </div>
  );

  return router.isFallback ? (
    <h1>loading...</h1>
  ) : (
    <>
      {/* Render the background based on screen size */}
      <DesktopBackground />
      <MobileBackground />

      <div className="relative z-20 md:p-9 flex flex-wrap justify-center gap-y-9 gap-x-48">
        <figure className="flex flex-col items-center gap-6">
          <img
            src=""
            alt={`${title} screenshot`}
            className="bg-rose-600 rounded-md w-44 h-80 lg:w-[550px] lg:h-[300px]"
          />
          <figcaption className="text-center text-3xl md:text-4xl">{title}</figcaption>
        </figure>

        <div className="grid gap-9">
          <ul className="flex flex-wrap gap-2 my-2 mx-auto justify-center md:justify-start h-fit w-80">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <li
                key={`tech-${i}`}
                className="bg-rose-300 border-rose-400 border-2 text-slate-600 font-bold rounded-full px-2 w-fit h-8"
              >
                {`Tech ${i + 1}`}
              </li>
            ))}
          </ul>
          <article>{documentToReactComponents(description.json)}</article>
        </div>
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

  console.log(data.projectCollection.items[0]);

  return {
    props: {
      project: data.projectCollection.items[0],
    },
  };
};

export async function getStaticPaths() {
  const data = await fetchGraphQL(`
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
    paths: data.projectCollection.map(({ items }) => `/posts/${items.slug}`) ?? [],
    fallback: true,
  };
}

export default ProjectPage;
