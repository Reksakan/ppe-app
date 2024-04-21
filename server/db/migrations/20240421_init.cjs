exports.up = function(knex) {
    return knex.schema.createTable('bls_trends_data', (table) => {
        table.increments();
        table.string('name');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('bls_trends_data')
};