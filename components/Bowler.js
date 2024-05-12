import getAllCricketors from '../utils/characters';
import { Suspense } from 'react';
import { delay } from '../utils/delay';

const bowlers = await getAllCricketors({ filter: 'bowler' });
const Bowler = async () => {
  await delay(2500);
  return (
    <>
      <ul>
        {bowlers.map((character) => (
          <li key={character.id}>{character.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Bowler;
