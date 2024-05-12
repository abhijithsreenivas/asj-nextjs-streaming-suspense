import getAllCricketors from '../utils/characters';
import { delay } from '../utils/delay';

const batsmen = await getAllCricketors({ filter: 'batsmen' });
const Batsman = async () => {
  await delay(2000);

  return (
    <>
      <ul>
        {batsmen.map((character) => (
          <li key={character.id}>{character.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Batsman;
