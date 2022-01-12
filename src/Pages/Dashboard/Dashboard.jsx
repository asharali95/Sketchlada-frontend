import React, { useEffect } from "react";
import socket from "../../socket";
import { connect } from "react-redux";
const Dashboard = ({ user }) => {
  useEffect(() => {
    //CDM
    socket.connect();
    socket.on("notification", (data) => {
      console.log(data);
    });
    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    socket.emit("online", user.userId);
  }, [user]);
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
};
const mapState = (state) => ({
  user: state.auth,
});
export default connect(mapState)(Dashboard);
