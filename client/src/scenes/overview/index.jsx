import React, { useState } from 'react';
import { 
  Box, 
  Card, 
  CardActions, 
  CardContent, 
  Collapse, 
  Button, 
  Typography, 
  Rating, 
  useTheme, 
  useMediaQuery 
} from "@mui/material";
import Header from "components/Header";
import { useGetTrendsListQuery } from "state/api"

const TrendsPPI = ({
  ppi_id,
  ppi_name,
  ppi_description,
  ppi_website,
  ppi_industries_number,
  ppi_data_earliest_year,
  ppi_notes,
}) => {
  const theme = useTheme();
  const [ isExpanded, setIsExpanded ] = useState(false);
  
  return (
    <Card
      sx={{
        backgroundImage: "none",
        backgroundColor: theme.palette.background.alt,
        borderRadius: "0.55rem",
      }}
    >
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color={theme.palette.secondary[700]} gutterBottom>
          www.bls.gov
        </Typography>
        <Typography variant="h5" component="div">
          PPI US
        </Typography>
        <Typography sx={{ mb: "1.5rem "}} color={theme.palette.secondary[400]}>
          US$
        </Typography>
        <Typography variant="body2">BLS Trends is widly used for the majority of computer tech and software</Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="primary"
          size="small"
          onClick={()=> setIsExpanded(!isExpanded)}
        >
          See More
        </Button>
      </CardActions>
      <Collapse
        in={isExpanded}
        timeout="auto"
        unmountOnExit
        sx={{
          color: theme.palette.neutral[300]
        }}
      >
        <CardContent>
          <Typography>id: {1}</Typography>
          <Typography>Number of trends: 1545</Typography>
          <Typography>Earliest date available: March 1980</Typography>
          <Typography>Notes: What is a great weather</Typography>
        </CardContent>
      </Collapse>
    </Card>
  )};

const Overview = () => {
  const { data, isLoading } = useGetTrendsListQuery();
  console.log('data: ', data)  //delete
  
  return (
    <>
      <TrendsPPI />
    </>
    
  )
}

export default Overview;