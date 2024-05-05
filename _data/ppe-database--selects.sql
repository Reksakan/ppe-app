-- SELECT * FROM bls_trends_data;
-- SELECT COUNT(*) FROM bls_trends_data; 
SELECT SUM(value) from bls_trends_data;

-- DELETE FROM bls_trends_data WHERE series_id = 'PCU1133--1133--' AND year = '1998';
-- DELETE FROM bls_trends_data WHERE uuidColumn = '977909ef-2197-4842-8b81-96d1ed622e2c';





--First BLS trends download is 10,881 indexes
--SUM of 'value' column is 2,006,586.726