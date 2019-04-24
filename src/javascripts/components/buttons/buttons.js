import quadrantData from '../../helpers/data/quadrantData';

const quadrantInfo = quadrantData.getQuadrantData();
let eatScore = 0;
let playScore = 0;
let fightScore = 0;
let sleepScore = 0;
let totalScore = 0;

const buttonEvents = (e) => {
  const buttonId = e.target.id;
  quadrantInfo.forEach((quadrant) => {
    if (quadrant.id === 'eat') {
      if (buttonId === quadrant.button1) {
        const newScore = eatScore + quadrant.button1points;
        if (newScore >= 0 && newScore <= 100) {
          eatScore = newScore;
          document.getElementById('eatScore').innerHTML = eatScore;
        }
      } else if (buttonId === quadrant.button2) {
        const newScore = eatScore + quadrant.button2points;
        if (newScore >= 0 && newScore <= 100) {
          eatScore = newScore;
          document.getElementById('eatScore').innerHTML = eatScore;
        }
      }
    } else if (quadrant.id === 'play') {
      if (buttonId === quadrant.button1) {
        const newScore = playScore + quadrant.button1points;
        if (newScore >= 0 && newScore <= 100) {
          playScore = newScore;
          document.getElementById('playScore').innerHTML = playScore;
        }
      } else if (buttonId === quadrant.button2) {
        const newScore = playScore + quadrant.button2points;
        if (newScore >= 0 && newScore <= 100) {
          playScore = newScore;
          document.getElementById('playScore').innerHTML = playScore;
        }
      }
    } else if (quadrant.id === 'fight') {
      if (buttonId === quadrant.button1) {
        const newScore = fightScore + quadrant.button1points;
        if (newScore >= 0 && newScore <= 100) {
          fightScore = newScore;
          document.getElementById('fightScore').innerHTML = fightScore;
        }
      } else if (buttonId === quadrant.button2) {
        const newScore = fightScore + quadrant.button2points;
        if (newScore >= 0 && newScore <= 100) {
          fightScore = newScore;
          document.getElementById('fightScore').innerHTML = fightScore;
        }
      }
    }
    if (quadrant.id === 'sleep') {
      if (buttonId === quadrant.button1) {
        const newScore = sleepScore + quadrant.button1points;
        if (newScore >= 0 && newScore <= 100) {
          sleepScore = newScore;
          document.getElementById('sleepScore').innerHTML = sleepScore;
        }
      } else if (buttonId === quadrant.button2) {
        const newScore = sleepScore + quadrant.button2points;
        if (newScore >= 0 && newScore <= 100) {
          sleepScore = newScore;
          document.getElementById('sleepScore').innerHTML = sleepScore;
        }
      }
    }
  });
  totalScore = eatScore + sleepScore + playScore + fightScore;
  let progressBarWidth = totalScore / 4;
  progressBarWidth += '%';
  document.getElementById('progressBar').style.width = progressBarWidth;
  console.error(progressBarWidth);
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
