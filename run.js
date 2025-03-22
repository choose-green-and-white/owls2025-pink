const addScoreToUser = require('./src/resultDB')
// Основной файл.
// Запускает игру.
const Game = require('./src/Game');
const runInteractiveConsole = require('./src/keyboard');
const registrationUser = require('./src/registration');
const createUser = require('./src/userDb')

// Инициализация игры с настройками.
const game = new Game({
  trackLength: 30,
});

// Запуск игры.
registrationUser()
  .then((res) => {
    console.log(`${res} приготовься ,скоро на тебя побегут опасные смайлики!`);
    setTimeout(() => {
      game.play();
      runInteractiveConsole(game);
    }, 4000);
  })
  .catch(console.error);
