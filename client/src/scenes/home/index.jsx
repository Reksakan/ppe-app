import React from 'react'

const Home = () => {
  // following should be moved to backend. 

const PROXY_URL = "http://localhost:5001/bls-api"; // Adjust the URL as needed
const PROXY_URL_SERVER = "http://localhost:5001/bls-data"; // Adjust the URL as needed


//Get data from BLS Web site. Do not delete this as it's working. 
const getBlsData = async () => {
  try {
    const response = await fetch(PROXY_URL, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        seriesid: ["PCU1133--1133--"],
        startyear: "2015",
        endyear: "2024",
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data from the server");
    }
    const responseData = await response.json();
  } catch (error) {
    console.error('Error:', error.message);
  }
};

//retrieve data from Data Base
const getDataFromServer = async () => {
  try {
    const response = await fetch(PROXY_URL_SERVER);
    if (!response.ok) {
      throw new Error("Failed to fetch data from the server");
    }

    const responseData = await response.json();
    console.log('responseData: ', responseData)  // Delete after all
  } catch (error) {
    console.error('Error:', error.message);
  }
};

//Record data to db
const sendDataToServer = async () => {
  try {
    const response = await fetch(PROXY_URL_SERVER, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        trended_series_id: '04456465554',
        trend_year: '2001',
        trend_period: 'May',
        trend_value: 99.1,
        trend_footnote_codes: 'P'
      })
    })
    
    if (!response.ok) {
      throw new Error("Failed to fetch data from the server");
    }
    const responseData = await response.json();
    console.log('recoreded trend: ', responseData)  // Delete after all
  } catch (err) {
    console.log('Error: ', err.message)
  }
}

  return (
    <>
      <div>Home</div>
      <button onClick={getBlsData}>Fetch from BLS Website</button>
      <button onClick={getDataFromServer}>Get data from server</button>
      <button onClick={sendDataToServer}>Send data from server</button>
    </>
    
  )
}

export default Home;