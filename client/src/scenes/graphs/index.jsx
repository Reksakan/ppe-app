import React, { useState } from "react";
import { FormControl, MenuItem, InputLabel, Box, Select } from "@mui/material";
import Header from "components/Header";
import { useGetPpiListQuery } from "state/api";
import { ControlPointSharp } from "@mui/icons-material";

const Graphs = () => {
  const { data, isLoading } = useGetPpiListQuery();
  data ? console.log('data.rows: ', data.rows) : console.log('Downloading...'); //DELETE
  
  let newData = [];
  newData = data ? ([
    ...newData,
    {
      uuidColumn: '1',
      series_id: "na",
      series_level: "not chosen",
      series_title: "not chosen",
    },
    ...data.rows,
  ]) : console.log("Server is not responding");

  console.log('dataNew: ', newData); //DELETE
  console.log('dataNew length: ', newData.length);

  let newnewData = [];
  newnewData = data ? data.rows.map(index => {
    const newIndex = `${index.series_id} - ${index.series_title}`;
    return newIndex;
  }
) : '';

  
  
  const [ ppiBls, setPpiBls ] = useState('Choose index'); //What is this? Delete?
  return (
    <Box m="1.5rem 2.5rem">
      <Header
        title="GRAPHS"
        subtitle="Overview of PPI Trends"
      />     
      <Box height="75vh">
        <FormControl sx={{ mt: "1rem" }}>
          <InputLabel>View</InputLabel>
          <Select
            value={ppiBls}
            label="View"
            onChange={(e) => setPpiBls(e.target.value)}
          >
            {newnewData ? newnewData.map(index => (
              <MenuItem key={index} value={index}>{index}</MenuItem>
            )) : <>Loading...</>}
          </Select>
        </FormControl>
        {/* <OverviewChart view={ppiBls} /> */}
      </Box>
 
    </Box>
    
  )
}

export default Graphs;