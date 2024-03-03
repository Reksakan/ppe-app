import React from 'react'

const Home = () => {
  //following should be moved to backend. 

  const URL = "https://api.bls.gov/publicAPI/v2/timeseries/data/";

  // const header = {
  //   'Access-Control-Allow-Origin': '*',
  //   'Content-type': 'application/json',
  // };

  const headers = {
    // 'Access-Control-Allow-Origin': '*',
    'Content-type': 'application/json',
  };

  const payload = JSON.stringify({
    "seriesid":["LAUCN040010000000005", "LAUCN040010000000006"],
    "startyear":"2010", 
    "endyear":"2012",
    // catalog: true,
    // calculatoins: true,
    // annualaverage: true,
    // aspects: true,
    "registrationkey": '4384cf67934742af9771cb1f352e1075',
  })

  const getBlsData = async () => {

    try{
      const response = await fetch(URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: headers,
        body: payload,
      });
      if(!response.ok){
        throw new Error("Could not getch resource");
      }

      const output = await response.json();
      console.log('output: ', output);
    } 
    catch(error){
      console.log(error)
    }
  };

  return (
    <>
      <div>Home</div>
      <button onClick={getBlsData}>Fetch</button>
    </>
    
  )
}

export default Home;