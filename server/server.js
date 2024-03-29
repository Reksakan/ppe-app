import express from 'express';
import fetch from 'node-fetch'; //delete
import bodyParser  from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
// import db from "./db/index.js";
import * as db from "./db/index.js";

import homeRoutes from './routes/home.js';
import fetchingRoutes from './routes/fetching.js';
import analysisRoutes from './routes/analysis.js';
import downloadRoutes from './routes/download.js';

/* CONFIGURATIONS*/
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cors());

/* ROUTES */
app.use("/home", homeRoutes);          // User authentication / about the site / what kind of products we have: ppi trends / market data / cost new
app.use("/fetching", fetchingRoutes);    // For now, ppi only from www.bls.gov and www.statcan.ca; fetching trends and show the status of latest updates/trends availability.
app.use("/statistic", analysisRoutes);  // Different graphs to show the trends behaivour and comparision bw each other.
app.use("/download", downloadRoutes);  //Trends download options.


const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`Server is running at the ${port}`));

// ??? Think how you should create an additional file for the following below

//Fetch entire database trends
app.get("/getBlsTrends", async (req, res) => {
  try {
    const results = await db.query("select * from index_data");
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        index_lake: results.rows,
      }
    })
  } catch (err) {
    console.log(err);
  }
})

//Fetch certain trend by id. But then it should be fetched by name. 
app.get("/getBlsTrends/:id", async (req, res) => {
  console.log(req.params.id)
  try {
    const results = await db.query("select * from index_data where index_name_id = $1", [req.params.id]);
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        index_lake: results.rows,
      }
    })
  } catch (err) {
    console.log(err);
  }
})

//Post trends inside the database
app.post("/getBlsTrends", async (req, res) => {
  try {
    const results = await db.query("INSERT INTO index_data (index_date, index_value, index_update, index_name_id, index_base_year) VALUES ($1, $2, $3, $4, $5) returning *", [
      req.body.index_date,
      req.body.index_value,
      req.body.index_update,
      req.body.index_name_id,
      req.body.index_base_year,
    ]);
    res.status(201).json({
      status: "success",
      results: results.rows.length,
      data: {
        index_lake: results.rows,
      }
    })
  } catch(err) {
    console.log(err)
  }
})

//Fetch DATA from BLS.GOV

//THis part is not needed. Check with Sasha. 
// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   next();
// });


app.post('/bls-data', async (req, res) => {

  console.log('Request body: ', req.body);
  console.log('Request header: ', req.header);
  console.log('Request ALL: ', req);

  try {
    const response = await fetch(process.env.BLS_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(req.body),
      "registrationkey": process.env.BLS_API_KEY,
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data from the server");
    }

    const responseData = await response.json();
    res.json(responseData);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
