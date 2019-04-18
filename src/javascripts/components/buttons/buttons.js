import quadrantData from '../../helpers/data/quadrantData';

import util from '../../helpers/util';

const quadrantInfo = quadrantData.getQuadrantData();
const printToDomFunction = util.printToDom;

let totalScore = 400;

const buttonEvents = (e) => {
  const buttonId = e.target.id;
  const index = quadrantInfo.findIndex(p => p.id === buttonId);
  let domString = '';
  if (buttonId === 'broccoliBtn') {
    const targetDiv = 'eatScore';
    const itemScore = quadrantInfo[index].score;
    itemScore += 10;
    totalScore += 10;
  }
  domString += `<h4>${itemScore}</h4>`;
  printToDomFunction(targetDiv, domString);
  printToDomFunction('progress', totalScore);
};

const eventListeners = () => {
  document.getElementById('broccoliBtn').addEventListener('click', buttonEvents);
  document.getElementById('chocolateBtn').addEventListener('click', buttonEvents);
  document.getElementById('trampolineBtn').addEventListener('click', buttonEvents);
  document.getElementById('badmintonBtn').addEventListener('click', buttonEvents);
  document.getElementById('runBtn').addEventListener('click', buttonEvents);
  document.getElementById('judo-chopBtn').addEventListener('click', buttonEvents);
  document.getElementById('napBtn').addEventListener('click', buttonEvents);
  document.getElementById('slumberBtn').addEventListener('click', buttonEvents);
};

export default { eventListeners }