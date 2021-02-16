import React, {Component} from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bills: "",
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();

    this.props.handleonSubmit(this.state);
    this.setState({
      bills: "",
    });
  };

  handleChange = (e) => {
    this.setState({
      bills: e.target.value,
    });
  };
  render() {
    return (
      <form>
        <label>New Bill:</label>
        <input
          type="text"
          value={this.state.bills}
          onChange={this.handleChange}
        />
        <button type="submit" onClick={this.handleSubmit}>
          Submit
        </button>
      </form>
    );
  }
}
