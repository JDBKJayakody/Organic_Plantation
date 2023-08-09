import React, { Component } from "react";
import axios from "axios";

export default class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ename: "",
      address: "",
      nic: "",
      position: "",
      salary: "",
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    // if(value){
    //     alert("Please Enter Value");
    // }

    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { ename, address, nic, position, salary } = this.state;
    console.log(this.state, "state");
    if (
      ename === "" ||
      address === "" ||
      nic === "" ||
      position === "" ||
      salary === ""
    ) {
      console.log("Inside if");
      alert("All Details Needed");
      return;
    }
    const data = {
      ename: ename,
      address: address,
      nic: nic,
      position: position,
      salary: salary,
    };
    console.log(data);
    axios.post("http://localhost:5000/post/save", data).then((res) => {
      if (res.data.success) {
        this.setState({
          ename: "",
          address: "",
          nic: "",
          position: "",
          salary: "",
        });
      }
    });
  };
  render() {
    return (
      <div className="col-md-8 mt-4 mx-auto">
        <h1 className="h3 mb-3 font-weight-normal">Add New Employee</h1>
        <form className="needs- validation" noValidate>
          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>Name</label>
            <input
              type="text"
              className="form-control"
              name="ename"
              value={this.state.ename}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>Address</label>
            <input
              type="text"
              className="form-control"
              name="address"
              value={this.state.address}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>NIC</label>
            <input
              type="text"
              className="form-control"
              name="nic"
              value={this.state.nic}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>Position</label>
            <input
              type="text"
              className="form-control"
              name="position"
              value={this.state.position}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>Salary</label>
            <input
              type="number"
              className="form-control"
              name="salary"
              value={this.state.salary}
              onChange={this.handleInputChange}
            />
          </div>
          {/* <div class="alert alert-primary" role="alert">
            This is a primary alert—check it out!
        </div> */}

          <button
            className="btn btn-primary"
            type="submit"
            style={{ marginTop: "15px" }}
            onClick={this.onSubmit}
          >
            &nbsp; Save
          </button>
        </form>
      </div>
    );
  }
}
