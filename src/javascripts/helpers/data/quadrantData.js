const quadrantData = [
  {
    id: 'eat',
    button1: 'broccoli',
    button1points: 10,
    button2: 'chocolate',
    button2points: -3,
    meter: 'fullness',
  },
  {
    id: 'play',
    button1: 'trampoline',
    button1points: 50,
    button2: 'badminton',
    button2points: 2,
    meter: 'fun',
  },
  {
    id: 'fight',
    button1: 'run away',
    button1points: 1,
    button2: 'judo chop',
    button2points: -10,
    meter: 'strength',
  },
  {
    id: 'sleep',
    button1: 'nap',
    button1points: 50,
    button2: 'slumber',
    button2points: 60,
    meter: 'energy',
  },
];

const getQuadrantData = () => {
  return quadrantData;
};

export default { getQuadrantData };
