import getAllCricketors from '../utils/characters';
import { Suspense } from 'react';
import { delay } from '../utils/delay';

const alrounder = await getAllCricketors({ filter: 'alrounder' });
const Allrounder = async () => {
  await delay(3000);
  return (
    <>
      <ul>
        {alrounder.map((character) => (
          <li key={character.id}>{character.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Allrounder;
