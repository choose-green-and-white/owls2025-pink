const keypress = require('keypress');

function registrationUser() {
  console.log('ОООООООО, Приветствуем тебя! Скажи нам кто ты, воин?!');

  return new Promise((res, rej) => {
    keypress(process.stdin);
    let name = '';

    process.stdin.on('keypress', (ch, key) => {
      if (key) {
        name += ch;

        if (key.name === 'enter') {
          name = name.trim();
          if (!name) {
            rej(name);
          }
          res(name);
        }
      }
    });
  });
}

module.exports = registrationUser;
