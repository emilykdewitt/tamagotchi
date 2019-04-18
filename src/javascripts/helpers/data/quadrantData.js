const quadrantData = [
  {
    id: 'eat',
    button1: 'broccoli',
    button1points: 10,
    button2: 'chocolate',
    button2points: -3,
    meter: 'fullness',
    score: 100,
  },
  {
    id: 'play',
    button1: 'trampoline',
    button1points: 50,
    button2: 'badminton',
    button2points: 2,
    meter: 'fun',
    score: 100,
  },
  {
    id: 'fight',
    button1: 'run',
    button1points: 1,
    button2: 'judo-chop',
    button2points: -10,
    meter: 'strength',
    score: 100,
  },
  {
    id: 'sleep',
    button1: 'nap',
    button1points: 50,
    button2: 'slumber',
    button2points: 60,
    meter: 'energy',
    score: 100,
  },
];

const getQuadrantData = () => quadrantData;


export default { getQuadrantData };
