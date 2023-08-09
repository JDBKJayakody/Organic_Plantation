import React, { Component } from "react";
import axios from "axios";
//import { withRouter } from "react-router";

export default class EditPost extends Component {
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

    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  onUpdate = (e) => {
    //const id = this.props.match.params.id;
    e.preventDefault();
    console.log(e);

    //const id = this.props.match.params.id;
    // console.log(window.location.pathname.split('/edit/')[1]);
    const id = window.location.pathname.split("/edit/")[1];
    //console.log(id);
    //console.log(params);
    const { ename, address, nic, position, salary } = this.state;

    const data = {
      ename: ename,
      address: address,
      nic: nic,
      position: position,
      salary: salary,
    };
    console.log(data);
    axios.put(`http://localhost:5000/post/update/${id}`, data).then((res) => {
      if (res.data.success) {
        alert("Update Sucessfully");
        this.setState({
          ename: res.data.put.ename,
          address: res.data.put.address,
          nic: res.data.put.nic,
          position: res.data.put.position,
          salary: res.data.put.salary,
        });
      }
    });
    //e.target.reset();
    this.setState({
      ename: "",
      address: "",
      nic: "",
      position: "",
      salary: "",
    });
  };

  componentDidMount() {
    console.log(window.location.pathname.split("/edit/")[1]);
    const id = window.location.pathname.split("/edit/")[1];

    axios.get(`http://localhost:5000/post/${id}`).then((res) => {
      if (res.data.success) {
        this.setState({
          ename: res.data.post.ename,
          address: res.data.post.address,
          nic: res.data.post.nic,
          position: res.data.post.position,
          salary: res.data.post.salary,
        });
        console.log(this.state.post);
      }
    });
  }
  render() {
    // const { location, history } = this.props;
    // console.log(window.location.pathname.split('/edit/')[1]);
    return (
      <div className="col-md-8 mt-4 mx-auto">
        <h1 className="h3 mb-3 font-weight-normal">Update Employee Details</h1>
        <form
          onSubmit={this.onUpdate.bind(this)}
          className="needs- validation"
          noValidate
        >
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
              type="text"
              className="form-control"
              name="salary"
              value={this.state.salary}
              onChange={this.handleInputChange}
            />
          </div>

          <button
            className="btn btn-success"
            type="submit"
            style={{ marginTop: "15px" }}
          >
            &nbsp;Update
          </button>
        </form>
      </div>
    );
  }
}
