import React from 'react';
import moment from "moment"
import Card from 'react-bootstrap/Card'
import {Grid} from "@material-ui/core"
const AuctionDetails = (props) => {
  const { title, description, ends_at, reserve_price,bid} = props;
  return (
    <Grid container justify="space-around">
       <h1 className="m-4">{title}</h1>
      <Grid item className="m-4">
     
      <h6>{description}</h6>
      </Grid>
      <Grid item className="m-4">
       <h6> Current Price: ${Math.max(...bid)}</h6>
      <h6>Ends at: {moment(ends_at).format('MMM Do, YYYY')}</h6>
      <h6>Reserve Price: ${reserve_price}</h6>
      </Grid>
    </Grid>
  )
}

export default AuctionDetails;
