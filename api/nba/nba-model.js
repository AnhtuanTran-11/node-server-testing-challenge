const db = require('../../data/dbConfig')

function getPlayerByID(player_id) {
    const playerRows = db('players')
        .where('player_id', player_id)

    return playerRows
}

function getAll() {
    return db('players')
}
module.exports = { getPlayerByID, getAll }