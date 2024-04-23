import React, { MouseEventHandler, useEffect } from 'react';
import { STORY } from './utils/constants';

const DIRECTIONS = {
  back: 'BACK',
  forward: 'FORWARD',
};

const Tree: React.FC = () => (
  <div className="flex flex-col items-center">
    <div className="h-0 w-0 border-l-[50px] border-l-transparent border-r-[50px] border-r-transparent border-b-[75px] border-green-600 mt-10 animate-windyLeaves"></div>
    <div className="w-3 h-32 bg-yellow-900"></div>
  </div>
);

function OncePopupATime() {
  const trees = Array.from({ length: 4 }, (_, index) => <Tree key={index} />);
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
    <div className="flex flex-col items-center space-y-3">
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
        <div className="forest group bg-blue-200 hover:bg-blue-300 w-[650px] h-[350px] flex justify-center items-end">
          {/*TREES CONTAINER*/}
          <div className="flex justify-center space-x-8 z-1 mb-20">{trees}</div>
          {/*CHARACTERS CONTAINER*/}
          <div className="characters-container flex justify-center items-end absolute mb-2 space-x-2">
            {/*DRAGON CONTAINER*/}
            <div className={`dragon ${STORY[storyIndex].styles.dragon} flex flex-col items-center`}>
              <div className="flames w-10 h-10 bg-red-500 rounded-full border-[10px] border-orange-500 animate-windyLeaves"></div>
              <div className="dragon-head w-0 h-0 border-r-[80px] border-r-transparent border-b-[70px] border-cyan-950"></div>
              <div className="dragon-body border-l-[120px] border-l-transparent border-b-[110px] border-cyan-950 mr-48 "></div>
            </div>
            {/*PRINCE*/}
            <div className={`prince ${STORY[storyIndex].styles.prince} flex flex-col items-center`}>
              <div className="sword border-l-2 border-l-transparent border-r-2 border-r-transparent border-b-[140px] border-b-blue-500 translate-y-32 -translate-x-14 -rotate-45 group-hover:-rotate-[60deg]"></div>
              <div className="prince-crown w-[50px] h-[20px] bg-amber-300"></div>
              <div className="prince-head w-[50px] h-[50px] bg-pink-100 rounded-2xl"></div>
              <div className="prince-body h-0 w-0 border-l-[40px] border-l-blue-800 border-r-[40px] border-r-blue-800 border-b-[90px] border-pink-100"></div>
            </div>
            <div
              className={`relative ${STORY[storyIndex].styles.heart} w-[100px] h-[90px] -translate-x-24
            before:content-[''] before:absolute before:top-0 before:left-[50px]
            before:h-[80px] before:w-[50px] before:rounded-t-[50px]
            before:rounded-r-[50px]before:rounded-b-0 before:rounded-l-0
            before:bg-black before:-rotate-45 before:origin-[0_100%]
            after:content-[''] after:absolute after:top-0 after:left-0 after:h-[80px]
            after:w-[50px] after:rounded-t-[50px] after:rounded-r-[50px]
            after:rounded-b-0 after:rounded-l-0 after:bg-black after:rotate-45
            after:origin-[100%_100%] animate-pulse`}
            ></div>
            {/*PRINCESS*/}
            <div
              className={`princess ${STORY[storyIndex].styles.princess} flex flex-col items-center`}
            >
              <div
                className={`sword ${STORY[storyIndex].styles.princessSword} border-l-2 border-l-transparent border-r-2 border-r-transparent border-b-[140px] border-b-blue-500 translate-y-32 -translate-x-14 -rotate-45 group-hover:-rotate-[106deg] group-hover:-translate-x-16 group-hover:translate-y-44
                group-hover:after:absolute group-hover:after:content-[''] group-hover:after:w-4 group-hover:after:h-4 group-hover:after:rounded-3xl group-hover:after:bg-red-700 group-hover:after:-translate-x-2
                `}
              ></div>
              <div className="princess-crown w-[50px] h-[20px] bg-amber-200 "></div>
              <div className="princess-head w-[50px] h-[50px] bg-green-100 rounded-3xl"></div>
              <div className="princess-body h-0 w-0 border-l-[60px] border-l-red-800 border-r-[60px] border-r-red-800 border-b-[85px] border-green-100"></div>
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
