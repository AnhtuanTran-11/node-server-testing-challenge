exports.up = async function(knex) {
    await knex.schema
    .createTable('players', table => {
        table.increments('player_id')
        table.string('player_name', 200)
    })
    .createTable('teams', table => {
        table.increments('team_id')
        table.string('team_name', 200)
    })
  };
  
  exports.down = async function(knex) {
    await knex.schema
    .dropTableIfExists('teams')
    .dropTableIfExists('players')
  };