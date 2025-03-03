'use client';

import { TextReveal } from '@/component/index';

interface ToolListProps {
  title: string;
  itemList: string[];
}

export default function ToolList({ title, itemList }: ToolListProps) {
  return (
    <div className="w-full h-full pb-3 pt-3 first:pt-0">
      <TextReveal duration={500}>
        <div className="w-full flex flex-1">
          <p className="w-4/12 text-base xl:text-lg font-medium text-slate-200 shrink-0">
            {title}
          </p>
          <div className="h-fit grid grid-rows-4 max-lg:grid-rows-5 grid-cols-3 grid-flow-col gap-x-[6rem] max-sm:gap-x-[30vw] gap-y-3 text-slate-300 text-sm xl:text-base font-light text-start text-nowrap px-2 flex-1">
            {itemList.map((item) => (
              <p key={item}>
                {item}
              </p>
            ))}
          </div>
        </div>
        </TextReveal>
    </div>
  );
}