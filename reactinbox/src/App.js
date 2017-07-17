import React, { Component } from 'react';
import './App.css';
import ToolBar from './components/ToolBar';
import Messages from './components/Messages.js';

class App extends Component {

  state = {
    messages: [
  {
    "id": 1,
    "subject": "You can't input the protocol without calculating the mobile RSS protocol!",
    "read": false,
    "starred": true,
    "labels": ["dev", "personal"],
    "selected": false
  },
  {
    "id": 2,
    "subject": "connecting the system won't do anything, we need to input the mobile AI panel!",
    "read": false,
    "starred": false,
    "selected": true,
    "labels": [],
    "selected": false
  },
  {
    "id": 3,
    "subject": "Use the 1080p HTTP feed, then you can parse the cross-platform hard drive!",
    "read": false,
    "starred": true,
    "labels": ["dev"],
    "selected": false
  },
  {
    "id": 4,
    "subject": "We need to program the primary TCP hard drive!",
    "read": true,
    "starred": false,
    "selected": true,
    "labels": [],
    "selected": false
  },
  {
    "id": 5,
    "subject": "If we override the interface, we can get to the HTTP feed through the virtual EXE interface!",
    "read": false,
    "starred": false,
    "labels": ["personal"],
    "selected": false
  },
  {
    "id": 6,
    "subject": "We need to back up the wireless GB driver!",
    "read": true,
    "starred": true,
    "labels": [],
    "selected": false
  },
  {
    "id": 7,
    "subject": "We need to index the mobile PCI bus!",
    "read": true,
    "starred": false,
    "labels": ["dev", "personal"],
    "selected": false
  },
  {
    "id": 8,
    "subject": "If we connect the sensor, we can get to the HDD port through the redundant IB firewall!",
    "read": true,
    "starred": true,
    "labels": [],
    "selected": false
  }
]
  }


  changeReadStatus = (message) => {
    message.read = true;
    this.setState({
      messages: this.state.messages
    })
  }

  toggleStar = (event, message) => {
    event.persist();
    message.starred = !message.starred
    this.setState({
      messages: this.state.messages
    })
  }

  toggleSelected = (event, message) => {
    event.persist();
    message.selected = !message.selected
    this.setState({
      messages: this.state.messages
    })
  }

  toggleSelectedAll = (messages) => {
    console.log(messages.length);
    var numberSelected = 0;
    for(let i=0; i<messages.length; i++){           // loops through to see if they are selected or not
      if(messages[i].selected){
        numberSelected ++;
      }
      console.log(numberSelected);
    }
    if(numberSelected > 0){
      console.log("all are selected");
      for(let i=0; i<messages.length; i++){
        messages[i]["selected"] = false;
      }
    }
    else if(numberSelected == 0){
      console.log("none are selected");
      for(let i=0; i<messages.length; i++){
        messages[i]["selected"] = true;
      }
    }
    this.setState({
      messages: this.state.messages
    })
  }

  render() {
    return (
      <div className="App">
        <h2> Welcome to React</h2>
        <ToolBar selectedAllFunction={this.toggleSelectedAll} messageList={this.state.messages}/>
        <Messages messageList={this.state.messages} readFunction={this.changeReadStatus} starFunction={this.toggleStar} selectedFunction={this.toggleSelected}/>
      </div>
    );
  }
}

export default App;
