import "./App.css";

import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Auth from "./Pages/Auth/Auth";
import Arts from "./Pages/Arts/Arts";
import Artists from "./Pages/Artists/Artists";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Art from "./Pages/Art/Art";
// import Navbar from "./Components/Navbar/Navbar";
import NavbarMUI from "./MUI-Components/Navbar-MUI/NavbarMUI";
import Gallery from "./Pages/Gallery/Gallery";
import Messages from "./Pages/Messages/Messages";
function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <NavbarMUI />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/auth" component={Auth} />
        <Route path="/arts" component={Arts} exact />
        <Route path="/arts/:artId" component={Art} />
        <Route path="/artists" component={Artists} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/messages" component={Messages} />
      </Switch>
    </div>
  );
}

export default App;
