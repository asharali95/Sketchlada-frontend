import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import "./LoginFormMUI.css";
import { login } from "./../../Redux/auth/authActions";
import { connect } from "react-redux";

const LoginFormMUI = ({ login }) => {
  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email, password });
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          id="standard-basic"
          label="Email Address"
          variant="standard"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="standard-basic"
          label="password"
          variant="standard"
        />
        <Button type="submit" sx={{ my: 2, color: "black", display: "block" }}>
          Login
        </Button>
      </Box>
    </div>
  );
};

const actions = {
  login,
};

export default connect(null, actions)(LoginFormMUI);
