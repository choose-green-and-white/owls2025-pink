// Основной файл.
// Запускает игру.
const Game = require('./src/Game');
const runInteractiveConsole = require('./src/keyboard');
const registrationUser = require('./src/registration');
const addScoreToUser = require('./src/resultDB');
const { createUser, getUserIdByName } = require('./src/userDb');

// Запуск игры.
registrationUser()
  .then((userName) => {
    console.log(
      `${userName} приготовься ,скоро на тебя побегут опасные смайлики!`
    );
    // Инициализация игры с настройками.

    createUser(userName)
      .then((userName) => {
        const game = new Game(
          {
            trackLength: 30,
          },
          userName
        );

        return game;
      })
      .then((game) => {
        game.setUserId().then(
          setTimeout(() => {
            game.play();
            runInteractiveConsole(game);
          }, 2000)
        );
      });
  })
  .catch(console.error);
