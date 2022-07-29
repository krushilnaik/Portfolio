import { Construction } from "emotion-icons/material";
import React from "react";
interface Props {
  title: string;
  workInProgress: boolean;
}

function ProjectCard(props: Props) {
  const { title, workInProgress } = props;

  return (
    <figure className="relative rounded-md z-20 flex flex-col items-center p-2 gap-2">
      {workInProgress && (
        <Construction
          size={30}
          className="absolute -top-3 -right-3 bg-amber-600 box-content p-2 rounded-full"
          title="Work in Progress"
        />
      )}
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
