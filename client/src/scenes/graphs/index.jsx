import React, { useState } from "react";
import { FormControl, MenuItem, InputLabel, Box, Select } from "@mui/material";
import Header from "components/Header";
import { useGetPpiListQuery } from "state/api";

const Graphs = () => {
  const { data, isLoading } = useGetPpiListQuery();
  console.log('data: ', data);
  // const [ ppiBls, setPpiBls ] = useState("units");
  // const viewOptions = ["units", "sales", "morning", "evening", "apple", "bananas"]
  // return (
  //   <Box m="1.5rem 2.5rem">
  //     <Header
  //       title="GRAPHS"
  //       subtitle="Overview of PPI Trends"
  //     />     
  //     <Box height="75vh">
  //       <FormControl sx={{ mt: "1rem" }}>
  //         <InputLabel>View</InputLabel>
  //         <Select
  //           value={ppiBls}
  //           label="View"
  //           onChange={(e) => setPpiBls(e.target.value)}
  //         >
  //           {viewOptions ? viewOptions.map(option => (
  //             <MenuItem value={option}>{option}</MenuItem>
  //           )) : <>Loading...</>}
  //           {/* <MenuItem value="sales">Sales</MenuItem> */}
  //         </Select>
  //       </FormControl>
  //       {/* <OverviewChart view={ppiBls} /> */}
  //     </Box>
 
  //   </Box>
    
  // )
}

export default Graphs;