import Link from "next/link";
import React from "react";

interface Props {
  projectName: String;
}

function ProjectCard(props: Props) {
  const { projectName } = props;

  return (
    <Link href={`/projects/${projectName}`}>
      <figure className="relative rounded-md z-20 flex flex-col items-center p-2">
        <img
          src=""
          width={350}
          height={200}
          alt={`${projectName} screenshot`}
          className="bg-rose-600 rounded-md"
        />
        <figcaption>{projectName}</figcaption>
      </figure>
    </Link>
  );
}

export default ProjectCard;
