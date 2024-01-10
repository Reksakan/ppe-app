import express from 'express';
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
    const results = await db.query(`select * from index_data where index_name_id = ${req.params.id}`);
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
app.post("/getBlsTrends", (req, res) => {
  console.log(req.body)
})

//Post trends inside the database
app.post("/getBlsTrends", (req, res) => {
  console.log(req.body)
})

//Post trends inside the database
app.post("/getBlsTrends", (req, res) => {
  console.log(req.body)
})