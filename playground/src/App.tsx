import React from "react";
import {configureStore} from "redux-starter-kit";
import {Provider} from "react-redux";
import rootReducer from "./redux/rootReducer";
import { Route} from "react-router-dom";
import Topbar from "./chunks/Topbar";
import {Container} from "@material-ui/core";
import Sidebar from "./chunks/Sidebar";

const App: React.FC = () => {
  return (
    <div style={{height:"100%"}}>
      <Topbar/>
      <Sidebar/>
    </div>
  )
};

export default App;