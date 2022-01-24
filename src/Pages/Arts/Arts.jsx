import { Container, Grid } from "@mui/material";
import React from "react";
import { connect } from "react-redux";
import ArtList from "../../Components/ArtList/ArtList";
import ArtCards from "../../MUI-Components/ArtCards/ArtCards";
const Arts = ({ arts }) => {
  const containerStyle = {
    marginBottom: "20px",
  };
  return (
    <div>
      <h1>Arts</h1>
      <Container maxWidth="lg" style={containerStyle}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {arts?.map(
            ({ _id, coverPhoto, title, artist: { username }, cost }) => (
              <Grid
                item
                xs={2}
                sm={4}
                md={4}
                key={_id}
                onMouseEnter={(e) => {
                  //   e.target.style.cursor = "pointer";
                  e.target.style.cursor = "pointer";
                }}
              >
                <ArtCards
                  cardImg={coverPhoto}
                  alt={title}
                  title={title}
                  artistName={username}
                  cost={cost}
                  artId={_id}
                />
              </Grid>
            )
          )}
        </Grid>
      </Container>
    </div>
  );
};
var mapState = (state) => ({
  arts: state.art,
});
export default connect(mapState)(Arts);

//  {
//    arts?.map(({ _id, coverPhoto, title, artist: { username }, cost }) => (
//      <Grid item xs={2} sm={4} md={4} key={_id}>
//        <ArtCards
//          cardImg={coverPhoto}
//          alt={title}
//          title={title}
//          artistName={username}
//          cost={cost}
//        />
//      </Grid>
//    ));
//  }
