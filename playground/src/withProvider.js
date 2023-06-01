import React from "react";
import {connect, Provider} from 'react-redux';

const rc = React.createElement;

export default function (store, stateToProps){
  return c => props => {
    const connectedC = connect(stateToProps)(c);
    const innerElement = rc(connectedC, props, null);
    return rc (Provider, {store: store}, innerElement);
  }
}