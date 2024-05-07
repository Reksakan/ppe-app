// getByMontly
// getByAnnually

export const getByMontly = async (req, res) => {
    try {
        const results = await db.query("select * from bls_trends_description");
        res.status(200).json({
            status: 'success',
            resulsts: results,
        })
    } catch (err) {
        console.log(err);
    }
};

export const getByAnnually = async (req, res) => {
    try {
        const results = await db.query("select * from bls_trends_description");
        res.status(200).json({
            status: 'success',
            resulsts: results,
        })
    } catch (err) {
        console.log(err);
    }
};