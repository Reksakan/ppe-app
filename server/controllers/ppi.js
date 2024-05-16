import * as db from "../db/index.js";  

export const getTrendsList = async (req, res) => {
    try {
        console.log('ppi on backend is triggered') //delete
        const results = await db.query("select * from test_ppi_by_country");
        res.status(200).json({
            status: 'success',
            results: results,
        })
        console.log('results on backend: ', results); //delete
    } catch (err) {
        console.log(err);
    }
};