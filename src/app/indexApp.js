import "../css/special.css";
import "../css/assembly.css";

import React from "react";
import ReactDOM from "react-dom";
import Index from "../containers/Index";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Index />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("app"));
