exports.seed = async function(knex) {
    // truncate all existing tables
    await knex.raw('TRUNCATE TABLE "bls_trends_description" CASCADE');

    // await knex('bls_trends_description').insert([
      
    // ]);
};