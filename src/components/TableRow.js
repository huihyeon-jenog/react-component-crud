import React, { Component } from "react";

export default class TableRow extends Component {
  delItem = () => {
    this.props.handleDel(this.props.no);
  };
  modifyItem = () => {
    this.props.handleModify(this.props.no);
  };
  render() {
    const { no, name, phone, email } = this.props;
    return (
      <div className="tr">
        <div className="td" data-title="No.">
          {no}
        </div>
        <div className="td" data-title="Name">
          {name}
        </div>
        <div className="td" data-title="Phone">
          {phone}
        </div>
        <div className="td" data-title="Email">
          <a href="aaa@mail.com">{email}</a>
        </div>
        <div className="td" data-title="Action">
          <div className="btn--delete" onClick={this.delItem}>
            Delete
          </div>
          <div className="btn--modify" onClick={this.modifyItem}>
            Modify
          </div>
        </div>
      </div>
    );
  }
}
