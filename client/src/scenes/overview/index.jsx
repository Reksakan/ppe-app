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
import { useGetTrendsListQuery } from "state/api";

const TrendsPPI = ({
  key,
  _id,
  name,
  description,
  website,
  industries_number,
  data_earliest_year,
  notes,
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
          Statistic
        </Typography>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography sx={{ mb: "1.5rem "}} color={theme.palette.secondary[400]}>
          {website}
        </Typography>
        <Typography variant="body2">{description}</Typography>
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
          <Typography>id: {_id}</Typography>
          <Typography>Number of industries: {industries_number}</Typography>
          <Typography>Earliest date available: {data_earliest_year}</Typography>
          <Typography>Notes: {notes}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  )};

const Overview = () => {
  const { data, isLoading } = useGetTrendsListQuery();
  const isNonMobile = useMediaQuery("(min-width: 1000px)");
  console.log('data:', data)  //delete
  
  return (
    <Box m="1.5rem 2.5rem">
      <Header title="PPI LIST" subtitle="See your list of PPIs." />
      {data || !isLoading ? (
        <Box
          mt="20px" 
          display="grid" 
          gridTemplateColumns="repeat(4, minmax(0, 1fr))"
          justifyContent="space-between"
          rowGap="20px"
          columnGap="1.33%"
          sx={{
            "& > div": { gridColumn: isNonMobile ? undefined : "span 4"},
          }}
        >
          {data.rows.map(({
            ppi_id,
            ppi_name,
            ppi_description,
            ppi_website,
            ppi_industries_number,
            ppi_data_earliest_year,
            ppi_notes,
          }) => (
            <TrendsPPI 
            key={ppi_id}
            _id={ppi_id}
            name={ppi_name}
            description={ppi_description}
            website={ppi_website}
            industries_number={ppi_industries_number}
            earliest_year={ppi_data_earliest_year}
            notes={ppi_notes}
            />
          ))}
        </Box>
      ) : (
        <>Loading...</>
      )}
    </Box>
    
  )
}

export default Overview;