import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/page1" component={Page1} />
          <Route exact path="/page2" component={Page2} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
