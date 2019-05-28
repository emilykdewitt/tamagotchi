import quadrantData from '../../helpers/data/quadrantData';

import util from '../../helpers/util';

const printToDomFunction = util.printToDom;

const quadrantInfo = quadrantData.getQuadrantData();

const eatScore = 0;
const playScore = 0;
const fightScore = 0;
const sleepScore = 0;

const domStringBuilder = () => {
  quadrantInfo.forEach((quadrant) => {
    let domString = '';
    domString += '<div class="quadInfo">';
    domString += `<h2>${quadrant.id}</h2>`;
    domString += `<button id="${quadrant.button1}" class="btn1 ${quadrant.id}">${quadrant.button1}</button>`;
    domString += `<button id="${quadrant.button2}" class="btn2">${quadrant.button2}</button>`;
    domString += `<h3>${quadrant.meter}: </h3>`;
    if (quadrant.id === 'eat') {
      domString += `<h3 id="eatScore">${eatScore}</h3>`;
    } else if (quadrant.id === 'play') {
      domString += `<h3 id="playScore">${playScore}</h3>`;
    } else if (quadrant.id === 'fight') {
      domString += `<h3 id="fightScore">${fightScore}</h3>`;
    } else {
      domString += `<h3 id="sleepScore">${sleepScore}</h3>`;
    }
    printToDomFunction(quadrant.id, domString);
  });
};

export default { domStringBuilder };
