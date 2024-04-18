import React, { MouseEventHandler } from 'react';
import { STORY } from './utils/constants';

const DIRECTIONS = {
  back: 'BACK',
  forward: 'FORWARD',
};

const Tree: React.FC = () => (
  <div className="flex flex-col items-center">
    <div className="border-l-15 border-r-15 border-b-20 border-green-600 w-0 h-0 mt-10 bg-cyan-950"></div>
    <div className="w-3 h-20 bg-yellow-900"></div>
  </div>
);

function OncePopupATime() {
  const trees = Array.from({ length: 5 }, (_, index) => <Tree key={index} />);
  const [storyIndex, setStoryIndex] = React.useState(0);
  const handleDirectionClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    const direction = e.currentTarget.name;
    setStoryIndex((prevState) => {
      if (direction === DIRECTIONS.forward && prevState < STORY.length - 1) {
        return prevState + 1;
      } else if (direction === DIRECTIONS.back && prevState > 0) {
        return prevState - 1;
      }
      return 0;
    });
  };

  return (
    <div className=" flex-col space-y-3">
      <div className="text-2xl text-center">{STORY[storyIndex].title}</div>
      <div className="text-3xl flex space-x-2 justify-center items-center">
        <button
          name={DIRECTIONS.back}
          onClick={handleDirectionClick}
          className="px-6 h-12 uppercase font-semibold tracking-wider border border-slate-200 bg-indigo-500 text-slate-900"
        >
          {'<'}
        </button>
        <div className="bg-blue-200 w-96 h-48 flex justify-center space-x-8">{trees}</div>
        <button
          name={DIRECTIONS.forward}
          onClick={handleDirectionClick}
          className="px-6 h-12 uppercase font-semibold tracking-wider border border-slate-200 bg-indigo-500 text-slate-900"
        >
          {'>'}
        </button>
      </div>
      <p className="text-xl text-center max-w-xl ">{STORY[storyIndex].content}</p>
    </div>
  );
}

export default OncePopupATime;
