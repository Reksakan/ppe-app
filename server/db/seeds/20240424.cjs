exports.seed = async function(knex) {
    //truncate all existing tables
    await knex.raw('TRUNCATE TABLE "bls_trends_data" CASCADE');

    await knex('bls_trends_data').insert([
        {
            "series_id": "PCU1133--1133--",
            "year": 1998,
            "period": "M01",
            "value": 192.3
          },
    ])
};