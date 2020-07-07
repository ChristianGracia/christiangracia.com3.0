import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { HomePage } from "./pages/home-page/home-page.component";
// import { NavMenu } from "./components/nav/nav.component";
// import { MainPage } from "./pages/main/main.component";
// import { ProjectsPage } from "./pages/projects/projects.component";
// import { AboutPage } from "./pages/about/about.component";
// import { ContactPage } from "./pages/contact/contact.component";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={HomePage} />
      </Router>
    </div>
  );
};

export default App;

// <Router>
//   <Route exact path="/main" component={MainPage} />
// </Router>
//   <Router>
//     <Route exact path="/about" component={AboutPage} />
//   </Router>
//   <Router>
//     <Route exact path="/contact" component={ContactPage} />
//   </Router>
//   <Router>
//     <Route exact path="/projects" component={ProjectsPage} />
//   </Router>
