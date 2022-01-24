import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

function ArtCards({ cardImg, alt, title, artistName, cost, artId }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={`${cardImg}`}
        alt={`${alt}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography gutterBottom variant="p" component="div">
          <b>{cost}$</b>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Artist: {artistName}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/arts/${artId}`}>
          <Button size="small">view More</Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default ArtCards;
