import React, { useEffect } from "react";
import socket from "../../socket";
import { connect } from "react-redux";
import "./Dashboard.css";
const Dashboard = ({ user }) => {
  useEffect(() => {
    //CDM
    socket.connect();
    socket.on("notification", (data) => {
      console.log(data);
    });
    socket.connect();
    socket.on("message", (data) => {
      console.log(data);
    });
    return () => {
      socket.disconnect();
      socket.off("notification");
      socket.off("message");
    };
  }, []);

  useEffect(() => {
    socket.emit("online", user.userId);
  }, [user]);
  return (
    <div className="dashboard-container flex">
      <h2
        style={{
          fontWeight: "400",
          fontFamily: "Roboto",
          paddingRight: "10px",
          color: "#7da4a0",
        }}
      >
        Hello Mr. {user?.username}
      </h2>
      <h1> Welcome to Dashboard</h1>
      <p>
        Sorry, dashboard UI is not ready! :( see <b>console</b> to recieve
        message
      </p>
    </div>
  );
};
const mapState = (state) => ({
  user: state.auth,
});
export default connect(mapState)(Dashboard);
