import React, { Component } from 'react';
import './App.css';
import ToolBar from './components/ToolBar';
import Messages from './components/Messages.js';

class App extends Component {

  constructor(props) {
    super(props);
      // console.log(this.props.message,  "from one message");
    this.state = {
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
  ],
  count: 4
    }
  }
//   state = {
//
// }
bulkCheckbox = (messages) => {
  var selection = messages.filter(function(msg){
    return msg.selected
  })
  if(selection.length === messages.length){
    return "fa fa-check-square-o"
  }
  else if(selection.length > 0){
    return "fa fa-minus-square-o"

  }
  else {
    return "fa fa-square-o"
  }
}


unreadCount =(messages) => {
  var count = 0
  for(let i=0; i<messages.length; i++){
    if(messages[i].read === true){
      count ++
    }
  }
  this.setState({
    count: count
  })
}

  deleteMessage = (messages) => {
    var whichAreSelected = [];
    for(let i=0; i<messages.length; i++){           // loops through to see if they are selected or not
      if(messages[i].selected){
        whichAreSelected.push(i)
      }
    }
    console.log(whichAreSelected, "which are selected");
    for(let j=0; j<whichAreSelected.length; j++){
      messages.splice(whichAreSelected[j],1);
    }
    console.log(messages);
    this.changeReadStatus(messages);
    this.setState({
      messages: messages
    })
  }

  changeReadStatus = (message) => {
    message.read = true;
    this.unreadCount(this.state.messages);
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
    else if(numberSelected === 0){
      console.log("none are selected");
      for(let i=0; i<messages.length; i++){
        messages[i]["selected"] = true;
      }
    }
    this.setState({
      messages: this.state.messages
    })
  }


  markAsRead = (messages)=>{
    console.log("mark them");
    var whichAreSelected = [];
    for(let i=0; i<messages.length; i++){           // loops through to see if they are selected or not
      if(messages[i].selected){
        whichAreSelected.push(i)
      }
    }
    for(let i=0; i<whichAreSelected.length; i++){
      messages[whichAreSelected[i]].read = true;
    }
    console.log(whichAreSelected);
    this.unreadCount(this.state.messages)
  }


  markAsUnread = (messages)=>{
    var whichAreSelected = [];
    for(let i=0; i<messages.length; i++){           // loops through to see if they are selected or not
      if(messages[i].selected){
        whichAreSelected.push(i)
      }
    }
    for(let i=0; i<whichAreSelected.length; i++){
      messages[whichAreSelected[i]].read = false;
    }
    console.log(whichAreSelected);
    this.unreadCount(this.state.messages)
  }

  addLabel = (messages, event)=>{
    var whichAreSelected = [];
    console.log(event.target.value);
    if(event.target.value == "Apply label"){
      return;
    }
    // console.log(event.target.value);
    // console.log(typeof(event.target.value));
    var arrayOfLabels =[];
    for(let i=0; i<messages.length; i++){           // loops through to see if they are selected or not
      if(messages[i].selected){
        whichAreSelected.push(i)
      }
    }
    // console.log(whichAreSelected);
    for(let j=0; j<whichAreSelected.length; j++){
      arrayOfLabels.push(messages[whichAreSelected[j]].labels)
    }
    console.log(arrayOfLabels);
    for(let k=0; k<arrayOfLabels.length; k++){
      if(!arrayOfLabels[k].includes(event.target.value)){
        arrayOfLabels[k].push(event.target.value)
      }
      else if(arrayOfLabels[k].length ===0){
        arrayOfLabels[k] = [event.target.value]
      }
    }
    console.log(messages);
    this.setState({
      messages: messages
    })
  }

  removeLabel = (messages, event)=>{
    var whichAreSelected = [];
    // console.log(event.target.value);
    // console.log(typeof(event.target.value));
    var arrayOfLabels =[];
    for(let i=0; i<messages.length; i++){           // loops through to see if they are selected or not
      if(messages[i].selected){
        whichAreSelected.push(i)
      }
    }
    // console.log(whichAreSelected);
    for(let j=0; j<whichAreSelected.length; j++){
      arrayOfLabels.push(messages[whichAreSelected[j]].labels)
    }
    console.log(arrayOfLabels);
    for(let k=0; k<arrayOfLabels.length; k++){
      if(arrayOfLabels[k].includes(event.target.value)){       // this.splice(where, howmany)
        let index = arrayOfLabels[k].indexOf(event.target.value)
        arrayOfLabels[k].splice(index, 1);
      }
    }
    console.log(messages);
    this.setState({
      messages: messages
    })
  }




  render() {
    return (
      <div className="App">
        <h2> Welcome to React</h2>
        <ToolBar selectedAllFunction={this.toggleSelectedAll} messageList={this.state.messages} markAsReadFunction={this.markAsRead} markAsUnreadFunction={this.markAsUnread} addLabelFunction={this.addLabel} deleteMessageFunction={this.deleteMessage}  count={this.state.count} bulkCheckboxFunction={this.bulkCheckbox}/>
        <Messages messageList={this.state.messages} readFunction={this.changeReadStatus} starFunction={this.toggleStar} selectedFunction={this.toggleSelected} unreadCountFunction={this.unreadCount}/>
      </div>
    );
  }
}

export default App;
