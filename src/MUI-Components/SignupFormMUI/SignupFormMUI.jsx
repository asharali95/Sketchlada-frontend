import { Button, MenuItem, Select, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { connect } from "react-redux";
import { signup } from "./../../Redux/auth/authActions";
import "./SignupFormMUI.css";

const SignupFormMUI = ({ signup }) => {
  var [name, setName] = useState("");
  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");
  var [passwordConfirm, setPasswordConfirm] = useState("");
  var [role, setRole] = useState("artist");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && password && passwordConfirm != "") {
      signup({ name, email, password, passwordConfirm, role });
    } else {
      alert("fill complete form");
    }
  };
  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        Validate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          value={name}
          onChange={(e) => setName(e.target.value)}
          id="standard-basic"
          label="Username"
          variant="standard"
        />
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
          type="password"
          label="Password"
          variant="standard"
        />
        <TextField
          id="standard-basic"
          label="Confirm Password"
          variant="standard"
          type="password"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />
        {/* ----------------------------------- */}
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          label="Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <MenuItem value="artist">Artist</MenuItem>
          <MenuItem value="buyer">Buyer</MenuItem>
        </Select>
        <Button type="submit" sx={{ my: 2, color: "black", display: "block" }}>
          Signup
        </Button>
      </Box>
    </div>
  );
};
const actions = {
  signup,
};
export default connect(null, actions)(SignupFormMUI);
