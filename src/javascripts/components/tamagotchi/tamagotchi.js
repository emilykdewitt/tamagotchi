import quadrantData from '../../helpers/data/quadrantData';

import util from '../../helpers/util';

const printToDomFunction = util.printToDom;

const quadrantInfo = quadrantData.getQuadrantData();

const domStringBuilder = () => {
  quadrantInfo.forEach((quadrant) => {
    let domString = '';
    domString += '<div class="quadInfo">';
    domString += `<h2>${quadrant.id}</h2>`;
    domString += `<button id="${quadrant.button1}Btn">${quadrant.button1}</button>`;
    domString += `<button id="${quadrant.button2}">${quadrant.button2}</button>`;
    domString += `<h3>${quadrant.meter}: </h3>`;
    domString += `<div id="${quadrant.id}Score">`;
    domString += `<div id="${quadrant.score}></div>`;
    domString += '</div>';
    printToDomFunction(quadrant.id, domString);
  });
};

export default { domStringBuilder };
