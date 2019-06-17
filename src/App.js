import React from "react";
import { BrowserRouter as Router, Route, } from "react-router-dom";

import Carousel from "./com/Carousel";

function App() {
  return (
    <Router>
      <div>
        <Route path="/:id" component={Child} />
      </div>
    </Router>
  );
}

function Child({ match }) {
  const page = match.params.id ? parseInt(match.params.id) : 0;
  console.log(page);
  return <Carousel page={page} />;
}

export default App;
