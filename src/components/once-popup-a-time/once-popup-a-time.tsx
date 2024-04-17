import React, { MouseEventHandler } from 'react';
import { STORY } from './utils/constants';

const DIRECTIONS = {
  back: 'BACK',
  forward: 'FORWARD',
};

function OncePopupATime() {
  const [storyIndex, setStoryIndex] = React.useState(0);
  const handleDirectionClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    const direction = e.currentTarget.name;
    if (direction === DIRECTIONS.forward) {
      setStoryIndex((prevState) => (prevState < STORY.length - 1 ? prevState + 1 : 0));
    } else {
      setStoryIndex((prevState) => (prevState > 0 ? prevState - 1 : 0));
    }

    /*
    * or
    * const buttonName = e.currentTarget.name;
  setStoryIndex((prevState) => {
    if (buttonName === DIRECTIONS.forward && prevState < STORY.length - 1) {
      return prevState + 1;
    } else if (buttonName === DIRECTIONS.back && prevState > 0) {
      return prevState - 1;
    }
    return prevState; // No change if prevState is at the boundary
  });
    *
    * */
  };

  return (
    <div className="flex flex-col">
      <div className="text-2xl text-center">{STORY[storyIndex].title}</div>
      <div className="text-3xl text-center">
        <button name={DIRECTIONS.back} onClick={handleDirectionClick}>
          {'<'}
        </button>
        <button name={DIRECTIONS.forward} onClick={handleDirectionClick}>
          {'>'}
        </button>
      </div>
      <div className="text-xl text-center">{STORY[storyIndex].content}</div>
    </div>
  );
}

export default OncePopupATime;
