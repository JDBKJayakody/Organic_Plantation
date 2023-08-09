import React, { Component } from "react";
import axios from "axios";

export default class PostDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {},
      // ename:"",
      // address:"",
      // nic:"",
      // position:"",
      // salary:""
    };
  }

  // handleInputChange = (e) =>{
  //     const{name,value} = e.target;

  //     this.setState({
  //         ...this.state,
  //         [name]:value
  //     })
  // }

  // onUpdate =(e) =>{
  //     //const id = this.props.match.params.id;
  //     e.preventDefault();
  //     //console.log(e);

  //     //const id = this.props.match.params.id;
  //     // console.log(window.location.pathname.split('/edit/')[1]);
  //      const id = window.location.pathname.split('/view/')[1];
  //      //console.log(id);
  //     //console.log(params);
  //     const {ename,address,nic,position,salary} = this.state;

  //     const data={
  //         ename:ename,
  //         address:address,
  //         nic:nic,
  //         position:position,
  //         salary:salary
  //     }
  //     console.log(data)
  //     axios.put(`http://localhost:5000/post/update/${id}`,data).then((res)=>{
  //         if(res.data.success){
  //             alert("Update Sucessfully")
  //             this.setState({
  //                 ename:res.data.put.ename,
  //                 address:res.data.put.address,
  //                 nic:res.data.put.nic,
  //                 position:res.data.put.position,
  //                 salary:res.data.put.salary

  //             }

  //             )
  //         }
  //     })

  // }

  componentDidMount() {
    console.log(window.location.pathname.split("/post/")[1]);
    const id = window.location.pathname.split("/post/")[1];

    axios.get(`http://localhost:5000/post/${id}`).then((res) => {
      if (res.data.success) {
        this.setState({
          post: res.data.post,
          // ename:res.data.post.ename,
          // address:res.data.post.address,
          // nic:res.data.post.nic,
          // position:res.data.post.position,
          // salary:res.data.post.salary
        });
        console.log(this.state.post);
      }
    });
  }
  render() {
    // const { location, history } = this.props;
    // console.log(window.location.pathname.split('/edit/')[1]);

    const { ename, address, nic, position, salary } = this.state.post;
    return (
      <div style={{ marginTop: "20px" }}>
        <h4>{ename}</h4>
        <hr />

        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Address</th>
              <th scope="col">NIC</th>
              <th scope="col">Position</th>
              <th scope="col">Salary</th>
            </tr>
          </thead>
          <tbody>
            {/* <th scope="row"></th> */}

            <td>{address}</td>
            <td>{nic}</td>
            <td>{position}</td>
            <td>{salary}</td>
            {/* <dl className="row">
                <dt className="col-sm-3">Address</dt>
                <dd className="col-sm-9">{address}</dd>
                <dt className="col-sm-3">NIC</dt>
                <dd className="col-sm-9">{nic}</dd>
                <dt className="col-sm-3">Position</dt>
                <dd className="col-sm-9">{position}</dd>
                <dt className="col-sm-3">Salary</dt>
                <dd className="col-sm-9">{salary}</dd>

            </dl> */}
          </tbody>
        </table>
        {/* <dl className="row">
                <dt className="col-sm-3">Address</dt>
                <dd className="col-sm-9">{address}</dd>
                <dt className="col-sm-3">NIC</dt>
                <dd className="col-sm-9">{nic}</dd>
                <dt className="col-sm-3">Position</dt>
                <dd className="col-sm-9">{position}</dd>
                <dt className="col-sm-3">Salary</dt>
                <dd className="col-sm-9">{salary}</dd>

            </dl> */}
      </div>
    );
  }
}

// <div className="col-md-8 mt-4 mx-auto">
//     <h1 className="h3 mb-3 font-weight-normal">Create New Employee</h1>
//     <form className="needs- validation" noValidate>
//         <div className="form-group" style={{marginBottom:'15px'}}>
//             <label style={{marginBottom:'5px'}}>Name</label>
//             <input type="text" className="form-control" name="ename" value={this.state.ename} onChange={this.handleInputChange}/>
//         </div>

//         <div className="form-group" style={{marginBottom:'15px'}}>
// <label style={{marginBottom:'5px'}}>Address</label>
// <input type="text" className="form-control" name="address" value={this.state.address} onChange={this.handleInputChange}/>
// </div>

// <div className="form-group" style={{marginBottom:'15px'}}>
// <label style={{marginBottom:'5px'}}>NIC</label>
// <input type="text" className="form-control" name="nic" value={this.state.nic} onChange={this.handleInputChange}/>
// </div>

// <div className="form-group" style={{marginBottom:'15px'}}>
// <label style={{marginBottom:'5px'}}>Position</label>
// <input type="text" className="form-control" name="position" value={this.state.position} onChange={this.handleInputChange}/>
// </div>
// <div className="form-group" style={{marginBottom:'15px'}}>
// <label style={{marginBottom:'5px'}}>Salary</label>
// <input type="text" className="form-control" name="salary" value={this.state.salary} onChange={this.handleInputChange}/>
// </div>

//     </form>

// </div>
