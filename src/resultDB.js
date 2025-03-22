const { User, Result } = require('../db/models');

async function addScoreToUser(userId, score) {
  try {
    const { dataValues } = await Result.create({
      score,
      userId,
    });

    const userName = await User.findByPk(dataValues.userId);
    console.log(
      `Очки успешно добавлены игроку "${userName.toJSON().name}" счет:`,
      dataValues.score
    );
  } catch (error) {
    console.error('Ошибка при добавлении очков:', error);
    throw error;
  }
}

module.exports = addScoreToUser;
