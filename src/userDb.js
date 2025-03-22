const {User} = require('../db/models')
async function createUser(name) {
    try{
        await User.create({name})
    } 
    catch(error){
        console.log('ERROR', error)
    }
}

module.exports = createUser