import React from 'react';
import '../index.css';
// import {button, i} from 'react-materialize';


class ToolBar extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      selectMessages: "fa-minus-square-o"
    }
    console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <div className="row toolbar">
          <div className="col-md-12">
            <p className="pull-right">
              <span className="badge badge">2</span>
              unread messages
            </p>

            <button className="btn btn-default" onClick={() => this.props.selectedAllFunction(this.props.messageList)}>
              <i className={"fa fa-check-square-o"} ></i>
              {/* fa-check-square-o */}
            </button>

            <button className="btn btn-default" onClick={()=> this.props.markAsReadFunction(this.props.messageList)}>
              Mark As Read
            </button>

            <button className="btn btn-default" onClick={()=> this.props.markAsUnreadFunction(this.props.messageList)}>
              Mark As Unread
            </button>

            <select className="form-control label-select" onChange={(event)=>this.props.addLabelFunction(this.props.messageList, event)}>
              <option>Apply label</option>
              <option value="dev">dev</option>
              <option value="personal">personal</option>
              <option value="gschool">gschool</option>
            </select>

            <select className="form-control label-select">
              <option>Remove label</option>
              <option value="dev">dev</option>
              <option value="personal">personal</option>
              <option value="gschool">gschool</option>
            </select>

            <button className="btn btn-default">
              <i className="fa fa-trash-o"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ToolBar;
