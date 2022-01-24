import React, { useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { getAllArts } from "../../Redux/test/artActions";
import { Carousel } from "react-responsive-carousel";
import Button from "@mui/material/Button";
import homepagepic1 from "../../assets/homepage1.png";
import homepagepic2 from "../../assets/homepage2.png";
import homepagepic3 from "../../assets/homepage3.png";
import sketchladaLogo from "../../assets/sketchlada-logo2.png";
import "./Home.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
const Home = ({ getAllArts, user }) => {
  useEffect(() => {
    getAllArts();
  });
  return (
    <div className="Home">
      <div className="home-slider flex">
        <div className="divleft">
          <img src={sketchladaLogo} style={{ maxWidth: "450px" }} alt="logo" />
          <h1>Collect Art by the world Leading Artists</h1>
          {user._id ? null : (
            <Link style={{ textDecoration: "none" }} to="/auth">
              <Button variant="outlined" size="large" color="inherit">
                Signup
              </Button>
            </Link>
          )}
          <Link style={{ textDecoration: "none" }} to="/gallery">
            <Button variant="outlined" size="large" color="inherit">
              View gallery
            </Button>
          </Link>
        </div>
        <div className="divright">
          <Carousel autoPlay={true} infiniteLoop={true}>
            <img src={homepagepic1} />
            <img src={homepagepic2} />
            <img src={homepagepic3} />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

var mapState = (state) => ({
  user: state?.auth,
});
var actions = {
  getAllArts,
};

export default connect(mapState, actions)(Home);
