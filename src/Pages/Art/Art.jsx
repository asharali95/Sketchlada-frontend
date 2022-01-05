import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

const Art = () => {
  var { artId } = useParams();
  var [art, setArt] = useState({});
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
  return (
    <div>
        <img src={art.coverPhoto} />
        <div style={{ display: "flex", alignItems: "center" }}>
          <h2>{art.title}</h2> ---- <h3>${art.cost}</h3>
        </div>
        <button>BUY!</button>
    </div>
  );
};

export default Art;
