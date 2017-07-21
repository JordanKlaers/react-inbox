import React from 'react';
import '../index.css';
import OneMessage from './oneMessage';
// import {button, i} from 'react-materialize';


class Messages extends React.Component {


  render() {
    return (
        <div>
          {this.props.messageList.map(message=><OneMessage key={message.id} message={message} readFunction={this.props.readFunction} starFunction={this.props.starFunction} selectedFunction={this.props.selectedFunction} unreadCountFunction={this.props.unreadCountFunction}/>)}
        </div>
    );
  }
}


export default Messages;
