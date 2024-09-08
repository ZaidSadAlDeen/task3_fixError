import { useEffect,useState } from "react";

export default function Player() {
  const [player, setPlayer] = useState({
    firstName: 'Ranjani',
    lastName: 'Shettar',
    score:0,
  });

  function handlePlusClick() {
    setPlayer({
      score:player.score+1
    });
    console.log(player.score);
    
  }

 
  /*useEffect(
    () =>{
     handlePlusClick()
     },
   )*/

  return (
    <>
      <label>
        Score: <b>{player.score}</b>
        {' '}
        <button onClick={handlePlusClick}>
          +1
        </button>
      </label>
      <label>
        First name:
        <input
          value={player.firstName}
         
        />
      </label>
      <label>
        Last name:
        <input
          value={player.lastName}
         
        />
      </label>
    </>
  );
  }