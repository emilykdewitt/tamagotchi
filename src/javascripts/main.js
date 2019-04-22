import '../styles/main.scss';
import tamagotchi from './components/tamagotchi/tamagotchi';
import buttons from './components/buttons/buttons';

const init = () => {
  tamagotchi.domStringBuilder();
  buttons.eventListeners();
};

init();
