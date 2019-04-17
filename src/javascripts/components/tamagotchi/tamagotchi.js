import util from '../../helpers/util';

import quadrantData from '../../helpers/data/quadrantData';

const printToDom = util.printToDom();

let quadrantsInfo = [];

const domStringBuilder = () => {
  let domString = '';
  quadrantsInfo.forEach((quadrant) => {
    domString += `<div id="${quadrant.id}Card">`
    domString +=    `<h2>${quadrant.id}</h2>`;
    domString +=    `<button>${quadrant.button1}</button>`;
    domString +=    `<button>${quadrant.button2}</button>`;
    domString += `</div>`
    printToDom(quadrant.id, domString);
  });
};

const getData = () => {
  quadrantData.getQuadrantData()
    .then((response) => {
      const quadrantsArray = response.;
      quadrantsInfo = quadrantsArray;
      domStringBuilder();
    })
    .catch((error) => {
      console.error(error);
    });
};

export default { getData };
