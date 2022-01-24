import axios from "axios";
import React, { useState, useEffect } from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import FormatShapesIcon from "@mui/icons-material/FormatShapes";
import FlipCameraAndroidIcon from "@mui/icons-material/FlipCameraAndroid";
import { useParams } from "react-router";
import { loadStripe } from "@stripe/stripe-js";
import { connect } from "react-redux";

import person from "../../assets/person.png";
import "./Art.css";
const stripePromise = loadStripe(
  "pk_test_51KEZrzJMD2OCAgQ2sHWInX3fO9UUebXG9ypUOYiRPUkHzvqQo6YPso6RseniRgIcj0xYKrFgvhIDQg595snPt0fi003VoceLkz"
);

const Art = ({ user }) => {
  var { artId } = useParams();
  var [art, setArt] = useState({});
  // --------------------------
  const checkoutSession = async () => {
    try {
      const stripe = await stripePromise;
      var {
        data: {
          data: { session },
        },
      } = await axios.get(`/orders/checkout-session/${artId}`);
      await stripe.redirectToCheckout({
        sessionId: session.id,
      });
    } catch (error) {}
  };
  // --------------------------
  const fetchArt = async () => {
    try {
      var {
        data: {
          data: { art },
        },
      } = await axios.get(`/arts/${artId}`);
      setArt({ ...art });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const fn = async () => {
      fetchArt();
    };
    fn();
  }, []);
  console.log(art);
  const {
    title,
    description,
    subject,
    likesCount,
    artist,
    formats,
    coverPhoto,
    orientation,
    resolutionHeight,
    resolutionWidth,
    reviews,
    cost,
  } = art;
  return (
    <div className="specific-art-container">
      <div
        className="specific-art-left"
        style={{ background: `url(${coverPhoto})` }}
      ></div>
      <div className="specific-art-right">
        <div className="main-heading">
          <h1>{title}</h1>
          <p>
            {description} - {subject}
          </p>
          <p id="resolution">
            {resolutionWidth}x{resolutionHeight} cm
          </p>
          <h2>{cost} $</h2>
        </div>
        {user?._id ? (
          <div className="buyNow">
            <button id="buyNowBtn" onClick={checkoutSession}>
              Purchase Now
            </button>
          </div>
        ) : (
          <p style={{ color: "#FF3333 !important" }}>
            Please login or signup first in order to purchase
          </p>
        )}

        <div className="otherInfo flex">
          <h3>
            {<ThumbUpIcon />} : {likesCount}
          </h3>
          <h3>
            {<FormatShapesIcon />} : {formats}
          </h3>
          <h3>
            <FlipCameraAndroidIcon /> : {orientation}
          </h3>
        </div>
        <h2>Artist Details:</h2>
        <div className="artistInfo">
          <div
            className="artistImg"
            style={{ backgroundImage: `url(${person})` }}
          ></div>
          <h4>{artist?.username}</h4> <h4 id="email">{artist?.email}</h4>
        </div>
      </div>
      {/* <img src={art.coverPhoto} />
      <div style={{ display: "flex", alignItems: "center" }}>
        <h2>{art.title}</h2> ---- <h3>${art.cost}</h3>
      </div>
      <button onClick={checkoutSession}>BUY!</button> */}
    </div>
  );
};

const mapState = (state) => ({
  user: state?.auth,
});
export default connect(mapState)(Art);
