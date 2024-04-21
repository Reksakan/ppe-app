exports.seed = async function(knex) {
    //truncate all existing tables
    await knex.raw('TRUNCATE TABLE "bls_trends_data" CASCADE');

    await knex('bls_trends_data').insert([
        {
            id: 1,
            name: 'askerio'
        },
        {
            id: 2,
            name: 'askerio'
        },
        {
            id: 3,
            name: 'askerio'
        },
    ])
};