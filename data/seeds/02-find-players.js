const players = [
    { player_name: "Stephen Curry"},
    { player_name: "Lebron James"},
    { player_name: "Damian Lillard"},
    { player_name: "Kyrie Irving"},
    { player_name: "Kevin Durant"},
    { player_name: "James Harden"},
]

const teams = [
    { team_name: "Warriors"},
    { team_name: "Lakers"},
    { team_name: "Trail Blazers"},
    { team_name: "Nets"},
    { team_name: "Nets"},
    { team_name: "Nets"},
]

exports.seed = async function (knex) {
    await knex('players').insert(players)
    await knex('teams').insert(teams)
};