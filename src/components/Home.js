import React, { Component } from "react";
import axios from "axios";
import footer from "./App.css";
import Logo from "./images/Logo.jpg";
import col from "./App.css";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    this.retrievePosts();
  }

  retrievePosts() {
    axios.get("http://localhost:5000/posts").then((res) => {
      if (res.data.success) {
        this.setState({
          posts: res.data.existingPosts,
        });

        console.log(this.state.posts);
      }
    });
  }

  onDelete = (id) => {
    axios.delete(`http://localhost:5000/post/delete/${id}`).then((res) => {
      alert("Delete Sucesfully");
      this.retrievePosts();
    });
  };

  filterData(posts, searchKey) {
    const result = posts.filter((post) =>
      post.ename.toLowerCase().includes(searchKey)
    );
    this.setState({ posts: result });
  }
  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;
    axios.get("http://localhost:5000/posts").then((res) => {
      if (res.data.success) {
        this.filterData(res.data.existingPosts, searchKey);
      }
    });
  };
  render() {
    return (
      <div className="container-fluid" style={{ backgroundColor: "#808080" }}>
        <div className="container fluid"></div>
        <div className="row">
          <div className="col-lg-9 mt-2 mb-2">
            <h4>All Employees</h4>
          </div>
          <div className="col-lg-3 mt-2 mb-2">
            <input
              className="form-control"
              type="search"
              name="searchQuery"
              placeholder="Search"
              onChange={this.handleSearchArea}
            ></input>
          </div>
        </div>

        <table
          className="table table-bordered"
          style={{ marginTop: "40px", backgroundColor: "#b0e0e6" }}
        >
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Name</th>
              <th scope="col">Address</th>
              <th scope="col"> NIC</th>
              <th scope="col">Position</th>
              <th scope="col">Salary (Rs.)</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((posts, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>
                  <a
                    href={`/post/${posts._id}`}
                    style={{ textDecoration: "none" }}
                  >
                    {posts.ename}
                  </a>
                </td>
                {/* <td>{posts.ename}</td> */}
                <td>{posts.address}</td>
                <td>{posts.nic}</td>
                <td>{posts.position}</td>
                <td>{posts.salary}</td>

                <td>
                  <a className="btn btn-warning" href={`/edit/${posts._id}`}>
                    <i className="fas fa-edit"></i>&nbsp;Edit
                  </a>
                  &nbsp;
                  {/* <a className="btn btn-primary" href={`/view/${posts._id}`}>
                <i className="fas fa-edit"></i>&nbsp;View
              </a> */}
                  &nbsp;
                  <a
                    className="btn btn-danger"
                    href="#"
                    onClick={() => this.onDelete(posts._id)}
                  >
                    <i className="fas fa-alt"></i>&nbsp;Delete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <button className="btn btn-success">
          <a href="/add" style={{ textDecoration: "none", color: "white" }}>
            Create New Employee
          </a>
        </button>

        <footer class="footer-distributed">
          <div class="footer-left">
            {<img src={Logo} width="50" height="50" />}
            <h3>
              Green<span>Lanka</span>
            </h3>

            <p class="footer-links">
              <a href="#" class="link-1">
                Home
              </a>

              <a href="#">Blog</a>

              <a href="#">Pricing</a>

              <a href="#">About</a>

              <a href="#">Faq</a>

              <a href="#">Contact</a>
            </p>

            <p class="footer-company-name">Green Lanka © 2022</p>
          </div>

          <div class="footer-center">
            <div>
              <i class="fa fa-map-marker"></i>
              <p>
                <span>444/2nd mailpost,</span> Gregory park road, Nuwaraeliya
              </p>
            </div>

            <div>
              <i class="fa fa-phone"></i>
              <p>+94522235018</p>
            </div>

            <div>
              <i class="fa fa-envelope"></i>
              <p>
                <a href="mailto:support@company.com">GreenLanka@company.com</a>
              </p>
            </div>
          </div>

          <div class="footer-right">
            <p class="footer-company-about">
              <span>About the company</span>
              Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
              euismod convallis velit, eu auctor lacus vehicula sit amet.
            </p>

            <div class="footer-icons">
              <a href="#">
                <i class="fa fa-facebook"></i>
              </a>
              <a href="#">
                <i class="fa fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fa fa-linkedin"></i>
              </a>
              <a href="#">
                <i class="fa fa-github"></i>
              </a>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
