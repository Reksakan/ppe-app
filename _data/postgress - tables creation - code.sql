-- CREATE TABLE bls_trends_data (
-- 	trend_unique_id uuid DEFAULT gen_random_uuid(),
-- 	trend_series_id VARCHAR(50),
-- 	trend_year VARCHAR(50),
-- 	trend_period VARCHAR(50),
-- 	trend_value INT,
-- 	trend_footnote_codes VARCHAR(50)
-- )

-- CREATE TABLE test_table (
-- 	trend_unique_id uuid DEFAULT gen_random_uuid(),
-- 	trend_series_id VARCHAR(50),
-- 	trend_year VARCHAR(50),
-- 	trend_period VARCHAR(50),
-- 	trend_value INT,
-- 	trend_footnote_codes VARCHAR(50)
-- )

INSERT INTO test_table (trend_series_id, trend_year, trend_period, trend_value, trend_footnote_codes)
VALUES
('666666','2008', 'May', 100.5, 'P'),
('666666','2008', 'June', 100.1, 'P'),
('666666','2008','July', 98.2, 'P')
RETURNING *;

