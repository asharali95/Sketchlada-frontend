import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import sketchladalogo from "../../assets/sketchlada-logo2.png";
import { logout } from "../../Redux/auth/authActions";
import history from "../../history";
const pages = ["gallery", "arts", "messages"];

const NavbarMUI = ({ user, logout }) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      color=""
      sx={{ height: "var(--navbar-height) !important" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            noWrap
            component="div"
            onClick={(e) => {
              e.preventDefault();
              history.push("/");
            }}
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            <img src={sketchladalogo} style={{ maxWidth: "150px" }} />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { color: "black", xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            <img src={sketchladalogo} style={{ maxWidth: "150px" }} />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Link to={`/${page}`} style={{ textDecoration: "none" }}>
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "black", display: "block" }}
                >
                  {page}
                </Button>
              </Link>
            ))}
          </Box>
          {user?._id ? (
            <h3
              style={{
                fontWeight: "400",
                fontFamily: "Roboto",
                paddingRight: "10px",
                color: "#7da4a0",
              }}
            >
              Welcome <b>{user?.username}</b> !
            </h3>
          ) : (
            ""
          )}
          <Box sx={{ flexGrow: 0 }}>
            {user._id ? (
              <Link to="/dashboard" style={{ textDecoration: "none" }}>
                <Button sx={{ my: 2, color: "black", display: "inline-block" }}>
                  Dashboard
                </Button>
              </Link>
            ) : (
              <Link to="/auth" style={{ textDecoration: "none" }}>
                <Button
                  sx={{
                    my: 2,
                    color: "black",
                    display: "inline-block",
                  }}
                >
                  Login
                </Button>
              </Link>
            )}
            {user._id && (
              <Button
                sx={{ my: 2, color: "black", display: "inline-block" }}
                onClick={logout}
              >
                logout
              </Button>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
var mapState = (state) => ({
  user: state?.auth,
});

var actions = {
  logout,
};
export default connect(mapState, actions)(NavbarMUI);
