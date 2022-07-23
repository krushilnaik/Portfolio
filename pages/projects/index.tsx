import Link from "next/link";
import ProjectCard from "../../components/ProjectCard";

function Projects() {
  const projects = ["Quizvar", "Flashback", "Would You Redux"];

  return (
    <ul className="flex gap-3 flex-wrap justify-center">
      {projects.map((blob, i) => (
        <li
          className="min-w-[360px] bg-slate-700 hover:bg-slate-600 rounded-md transition-colors cursor-pointer"
          key={`project-${i}`}
        >
          <Link href={`/projects/${blob}`} passHref>
            <a>
              <ProjectCard projectName={blob} />
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Projects;
