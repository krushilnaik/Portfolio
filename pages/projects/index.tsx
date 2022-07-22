import ProjectCard from "../../components/ProjectCard";

function Projects() {
  const projects = ["Quizvar", "Flashback", "Would You Redux"];

  return (
    <ul className="flex gap-3 flex-wrap justify-center">
      {projects.map((blob, i) => (
        <li className="min-w-[360px]" key={`project-${i}`}>
          <ProjectCard projectName={blob} />
        </li>
      ))}
    </ul>
  );
}

export default Projects;
