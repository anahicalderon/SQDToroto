import "./App.css";
import Map from "./Map";
import Navbar from "./Navbar";
import Footer from "./Footer";
import LagunaOm from "./LagunaOm";
import NuevoBecal from "./NuevoBecal";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/">
            <Map />
          </Route>
          <Route exact path="/LagunaOm">
            <LagunaOm />
          </Route>
          <Route exact path="/NuevoBecal">
            <NuevoBecal />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
