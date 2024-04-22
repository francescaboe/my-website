import React, { MouseEventHandler, useEffect } from 'react';
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

  const turnPage: (direction: string) => void = (direction: string) => {
    setStoryIndex((prevState) => {
      if (direction === DIRECTIONS.forward && prevState < STORY.length - 1) {
        return prevState + 1;
      } else if (direction === DIRECTIONS.back && prevState > 0) {
        return prevState - 1;
      }
      return 0;
    });
  };
  const handleDirectionClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    turnPage(e.currentTarget.name);
  };

  const handleKeyPress = (event: KeyboardEvent): void => {
    if (event.key === 'ArrowLeft') {
      turnPage(DIRECTIONS.back);
    }
    if (event.key === 'ArrowRight') {
      turnPage(DIRECTIONS.forward);
    }
  };

  // TODO move to hook eventually
  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  });

  return (
    <div className=" flex-col space-y-3">
      <div className="text-2xl text-center">{STORY[storyIndex].title}</div>
      <div className="flex space-x-2 justify-center items-center">
        <button
          name={DIRECTIONS.back}
          onClick={handleDirectionClick}
          className="px-6 h-12 uppercase font-semibold tracking-wider border border-slate-200 bg-indigo-500 text-slate-900"
        >
          {'<'}
        </button>
        {/*FOREST CONTAINER*/}
        <div className="forest bg-blue-200 hover:bg-blue-300 w-[650px] h-[350px] flex justify-center items-center">
          {/*TREES CONTAINER*/}
          <div className="flex justify-center space-x-8 z-1">{trees}</div>
          {/*CHARACTERS CONTAINER*/}
          <div className="characters-container flex justify-center items-end absolute">
            {/*PRINCESS*/}
            <div
              className={` princess ${STORY[storyIndex].styles.princess} flex flex-col items-center`}
            >
              <div className="princess-crown w-[50px] h-[20px] bg-amber-200 "></div>
              <div className="princess-head w-[50px] h-[50px] bg-pink-200 rounded-3xl"></div>
              <div className="princess-body h-0 w-0 border-l-[60px] border-l-red-800 border-r-[60px] border-r-red-800 border-b-[85px] border-pink-200"></div>
            </div>
            {/*DRAGON CONTAINER*/}
            <div className={`dragon ${STORY[storyIndex].styles.dragon} flex flex-col items-center`}>
              <div className="flames w-10 h-10 bg-red-500 rounded-full border-[10px] border-orange-500 animate-windyLeaves"></div>
              <div className="dragon-head w-0 h-0 border-r-[80px] border-r-transparent border-b-[70px] border-cyan-950"></div>
              <div className="dragon-body border-l-[120px] border-l-transparent border-b-[110px] border-cyan-950 mr-48 "></div>
            </div>
            {/*PRINCE*/}
            <div className={`prince ${STORY[storyIndex].styles.prince} flex flex-col items-center`}>
              <div className="prince-crown w-[50px] h-[20px] bg-amber-300"></div>
              <div className="prince-head w-[50px] h-[50px] bg-pink-100 rounded-2xl"></div>
              <div className="prince-body h-0 w-0 border-l-[40px] border-l-blue-800 border-r-[40px] border-r-blue-800 border-b-[90px] border-pink-100"></div>
            </div>
          </div>
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
