// exports.up = function(knex) {
//     return knex.schema
//     .createTable('bls_trends_data', (table) => {
//         table.uuid('uuidColumn').defaultTo(knex.fn.uuid());
//         table.string('series_id').reference('series_id').inTable('bls_trends_description');
//         table.string('year');
//         table.string('period');
//         table.integer('value');
//         table.string('footnote_codes');
//         table.timestamps(true, true)
//     })
//     .createTable('bls_trends_description'), (table) => {
//         table.uuid('uuidColumn').defaultTo(knex.fn.uuid());
//         table.string('series_id').reference('series_id').inTable('bls_trends_data');
//         table.string('industry_code');
//         table.string('product_code');
//         table.string('seasonal');
//         table.string('base_date');
//         table.string('series_title');
//         table.string('footnote_codes');
//         table.string('begin_year');
//         table.integer('begin_year');
//         table.string('begin_period');
//         table.integer('end_year');
//         table.string('end_period');
//         table.timestamps(true, true);
//     }
// };

// exports.down = function(knex) {
//     return knex.schema
//     .dropTable('bls_trends_data')
//     .dropTable('bls_trends_description')
// };