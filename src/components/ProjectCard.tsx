import { Construction } from "emotion-icons/material";
import Image from "next/image";
import React from "react";

interface Props {
  title: string;
  workInProgress: boolean;
  desktopDemoImage: {
    filename: string;
    url: string;
    contentType: string;
  };
}

function ProjectCard(props: Props) {
  const { title, workInProgress, desktopDemoImage } = props;

  return (
    <figure className="relative rounded-md z-20 flex flex-col items-center p-2 gap-2">
      {workInProgress && (
        <Construction
          size={30}
          className="absolute -top-3 -right-3 bg-amber-600 box-content p-2 rounded-full z-50"
          title="Work in Progress"
        />
      )}
      <Image
        src={desktopDemoImage?.url || "/images/image_not_found.jpg"}
        width={350}
        height={200}
        alt={`${title} screenshot`}
        className="bg-rose-600 rounded-md object-fill"
      />
      <figcaption className="text-xl text-slate-200">{title}</figcaption>
    </figure>
  );
}

export default ProjectCard;
