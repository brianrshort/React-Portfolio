import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { Education } from "./Pages/Education";
import { Projects } from "./Pages/Projects";
import { About } from "./Pages/About";
import { Interests } from "./Pages/Interests";

import { EdContext } from "./Utils/EdContext";

const styles =     {
  backgroundColor: "#95BDB7"
}

function App() {
  return (
    <Router>
      <div style={styles}>
      <Header />
      <Switch>
        <Route path="/education" exact component={Education }/>
        <Route path="/" exact component={About} />
        <Route path="/interests" exact component={Interests} />
        <Route path="/projects" exact component={Projects} />
      </Switch>
      <Footer /> 
      </div>
    </Router>
  );
}

export default App;
