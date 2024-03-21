import React from 'react'

const Home = () => {
  // following should be moved to backend. 

const PROXY_URL = "http://localhost:5001/bls-data"; // Adjust the URL as needed

const getBlsData = async () => {
  try {
    const response = await fetch(PROXY_URL, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        seriesid: ["LEU0254555900", "APU0000701111"],
        startyear: "2002",
        endyear: "2012",
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data from the server");
    }

    const responseData = await response.json();
    console.log('Response Data:', responseData);
  } catch (error) {
    console.error('Error:', error.message);
  }
};
  //Working variant
  // const URL = "https://api.bls.gov/publicAPI/v2/timeseries/data/SUUR0000SA0/";
  // const URL = "https://api.bls.gov/publicAPI/v2/timeseries/data/seriesid=LEU0254555900";
  
  // const getBlsData = async () => {

  //   try{
  //     const response = await fetch(URL);
  //     if(!response.ok){
  //       throw new Error("Could not getch resource");
  //     }

  //     const output = await response.json();
  //     console.log('output: ', output);
  //   } 
  //   catch(error){
  //     console.log(error)
  //   }
  // };

  return (
    <>
      <div>Home</div>
      <button onClick={getBlsData}>Fetch</button>
    </>
    
  )
}

export default Home;