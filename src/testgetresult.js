const { User, Result } = require('../db/models');

async function getResultByUsername(username) {

    try {
        const user = await User.findOne({
            where: { username: username },
            include: Result
        });

        if (!user) {
            throw new Error('Игрок не найден');
        }
        return user.Result;
    } catch (error) {
        console.error('ошибка получения результатов:', error);
        throw error;
    }
}