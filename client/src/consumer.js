import React, { Component } from "react";
import {UserContext} from './providers';

export default class Consumer extends Component {
  render() {
    const {children} = this.props;

    return (
      <UserContext.Consumer>
        {({id,userName, idChanged}) => {

          return React.Children.map(children, child =>
            React.cloneElement(child, {
              currentUserId: id,
              currentUserName: userName,
              idChanged,
            })
          );
        }}
      </UserContext.Consumer>
    );
  }
}
