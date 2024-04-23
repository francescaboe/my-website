import React from 'react';
import MyAvatar from 'components/my-avatar';
import PlayRps from 'components/play-rps';
import OncePopupATime from 'components/once-popup-a-time';
const App = () => {
  return (
    <div className="flex p-6 font-mono h-full">
      <div className="flex-auto">
        {/*HEADER*/}
        <div className="relative flex flex-wrap items-baseline pb-6 before:bg-black before:absolute before:-top-6 before:bottom-0 before:-left-60 before:-right-6">
          <h1 className="relative w-full flex-none mb-2 text-2xl font-semibold text-white">
            {/*add tailwind for landscape*/}
          </h1>
        </div>
        <div className="absolute top-5">
          <MyAvatar />
        </div>
        {/*ABOUT*/}
        <div className="flex items-baseline my-6 border-b-4 mt-20">
          <h1 className="font-bold uppercase text-4xl md:text-2xl">About</h1>
        </div>
        <p className="text-4xl md:text-2xl">
          Hey, I'm Francesca. I'm a frontend developer based in Berlin. I build stuff with React.
          Buzzwords I'm into include: Typescript, Tailwind, continuous learning, linting [todo:
          accessibility, testing, figma, ux]
        </p>
        {/*EXPERIMENTS*/}
        <div className="flex items-baseline my-6 border-b-4">
          <h1 className="font-bold uppercase text-4xl md:text-2xl">Inappropriate use of code</h1>
        </div>
        <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
          <button className="px-6 h-12 uppercase font-semibold tracking-wider border border-slate-200 bg-amber-200 text-slate-900">
            Rock, Paper, Scissors
          </button>
        </div>
        {/*TODO: add as accordion?*/}
        {/*PLAY*/}
        <div className="flex items-baseline justify-center my-6">
          <PlayRps />
        </div>
        {/*ONCE POPUP*/}
        <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
          <button className="px-6 h-12 uppercase font-semibold tracking-wider border border-slate-200 bg-amber-700 text-slate-900">
            Once popup a time with Tailwind
          </button>
        </div>
        <div className="flex items-baseline justify-center my-6">
          <OncePopupATime />
        </div>
        {/*LIKE BUTTON*/}
        {/*<button
            className="flex-none flex items-center justify-center w-12 h-12 text-black"
            type="button"
            aria-label="Like"
          >
            <svg width="20" height="20" fill="currentColor" aria-hidden="true">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              />
            </svg>
          </button>*/}
      </div>
    </div>
  );
};
export default App;
