'use client';

import { useRef, useEffect, useState } from 'react';
import { ToolDisplay } from '@/component/index';
import { Project } from '@/types';

interface ProjectPopupProps {
  isPopupOpen: boolean;
  setIsPopupOpen: React.Dispatch<React.SetStateAction<boolean>>;
  project: Project;
}

export default function ProjectPopup({ isPopupOpen, setIsPopupOpen, project }: ProjectPopupProps) {

  const cardRef = useRef<HTMLDivElement | null>(null);
  const topDiv = useRef<HTMLDivElement | null>(null);
  
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(e.target as Node)) {
        setIsPopupOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [])

  useEffect(() => {
    if (topDiv.current) {
      topDiv.current.scrollTop = 0;
    }
  }, [isPopupOpen])
  
  return (
    <div ref={topDiv} className={`fixed top-0 left-0 w-full h-full py-10 backdrop-blur-md bg-black/20 z-60 flex justify-center overflow-y-scroll ${isPopupOpen ? "translate-y-0" : "translate-y-full"}`}>
      <button onClick={() => {setIsPopupOpen(false)}} className="absolute w-fit h-fit justify-items-end top-2 right-3">
        <svg className="size-8" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
          <path fill="currentColor" d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z"></path>
        </svg>
      </button>
      <div
        ref={cardRef}
        className={`relative max-md:w-[90vw] h-fit md:w-[45rem] rounded-2xl flex bg-[#1e1e46] z-100 ${
          isPopupOpen
            ? "animate-bounceUp"
            : ""
        } transform origin-bottom transition-all duration-400 ease-out`}
      >
        {/* Content */}
        <div className="h-full w-full">
          <div className="h-[30rem] max-md:h-[20rem] w-full bg-black/70 rounded-t-2xl">
            <img src={project.image} alt="image" className="h-full w-full object-contain rounded-t-2xl"/>
          </div>
          <div className="h-fit px-8 pt-6 pb-10 max-sm:px-5 flex flex-col gap-4">
            <div>
              <div className="w-full flex gap-2 items-center mb-1">
                <p className="font-semibold text-2xl xl:text-3xl text-nowrap">
                  {project.title}
                </p>
                <p className="w-full text-base xl:text-lg font-medium text-slate-400">
                  ({project.year})
                </p>
                
                <a className="self-center place-items-end" href={project.githubLink} target="_blank">
                  <svg className="text-slate-200 opacity-60 hover:opacity-100 transition-all duration-200" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
              <p className="font-normal text-base xl:text-lg italic text-slate-400 opacity-100">
                {project.subject}
              </p>
              {/* Project Stack */}
              <div className="flex flex-wrap gap-2 my-2">
                {project.tools.map((tool) => (
                  <ToolDisplay key={tool} name={tool}/>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-lg xl:text-lg font-medium text-slate-200">
                Role
              </p>
              <div className="flex flex-col gap-2 pl-[2vw]">
              {project.roles.map((role, index) => (
                <p key={index} className="font-semibold text-base text-slate-400">
                  {role}
                </p>
              ))}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <p className="h-full text-slate-200 text-base xl:text-lg font-light leading-7">
                {project.shortDes}
              </p>
              {project.longDes.map((text, index) => (
                <p key={index} className="h-full text-slate-200 text-base xl:text-lg font-light leading-7">
                  {text}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};