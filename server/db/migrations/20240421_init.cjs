exports.up = function(knex) {
    return knex.schema.createTable('bls_trends_data', (table) => {
        table.uuid('uuidColumn').defaultTo(knex.fn.uuid());
        table.string('name');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('bls_trends_data')
};