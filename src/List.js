import React, {Component} from "react";
import Form from "./Form";
import {Item} from "./Item";

export default class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bills: [],
    };
  }

  handleDelete = (id) => {
    this.setState((prevState) => {
      const newState = prevState.bills.filter((bills) => bills.id !== id);
      return {
        bills: newState,
      };
    });
  };

  addNewBill = (data) => {
    console.log(data);
    this.setState((prevState) => ({
      bills: [...prevState.bills, data],
    }));
  };

  render() {
    const {bills} = this.state;
    const billList = bills.map((bill) => {
      return <Item bills={bill.bills} handleonDelete={this.handleDelete} />;
    });
    return (
      <div>
        <Form handleonSubmit={this.addNewBill} />
        {billList}
      </div>
    );
  }
}
