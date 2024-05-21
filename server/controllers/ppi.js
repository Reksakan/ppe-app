import * as db from "../db/index.js";  

export const getTrendsList = async (req, res) => {
    try {
        const output = await db.query("select * from test_ppi_by_country");
        res.status(200).json(output)
    } catch (err) {
        console.log(err);
    }
};

//getGraphList

export const getGraphList = async (req, res) => {
    try {
        console.log('backend is triggered')
        const output = await db.query("select * from bls_trends_description");
        res.status(200).json(output)
    } catch (err) {
        console.log(err);
    }
};