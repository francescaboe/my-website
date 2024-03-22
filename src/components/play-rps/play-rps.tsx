import React from 'react';

const IDLE_PLAYERS = {
  player2: '🤛',
  player1: '🤜',
};

const TEXT = {
  draw: 'Draw',
  me: 'I win!',
  no_winner: 'No winner yet!',
  you: 'You win!',
  play: 'Play',
  reset: 'Reset',
  result: 'Result',
  score: 'Score: ',
};

const options: string[] = ['✊', '🖐️', '✌️'];

// winner: looser
const outcomes: { [key: string]: string | undefined } = {
  '✊': '✌️',
  '🖐️': '✊',
  '✌️': '🖐️',
};
function PlayRps() {
  const [player1, setPlayer1] = React.useState<string>(IDLE_PLAYERS.player1);
  const [player2, setPlayer2] = React.useState<string>(IDLE_PLAYERS.player2);
  const [winner, setWinner] = React.useState<string | undefined>('');
  const [pulse, setPulse] = React.useState(false);

  const isIdle = player1 === IDLE_PLAYERS.player1 && player2 === IDLE_PLAYERS.player2;

  const handleReset = () => {
    setPlayer1(IDLE_PLAYERS.player1);
    setPlayer2(IDLE_PLAYERS.player2);
  };

  const handlePlayer2Click = (e: React.MouseEvent<HTMLButtonElement>) => {
    // persist result
    const pl2 = e.currentTarget.name;
    handleReset();
    setPulse(true);

    setTimeout(() => {
      setPulse(false);
      setPlayer2(pl2);
      // Get the random option using the random index
      const randomIndex = Math.floor(Math.random() * options.length);
      const randomOption = options[randomIndex];
      setPlayer1(randomOption);
    }, 2000);
  };

  React.useEffect(() => {
    if (isIdle) {
      setWinner(TEXT.no_winner);
      return;
    }
    if (player1 === player2) {
      setWinner(TEXT.draw);
      return;
    }
    if (player2 === outcomes[player1]) {
      setWinner(TEXT.me);
    } else {
      setWinner(TEXT.you);
    }
  }, [player1, player2, outcomes]);

  return (
    <div className="w-[15rem] h-[22rem] text-2xl bg-transparent cursor-pointer group perspective">
      <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
        {/*FRONT*/}
        <div className="absolute backface-hidden border-2 w-full h-full flex justify-center items-center">
          <h1>Play 🪨 📄 ✂️</h1>
        </div>
        {/*BACK*/}
        <div className="absolute my-rotate-y-180 backface-hidden items-center w-full h-full bg-gray-100 overflow-hidden flex justify-center flex-col">
          <div className="absolute w-full h-full bg-gray-100 overflow-hidden flex justify-center flex-col items-center">
            <div className="flex justify-center flex-col items-center">
              <div className="flex flex-col items-center">
                {/*PLAYER 1*/}
                <div className="mb-8 flex justify-around">
                  {options.map((o) => (
                    <button
                      className="bg-teal-700 m-2 p-2 text-transparent text-4xl shadow shadow-gray-700"
                      disabled
                      name={o}
                      key={o}
                    >
                      {o}
                    </button>
                  ))}
                </div>
                <div
                  className={` text-4xl ${isIdle ? 'rotate-90' : 'rotate-180'} ${pulse && 'animate-pulsate'}`}
                >
                  <span>{player1}</span>
                </div>
                {/*RESULT*/}
                <div className="m-2">{pulse ? '...' : <p>{winner}</p>}</div>
                {/*PLAYER 2*/}
                <div className={` text-4xl ${isIdle && 'rotate-90'} ${pulse && 'animate-pulsate'}`}>
                  <span>{player2}</span>
                </div>
              </div>
              {/*PLAYER 2 options*/}
              <div className="mt-8 flex justify-around">
                {options.map((o) => (
                  <button
                    className="bg-teal-700 m-2 p-2 text-4xl shadow shadow-gray-700 hover:bg-teal-600 hover:animate-[grow_500ms_forwards]"
                    disabled={pulse}
                    name={o}
                    key={o}
                    onClick={handlePlayer2Click}
                  >
                    {o}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayRps;
