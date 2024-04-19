import React, { MouseEventHandler } from 'react';
import { STORY } from './utils/constants';

const DIRECTIONS = {
  back: 'BACK',
  forward: 'FORWARD',
};

const Tree: React.FC = () => (
  <div className="flex flex-col items-center">
    <div className="h-0 w-0 border-l-[50px] border-l-transparent border-r-[50px] border-r-transparent border-b-[75px] border-green-600 mt-10 animate-windyLeaves"></div>
    <div className="w-3 h-20 bg-yellow-900"></div>
  </div>
);

function OncePopupATime() {
  const trees = Array.from({ length: 3 }, (_, index) => <Tree key={index} />);
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
        {/*FOREST CONTAINER*/}
        <div className="bg-blue-200 hover:bg-blue-300 w-[550px] h-[250px] flex justify-center space-x-8">
          {trees}

          <div className={`${STORY[storyIndex].styles.princess}`}>princess</div>
          <div className={`text-7xl ${STORY[storyIndex].styles.dragon}`}>dragon</div>
          <div className={` text-9xl ${STORY[storyIndex].styles.prince}`}>prince</div>
        </div>
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
