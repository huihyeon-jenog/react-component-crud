import React, { Component } from "react";
import TableRow from "./components/TableRow";
import Form from "./components/Form";
import "./App.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.timer = 1;
  }
  state = {
    nameInput: "",
    phoneInput: "",
    emailInput: "",
    list: [
      {
        no: "1",
        name: "User1",
        phone: "02-1234567",
        email: "aaa@mail.com",
        del: false,
        modify: false,
      },
      {
        no: "2",
        name: "User2",
        phone: "02-1234567",
        email: "ccc@mail.com",
        del: false,
        modify: false,
      },
      {
        no: "3",
        name: "User3",
        phone: "02-1234567",
        email: "ddd@mail.com",
        del: false,
        modify: false,
      },
      {
        no: "4",
        name: "User4",
        phone: "02-1234567",
        email: "eee@mail.com",
        del: false,
        modify: false,
      },
    ],
  };

  componentDidMount() {
    this.timer2 = 2;
    console.log("this timer", this.timer, this.timer2);
    console.log("this", this);
  }

  changeNameInput = (e) => {
    this.setState({ nameInput: e });
  };
  changePhoneInput = (e) => {
    this.setState({ phoneInput: e });
  };
  changeEmailInput = (e) => {
    this.setState({ emailInput: e });
  };

  handleAdd = (name, phone, email) => {
    const validPhone = /[0-9]{2}-[0-9]{7}/;
    const vaildMail = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
    if (validPhone.test(phone) === false || vaildMail.test(email) === false) {
      return alert("잘못된 데이터 형식입니다.");
    } else if (email === "") {
      return alert("이메일을 입력하세요");
    } else {
      let item = {
        no: this.state.list.length + 1,
        name: name,
        phone: phone,
        email: email,
        del: false,
        modify: false,
      };
      let newList = this.state.list.concat(item);
      this.setState({ list: newList });
      this.handleCancel();
    }
  };

  handleDel = (no) => {
    const list = this.state.list.filter((item) => {
      if (item.no !== no) return item;
    });
    this.setState({ list });
  };

  handleModify = (no) => {
    const newList = this.state.list.filter((item) => {
      if (item.no === no) {
        item.modify = !item.modify;
        return item;
      }
    });
    this.setState({
      nameInput: newList[0].name,
      phoneInput: newList[0].phone,
      emailInput: newList[0].email,
    });
  };

  handleCancel = () => {
    this.setState({
      nameInput: "",
      phoneInput: "",
      emailInput: "",
    });
  };

  handleSave = () => {
    const list = this.state.list.map((item) => {
      if (item.modify === true) {
        return (item = {
          no: item.no,
          name: this.state.nameInput,
          phone: this.state.phoneInput,
          email: this.state.emailInput,
          del: item.del,
          modify: !item.modify,
        });
      } else {
        return item;
      }
    });

    this.setState({ list });
    this.handleCancel();
  };
  render() {
    const { list } = this.state;
    const currList = list.map((item) => {
      return (
        <TableRow
          key={item.no}
          no={item.no}
          name={item.name}
          phone={item.phone}
          email={item.email}
          del={item.del}
          modify={item.modify}
          handleDel={this.handleDel}
          handleModify={this.handleModify}
        />
      );
    });
    return (
      <div className="App">
        {/* CRUD */}
        <h1>Main UI</h1>
        <div className="table">
          <div className="table__header">
            <div className="tr">
              <div className="th"> No.</div>
              <div className="th"> Name</div>
              <div className="th"> Phone</div>
              <div className="th">
                <span className="text--red">*</span>Email
              </div>
              <div>Action</div>
            </div>
          </div>
          <div className="table__body">{currList}</div>
        </div>
        <h1>Modification UI</h1>
        <Form
          {...this.state}
          changeNameInput={this.changeNameInput}
          changePhoneInput={this.changePhoneInput}
          changeEmailInput={this.changeEmailInput}
          handleAdd={this.handleAdd}
          handleSave={this.handleSave}
          handleCancel={this.handleCancel}
        />
      </div>
    );
  }
}
