import React, { Component } from "react";

// const currentUser = {id: "", userName:""};

export const UserContext = React.createContext();

export const UserConsumer = UserContext.Consumer;

export default class Provider extends Component {
  state = {id: "",
          userName:"",
          idChanged: (id,userName) => {
            this.setState({id, userName})
  }}
render() {
  return (
    <UserContext.Provider value={{
    ...this.state
    }}> {this.props.children}
     </UserContext.Provider>);
}
}
