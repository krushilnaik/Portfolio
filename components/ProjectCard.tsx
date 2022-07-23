import React from "react";
interface Props {
  projectName: string;
}

function ProjectCard(props: Props) {
  const { projectName } = props;

  return (
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
  );
}

export default ProjectCard;
