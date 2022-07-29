import Link from "next/link";
import ProjectCard from "../../components/ProjectCard";
import { fetchGraphQL } from "../../lib/api";
import { GetStaticProps } from "next";

interface Project {
  title: string;
  slug: string;
  accentColor: string;
  workInProgress: boolean;
}
interface Props {
  projects: Project[];
}

function Projects({ projects }: Props) {
  return (
    <ul className="flex gap-9 flex-wrap max-w-[1550px] m-auto justify-center">
      {projects.map((project, i) => (
        <li
          className="min-w-[360px] bg-slate-700 hover:bg-slate-600 rounded-md transition-colors cursor-pointer"
          key={`project-${i}`}
        >
          <Link href={`/projects/${project.slug}`} passHref>
            <a>
              <ProjectCard {...project} />
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await fetchGraphQL(`
    query {
      projectCollection(preview: false, order: title_ASC) {
        items {
          title
          slug
          accentColor
          workInProgress
          desktopDemoImage {
            fileName
            url
            contentType
          }
        }
      }
    }
  `);

  console.log(data?.projectCollection?.items);

  return {
    props: {
      projects: data?.projectCollection?.items,
    },
  };
};

export default Projects;
