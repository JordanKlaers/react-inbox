import React from 'react';
import '../index.css';
// import {button, i} from 'react-materialize';

class oneMessage extends React.Component {

    constructor(props) {
        super(props);
        // console.log(this.props.message,  "from one message");
        this.state = {
          message: this.props.message
        }
        // console.log(this.state.message, "holla");
        //   messageSelect: "",
        //   star: "fa-star-o",
        //   labels: ["dev", "personal"]
        // }
        // console.log(this.state);
    }
    //
    //
    // readMessageStatus =()=>{
    //   console.log(this.state.readUnread);
    //   if(this.state.readUnread == "unread"){
    //     this.setState({
    //       readUnread: "read"
    //     })
    //   }
    // }
    //
    //
    // messageSelectStatus = ()=>{
    //   console.log('trying to select');
    //   if(this.state.messageSelect == ""){
    //     this.setState({
    //       messageSelect: "selected"
    //     })
    //   }
    //   else if (this.state.messageSelect == "selected"){
    //     this.setState({
    //       messageSelect: ""
    //     })
    //   }
    // }
    //
    // starStatus = () => {
    //   if(this.state.star == "fa-star-o"){
    //     this.setState({
    //       star: "fa-star"
    //     })
    //   }
    //   else if (this.state.star == "fa-star"){
    //     this.setState({
    //       star: "fa-star-o"
    //     })
    //   }
    // }
    //



    render() {
        return (
            <div className={`row message  ${this.state.message.read ? "read" : "unread"}  ${this.state.message.selected ? "selected" : ""}`}>
                <div className="col-xs-1">
                </div>
                <div className="col-xs-1">
                    <div className="row">
                        <div className="col-xs-2">
                            <input type="checkbox" onClick={(event)=> this.props.selectedFunction(event, this.state.message)} checked={this.props.message.selected}/>
                        </div>
                        <div className="col-xs-2">
                            <i className={`star fa ${this.state.message.starred ? "fa-star-o" : "fa-star"}`} onClick={(event)=> this.props.starFunction(event, this.state.message)}></i>
                        </div>
                    </div>
                </div>
                <div className="col-xs-10">
                  {this.state.message.labels.map((lable, index)=><span className="label label-warning" key={index}>{lable}</span>)}
                    <a onClick={ ()=> this.props.readFunction(this.state.message)}>
                        {this.state.message.subject}
                    </a>
                </div>
            </div>
        );
    }
}

export default oneMessage;
