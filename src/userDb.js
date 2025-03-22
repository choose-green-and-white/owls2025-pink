const { User } = require('../db/models');

async function createUser(name) {
  try {
    await User.create({ name });
    return name;
  } catch (error) {
    console.log('ERROR', error);
  }
}

async function getUserIdByName(name) {
  try {
    const { dataValues } = await User.findOne({ where: { name } });
    return dataValues.id;
  } catch (error) {
    console.log('ERROR', error);
  }
}

module.exports = { createUser, getUserIdByName };
