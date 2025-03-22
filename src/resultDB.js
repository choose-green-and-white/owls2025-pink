const { User, Result } = require('../db/models');

async function addScoreToUser(userId, score) {
  try {

    const result = await Result.create({
      score: score,
      UserId: userId
    });
    console.log('Очки успешно добавлены:', result);
    return result;
  } catch (error) {
    console.error('Ошибка при добавлении очков:', error);
    throw error;
  }
}

module.exports = addScoreToUser;

