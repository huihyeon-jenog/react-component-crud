import React, { Component } from "react";

export default class Form extends Component {
  changeName = (e) => {
    this.props.changeNameInput(e.target.value);
  };
  changePhone = (e) => {
    this.props.changePhoneInput(e.target.value);
  };
  changeEmail = (e) => {
    this.props.changeEmailInput(e.target.value);
  };

  addItem = () => {
    const { nameInput, phoneInput, emailInput } = this.props;
    this.props.handleAdd(nameInput, phoneInput, emailInput);
  };
  saveItem = () => {
    this.props.handleSave();
  };
  cancelChangeItem = () => {
    this.props.handleCancel();
  };

  render() {
    const { nameInput, phoneInput, emailInput } = this.props;
    return (
      <div className="form">
        <div className="text__field">
          <label className="title">Name:</label>
          <input
            className="text"
            value={nameInput}
            onChange={this.changeName}
          />
        </div>

        <div className="text__field">
          <label className="title">Phone:</label>
          <input
            className="text"
            value={phoneInput}
            onChange={this.changePhone}
          />
        </div>

        <div className="text__field">
          <label className="title">
            <span className="text--red">*</span>Email:
          </label>
          <input
            className="text"
            value={emailInput}
            onChange={this.changeEmail}
          />
        </div>

        <div className="text__field">
          <div type="submit" className="btn--add" onClick={this.addItem}>
            추가
          </div>
          <div type="submit" className="btn--save" onClick={this.saveItem}>
            수정
          </div>
          <div
            type="cancel"
            className="btn--cancel"
            onClick={this.cancelChangeItem}
          >
            취소
          </div>
        </div>
      </div>
    );
  }
}
