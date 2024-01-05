import battleshipImg from '../assets/img/battleshipScreen.png';
import triviaImg from '../assets/img/triviaScreen.png';
import weatherappImg from '../assets/img/weatherappScreen.png';

const projectsList = [
  {
    name: 'Battleship',
    description: 'Classic battleship game between a player and AI.',
    thumbnailImg: battleshipImg,
    githubUrl: 'https://github.com/mrd010/Battleship',
    liveUrl: 'https://mrd010.github.io/Battleship/',
  },
  {
    name: 'Trivia Game',
    description: 'a Simple trivia game with 4 options and boolean options.',
    thumbnailImg: triviaImg,
    githubUrl: 'https://github.com/mrd010/more-trivia',
    liveUrl: 'https://mrd010.github.io/more-trivia/',
  },
  {
    name: 'Weather App',
    description:
      'Simple weather app with limited options. get a location weather in a few seconds.',
    thumbnailImg: weatherappImg,
    githubUrl: 'https://github.com/mrd010/weather-app',
    liveUrl: 'https://mrd010.github.io/weather-app/',
  },
];

export default projectsList;
