-- CREATE TABLE test_ppi_description (
-- 	ppi_id INT,
-- 	ppi_name VARCHAR(50),
-- 	ppi_description VARCHAR(50),
-- 	ppi_website VARCHAR(50),
-- 	ppi_industries_number INT,
-- 	ppi_earlied_data_year INT, 
-- 	ppi_notes VARCHAR(50)
-- );

-- INSERT INTO test_ppi_description VALUES(1, 'PPI USA', 'Producer price index of the USA', 'www.bls.gov',	182, 1930, 'season adjustable and non-season adjustable');


INSERT INTO test_ppi_description VALUES(
	2,
	'PPI Canada', 
	'Producer price index of the Canada',
	'www.statcan.ca',
	'144',
	'1960',
	'Season adjustable and non-season adjustable'
);

INSERT INTO test_ppi_description VALUES(
	3,
	'PPI Europe', 
	'Producer price index of 27 European countries',
	'www.ec.europa.eu',
	'122',
	'1950',
	'Season adjustable and non-season adjustable'
);