import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Links from "./Links";
import Socials from "./Socials";
import Footer from "./Footer";
import Header from "./Header";
import Contact from "./Contact/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/hng-task1-fixed">
            <Header />
            <Links />
            <Socials />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
