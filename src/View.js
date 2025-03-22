// Сделаем отдельный класс для отображения игры в консоли.

class View {
  constructor(game) {
    this.game = game;
  }

  render() {
    const yourTeamName = 'Elbrus';

    // Тут всё рисуем.
    console.clear();
    console.log(this.game.track.join(''));
    console.log('\n\n');
    console.log('Enemies killed:', this.game.score);
    console.log(
      `Time in game "${this.formatTimeInSeconds(
        new Date() - this.game.startTime - 2000
      )}" SECONDS\n`
    );
    console.log(`Created by "${yourTeamName}" with love`);
  }

  formatTimeInSeconds(milliseconds) {
    return Math.floor(milliseconds / 1000);
  }
}

module.exports = View;
