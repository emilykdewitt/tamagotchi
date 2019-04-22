import quadrantData from '../../helpers/data/quadrantData';
// import tamagotchi from '../tamagotchi/tamagotchi';

import util from '../../helpers/util';

const printToDomFunc = util.printToDom;

// const domStringBuild = tamagotchi.domStringBuilder;
const quadrantInfo = quadrantData.getQuadrantData();
let eatScore = 0;
let playScore = 0;
let fightScore = 0;
let sleepScore = 0;

const buttonEvents = (e) => {
  let domString = '';
  const buttonId = e.target.id;
  quadrantInfo.forEach((quadrant) => {
    const quadrantId = quadrant.id;
    const buttonOne = quadrant.button1;
    const buttonOneValue = quadrant.button1points;
    const buttonTwo = quadrant.button2;
    const buttonTwoValue = quadrant.button2points;
    if (quadrantId === 'eat') {
      if (buttonId === buttonOne) {
        eatScore += buttonOneValue;
      } else if (buttonId === buttonTwo) {
        eatScore += buttonTwoValue;
      }
      domString += `<h3>${eatScore}</h3>`;
      printToDomFunc('eatScore', domString);
    } else if (quadrantId === 'play') {
      if (buttonId === buttonOne) {
        playScore += buttonOneValue;
      } else if (buttonId === buttonTwo) {
        playScore += buttonTwoValue;
      }
      domString += `<h3>${playScore}</h3>`;
      printToDomFunc('playScore', domString);
    } else if (quadrantId === 'fight') {
      if (buttonId === buttonOne) {
        fightScore += buttonOneValue;
      } else if (buttonId === buttonTwo) {
        fightScore += buttonTwoValue;
      }
      domString += `<h3>${fightScore}</h3>`;
      printToDomFunc('fightScore', domString);
    } else if (quadrantId === 'sleep') {
      if (buttonId === buttonOne) {
        sleepScore += buttonOneValue;
      } else if (buttonId === buttonTwo) {
        sleepScore += buttonTwoValue;
      }
      domString += `<h3>${sleepScore}</h3>`;
      printToDomFunc('sleepScore', domString);
    }
  });
};

const eventListeners = () => {
  document.getElementById('broccoli').addEventListener('click', buttonEvents);
  document.getElementById('chocolate').addEventListener('click', buttonEvents);
  document.getElementById('trampoline').addEventListener('click', buttonEvents);
  document.getElementById('badminton').addEventListener('click', buttonEvents);
  document.getElementById('run').addEventListener('click', buttonEvents);
  document.getElementById('judo-chop').addEventListener('click', buttonEvents);
  document.getElementById('nap').addEventListener('click', buttonEvents);
  document.getElementById('slumber').addEventListener('click', buttonEvents);
};

export default { eventListeners };
