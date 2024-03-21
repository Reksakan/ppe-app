import React from 'react'

const Home = () => {
  //following should be moved to backend. 

  // const URL = 'https://api.bls.gov/publicAPI/v2/timeseries/data/';
  
  // const headers = { 
  //   'Content-Type': 'application/json',
  // };
  // const query = JSON.stringify({
  //   seriesid: ['LEU0254555900', 'APU0000701111'],
  //   startyear: '2002',
  //   endyear: '2012',
  // });

  // const getBlsData = async () => {

  //   try{
  //     const response = await fetch(URL, {
  //       method: 'POST',
  //       mode: 'no-cors',
  //       headers: headers,
  //       data: query,
  //       registrationkey: '4384cf67934742af9771cb1f352e1075',
        
  //     });
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

  //Working variant
  // const URL = "https://api.bls.gov/publicAPI/v2/timeseries/data/SUUR0000SA0/";
  const URL = "https://api.bls.gov/publicAPI/v2/timeseries/data/LEU0254555900";
  
  const getBlsData = async () => {

    try{
      const response = await fetch(URL);
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