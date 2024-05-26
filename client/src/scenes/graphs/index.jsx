import React, { useState } from "react";
import { FormControl, MenuItem, InputLabel, Box, Select } from "@mui/material";
import Header from "components/Header";
import { useGetPpiListQuery } from "state/api";
import { ControlPointSharp } from "@mui/icons-material";

const Graphs = () => {
  const { data, isLoading } = useGetPpiListQuery();
  
  /* New idea - start */

  const base_date = [];
  const begin_period = [];
  const begin_year = [];
  const created_at = [];
  const end_period = [];
  const end_year = [];
  const footnote_codes = [];
  const industry_codes = [];
  const product_code = [];
  const seasonal = [];
  const series_adjustement = [];
  const series_description = [];
  const series_id = [];
  const series_level = [];
  const series_title = [];
  const updated_at = [];
  const uuidColumn = [];

  data ? data.rows.forEach(element => {
    base_date.push(element.base_date);
    begin_period.push(element.begin_period);
    begin_year.push(element.begin_year);
    created_at.push(element.created_at);
    end_period.push(element.end_period);
    end_year.push(element.end_year);
    footnote_codes.push(element.footnote_codes);
    industry_codes.push(element.industry_codes);
    product_code.push(element.product_code);
    seasonal.push(element.seasonal);
    series_adjustement.push(element.series_adjustement);
    series_description.push(element.series_description);
    series_id.push(element.series_id);
    series_level.push(element.series_level);
    series_title.push(element.series_title);
    updated_at.push(element.updated_at);
    uuidColumn.push(element.uuidColumn);
  }) : console.log('error in forEach loop');

    
  
  /* New idea - end */
  
  /* Revise - start*/
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

  newData ? console.log('dataNew: ', newData) : console.log('newData is not defined'); //DELETE
  

  let newnewData = [];
  newnewData = data ? data.rows.map(index => {
    const newIndex = `${index.series_id} - ${index.series_title}`;
    return newIndex;
  }
) : '';

/* Revise - end*/
  
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