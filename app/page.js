import { Suspense } from 'react';
import getAllCricketors from '../utils/characters';
import Loading from '../components/Loading';

import Batsman from '../components/Batsman';
import Bowler from '../components/Bowler';
import Allrounder from '../components/Allrounder';

const Home = async () => {
  const allCharacters = await getAllCricketors({ filter: 'all' });

  return (
    <section>
      <h1>Indian Cricket Team For T20 CW24</h1>
      <ul>
        {allCharacters.map((character) => (
          <li key={character.id}>{character.name}</li>
        ))}
      </ul>
      <h1>Batsmen</h1>
      <Suspense fallback={<Loading />}>
      <Batsman />
      </Suspense>

      <h1>Bowlers</h1>
      <Suspense fallback={<Loading />}> 
      <Bowler />
      </Suspense>

      <h1>All-Rounders</h1>
      <Suspense fallback={<Loading />}> 
      <Allrounder />
      </Suspense> 
    </section>
  );
};
export default Home;
