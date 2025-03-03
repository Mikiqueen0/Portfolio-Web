'use client';

import { useState, useEffect } from 'react';
import { TextReveal } from '@/component/index';
import { Contacts } from '@/types';

export default function Contact() {
  const [contactLists, setContactLists] = useState<Contacts | null>(null);

  useEffect(() => {
    fetch("/files/contacts.json")
      .then((res) => res.json())
      .then((data: Contacts) => setContactLists(data))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="px-[4rem] max-md:px-[6vw] my-6">
        <TextReveal duration={500}>
          <p className="xl:text-3xl w-fit text-2xl font-extrabold">
            Contact
          </p>
        </TextReveal>
      </div>
      <div className="w-full h-full flex flex-col gap-8 justify-center">
        <div className="h-fit w-full flex justify-center pl-[4rem] pr-[2rem] max-md:px-[6vw]">
          <div className="h-full w-fit flex flex-col gap-2 items-start">
            {contactLists ? 
              Object.keys(contactLists).map((key) => {
                const value = contactLists[key as keyof Contacts];

                return (
                <div key={key} className="w-fit h-full">
                  <TextReveal duration={500}>
                  <div className="flex gap-6 max-[420px]:gap-2">
                    <p className="w-[8rem] max-[420px]:max-w-[104px] max-md:w-[8rem] max-[420px]:text-sm text-base xl:text-lg font-normal text-slate-300 text-nowrap">
                      {key}
                    </p>
                    {value.link !== "" 
                    ? (
                      <a 
                      href={value.link}
                      target="_blank"
                      className="text-base max-[420px]:text-sm xl:text-lg font-light text-slate-400 underline"
                      >
                        {value.text}
                      </a>
                    ) : (
                      <p className="text-base max-[420px]:text-sm xl:text-lg font-light text-slate-400">
                        {value.text}
                      </p>
                    )}
                  </div>
                  </TextReveal>
                </div>
              )})
            : (
              // <p className="max-[420px]:text-sm text-base xl:text-lg font-normal text-slate-300">
              //   Loading...
              // </p>
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}