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
// registrationUser().then((res) => {
//   console.log(`Игрок ${res} приготовься, игра скоро начнется!`);

//   setTimeout(() => {
//     game.play();
//     runInteractiveConsole(game);
//   }, 3000);
// });

createUser(Alex)
