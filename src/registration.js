const keypress = require('keypress');

async function registrationUser() {
  return new Promise((res, rej) => {
    keypress(process.stdin);
    let name = '';

    process.stdin.on('keypress', (ch, key) => {
      if (key) {
        name += ch;

        if (key.name === 'enter') {
          res(name);
        }
      }
    });
  });
}

module.exports = registrationUser;
