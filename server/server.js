import express from 'express';
import fetch from 'node-fetch'; //delete
import bodyParser  from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import * as db from "./db/index.js";

import homeRoutes from './routes/home.js';
import fetchingRoutes from './routes/fetching.js';
import analysisRoutes from './routes/analysis.js';
import ppiRoutes from './routes/ppi.js';


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
app.get("/", (req, res, next) => {
  res.send("Hello workld!")
});
app.use(express.static("public"));
app.use("/home", homeRoutes);          // User authentication / about the site / what kind of products we have: ppi trends / market data / cost new
app.use("/ppi", ppiRoutes) //page of PPI indexes by countries: BLS, StatCan, Eurostat

/* Below two routes to revise. Fetching might be needed, but analysis? */
app.use("/fetching", fetchingRoutes);    // For now, ppi only from www.bls.gov and www.statcan.ca; fetching trends and show the status of latest updates/trends availability.
app.use("/analysis", analysisRoutes);  // Structure should be like a client in dashboard










/* TEST AREA */
/* This section should go to separate files - START*/
const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`Server is running at the ${port}`));

app.post('/bls-api', async (req, res) => {
  try {
    const response = await fetch(process.env.BLS_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
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

//POSTGRES Configurations

app.get("/bls-data", async (req, res) => {
  try {
    const results = await db.query("select * from bls_trends_description");
    res.status(200).json({
      status: "success",
      results: results,
    })
  } catch (err) {
    console.log(err);
  }
})

app.post("/bls-data", async (req, res) => {
  // console.log("request body from frontend: ", req.body)
  try {
    const results = await db.query("INSERT INTO test_table (trend_series_id, trend_year, trend_period, trend_value, trend_footnote_codes) VALUES ($1, $2, $3, $4, $5) RETURNING *", [
      req.body.trended_series_id,
      req.body.trend_year,
      req.body.trend_period,
      req.body.trend_value,
      req.body.trend_footnote_codes])
      res.status(201).json({
        status: "success",
        data: {
          outcome: results.rows[0]
        }
      })
  } catch (err) {
    console.log(err)
  }
})

/* This section should go to separate files - END*/