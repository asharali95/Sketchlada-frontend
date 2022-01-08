import React, { useEffect } from "react";
import socket from "../../socket";

const Dashboard = () => {
  useEffect(() => {
    //CDM
    socket.connect();
  }, []);
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
};

export default Dashboard;
