import { delay } from './delay';

const getAllCricketors = async ({ filter = 'all'}) => {

  const allCricketers = [
    {
      id: 1,
      name: 'Rohit Sharma',
      batsman: true,
      bowler: false,
    },
    {
      id: 2,
      name: 'Hardik Pandya',
      batsman: true,
      bowler: true,
    },
    {
      id: 3,
      name: 'Yashasvi Jaiswal',
      batsman: true,
      bowler: false,
    },
    {
      id: 4,
      name: 'Virat Kohli',
      batsman: true,
      bowler: false,
    },
    {
      id: 5,
      name: 'Suryakumar Yadav',
      batsman: true,
      bowler: false,
    },
    {
      id: 6,
      name: 'Sanju Samson',
      batsman: true,
      bowler: false,
    },
    {
      id: 7,
      name: 'Jasprit Bumrah',
      batsman: false,
      bowler: true,
    },
    { id: 8, name: 'Ravindra Jadeja', batsman: true, bowler: true },
    { id: 9, name: 'Arshdeep Singh', batsman: false, bowler: true },
    { id: 10, name: 'Mohd. Siraj', batsman: false, bowler: true },
    { id: 11, name: 'Yuzvendra Chahal', batsman: false, bowler: true },
  ]

  if(filter === 'all') {
    await delay(1000);
    return allCricketers;
  }

  if(filter == 'batsmen') {
    return allCricketers.filter(x => x.batsman );
  }

  if(filter == 'bowler') {
    return allCricketers.filter( x => x.bowler );
  }

  if(filter == 'alrounder') {
    return allCricketers.filter( x => x.batsman && x.bowler );
  }

  return allCricketers;
}

export default getAllCricketors;
