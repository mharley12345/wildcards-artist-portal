import React, { Component } from "react";
const axios = require('axios');
const fs = require('fs');
const blankState = { name: "", selectedFile:null,imageUrl:"",ipfsHash:null,description: "" };
export default class ArtworkForm extends Component {
  state = blankState;

  handleChange = event => {
    this.setState(Object.assign({ [event.target.name]: event.target.value 
    }));
  };
handleFileChange = event => {
  this.setState({ selectedFile: event.target.files[0],loaded: 0,})}
  async validateFormFields() {
    console.log("to do - validiate form");
  }

  handleSubmit = async event => {
    event.preventDefault();
    this.validateFormFields();
    this.props.savePost({
      name: this.state.name,
       
       selectedFile: this.state.selectedFile,
       imageUrl: this.state.imageUrl,
      description: this.state.description
    });
    this.setState(Object.assign({},blankState,{submitted:true}))
  
  };
//  sendImage = event =>{


//   const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;

//   //we gather a local file for this example, but any valid readStream source will work here.
//   let data = new FormData();
//   data.append('file',event);



//   return axios.post(url,
//       data,
//       {
//           maxContentLength: 'Infinity', //this is needed to prevent axios from erroring out with large files
//           headers: {
//               'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
//               'pinata_api_key':'1cad8cf049a3376c6582',
//               'pinata_secret_api_key':  '1bc1fb34c46177b6dafcf69e2ecb5a2ee1b6effd202c627c414f4d40ae08a18a'
//           }
//       })
//       .then((resp)=>{this.setState(Object.assign({},blankState,{submitted:true,ipfsHash:resp.data.IpfsHash}))})
   
   
// //       .catch((err) =>{console.log(err)})
//  }
  render() {
    return (
      <div style={{ maxWidth: "500px", margin: "auto" }}>
        {!this.state.submitted && (
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                className="form-control"
                aria-describedby="appName"
                placeholder="Enter App Name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </div>
        
            <div className="form-group">
              <label htmlFor="appImage">Image URL:</label>
              <input
                type="text"
                name="imageUrl"
                className="form-control"
                aria-describedby="application image"
                placeholder="Add Image by URL"
                value={this.state.appImage}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description:</label>
              <input
                type="text"
                name="description"
                className="form-control"
                aria-describedby="description"
                placeholder="Add a description"
                value={this.state.description}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="image">Upload</label>
              <input
                type="file"
                name="file"
                className="form-control"
                aria-describedby="url"
                placeholder="Upload Image"
                value={this.state.artImage}
                onChange={this.handleFileChange}
              />
            </div>
            <input type="submit" value="Submit" className="btn btn-primary" />
          </form>
        )}
        {this.state.submitted && <div className="jumbotron">
          <h1>Thank you for submiting</h1>
          <button className="btn btn-secondary"  onClick={()=>(this.setState({submitted : false}))}>Add More </button>
           </div>}
      </div>
    );
  }
}


