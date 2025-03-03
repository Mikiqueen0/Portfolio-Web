'use client';

import { useState, useEffect } from 'react';
import { TextReveal, ToolDisplay, ProjectPopup } from '@/component/index';
import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);

  useEffect(() => {
    if (isPopupOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () =>  {
      document.body.style.overflow = "auto";
    }
  }, [isPopupOpen])

  return (
    <div className="h-full w-full">
      <button onClick={() =>  {setIsPopupOpen(true)}} className="w-full h-full hover:scale-101 transition-all duration-300 text-start hover:cursor-pointer">
        <TextReveal duration={500}>
        <div className="rounded-xl w-full max-md:w-full h-full py-7 px-7 max-sm:px-6 flex flex-1 flex-col shadow-[0px_3px_9px_0px_rgba(1,_2,_28,_0.8)] bg-[rgba(2,_3,_41,_0.4)] hover:shadow-[0px_3px_14px_5px_rgba(1,_2,_28,_0.8)] hover:bg-[rgba(2,_3,_41,_0.2)] transition-all duration-300">
          {/* Project Name */}
          <div className="h-50 w-full overflow-hidden rounded-xl bg-black/45">
            <img src={project.image} alt="image" className="w-full h-full object-contain rounded-xl" />
          </div>
          <div className="w-full flex gap-2 items-center mt-4 mb-1">
            <p className="font-semibold text-lg xl:text-xl text-nowrap">
              {project.title}
            </p>
            <p className="w-full text-sm xl:text-base font-medium text-slate-400">
              ({project.year})
            </p>
            <a onClick={(e) => {e.stopPropagation()}} className="self-center place-items-end" href={project.githubLink} target="_blank">
              <svg className="text-slate-200 opacity-60 hover:opacity-100 transition-all duration-200" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
          <div className="h-fit w-full flex flex-col gap-4">
            {/* Project Details */}
            <div className="h-full flex flex-col justify-between gap-2">
              <p className="font-normal text-sm xl:text-base italic text-slate-400 opacity-100">
                {project.subject}
              </p>
              <p className="h-full text-slate-200 text-sm xl:text-base font-light leading-6">
                {project.shortDes}
              </p>
              {/* Project Stack */}
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <ToolDisplay key={tool} name={tool}/>
                ))}
              </div>
            </div>
          </div>
        </div>
        </TextReveal>
      </button>
      <ProjectPopup isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen} project={project}/>
    </div>
  )
};