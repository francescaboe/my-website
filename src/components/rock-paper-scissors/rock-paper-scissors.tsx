import React from 'react';
import './rock-paper-scissors.css';

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

const initialScore = { player1: 0, player2: 0 };

const options: string[] = ['✊', '🖐️', '✌️'];

// winner: looser
const outcomes: { [key: string]: string | undefined } = {
  '✊': '✌️',
  '🖐️': '✊',
  '✌️': '🖐️',
};
function RockPaperScissors() {
  const [player1, setPlayer1] = React.useState<string>(IDLE_PLAYERS.player1);
  const [player2, setPlayer2] = React.useState<string>(IDLE_PLAYERS.player2);
  const [winner, setWinner] = React.useState<string | undefined>('');
  const [score, setScore] = React.useState({ player1: 0, player2: 0 });
  const [pulse, setPulse] = React.useState(false);

  const isIdle = player1 === IDLE_PLAYERS.player1 && player2 === IDLE_PLAYERS.player2;

  const handleReset = () => {
    setPlayer1(IDLE_PLAYERS.player1);
    setPlayer2(IDLE_PLAYERS.player2);
    setScore(initialScore);
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
      // TODO WRONG!
      setScore((prevState) => ({ ...prevState, player1: prevState.player1++ }));
    } else {
      setWinner(TEXT.you);
      setScore((prevState) => ({ ...prevState, player2: prevState.player2++ }));
    }
  }, [player1, player2, outcomes]);

  return (
    <div className="game-container">
      <h1>{TEXT.play} 🪨 📄 ✂️</h1>
      <div className="players">
        <div className={`player ${isIdle && 'rotate-90'} ${pulse && 'pulsate'}`}>
          <p>{player1}</p>
        </div>
        <div className="winner">
          <p>
            {TEXT.score} {score.player1} - {score.player2}
          </p>
          {pulse ? '...' : <p>{winner}</p>}
        </div>
        <div className={`player ${isIdle && 'rotate-90'} ${pulse && 'pulsate'}`}>
          <p>{player2}</p>
        </div>
      </div>
      <div className="options">
        {options.map((o) => (
          <button disabled={pulse} name={o} key={o} onClick={handlePlayer2Click}>
            {o}
          </button>
        ))}
      </div>
      <button onClick={handleReset}>{TEXT.reset}</button>
    </div>
  );
}

export default RockPaperScissors;
