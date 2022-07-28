import React from "react";
interface Props {
  title: string;
}

function ProjectCard(props: Props) {
  const { title } = props;

  return (
    <figure className="relative rounded-md z-20 flex flex-col items-center p-2 gap-2">
      <img
        src=""
        width={350}
        height={200}
        alt={`${title} screenshot`}
        className="bg-rose-600 rounded-md"
      />
      <figcaption className="text-xl">{title}</figcaption>
    </figure>
  );
}

export default ProjectCard;
