import React, { Component } from "react";
import axios from "axios"
import { BounceLoader } from "react-spinners";
import Modal from "./../components/Modal";

class AppCard extends Component {
  
  render(){
    return (                    
    <>
      <div className="col-sm-4">
        <div style={{ padding: "20px" }}>
          <h5>
            {this.props.post.message.name ? this.props.post.message.name : "unknown"}
          </h5>
          <img
            style={{ height: "10vw" }}
            src={
              this.props.post.message.imageUrl
                ? this.props.post.message.imageUrl
                : "https://via.placeholder.com/200"
            }
            onError={ev =>
              (ev.target.src =
                "http://www.stleos.uq.edu.au/wp-content/uploads/2016/08/image-placeholder-350x350.png")
            }
          />
          <p>{this.props.post.message.description}</p>
          {this.props.post.message.url && (
            <p>
              <a href={this.props.post.message.url} target="_blank">
                website
              </a>
            </p>
          )}
          
          <Modal
            app={this.props.post.message}
            threeBox={this.props.threeBox}
            space={this.props.space}
            box={this.props.box}
            usersAddress={this.props.usersAddress}
          />
        </div>
      </div>
      {(this.props.i + 1) % 3 == 0 && <div className="w-100"></div>}
    </>)
  }
  
}

export default class Home extends Component {
  render() {
    return (
      <div className="container" style={{ textAlign: "center" }}>
        <h1 className="brand-font" style={{ fontSize: "4rem" }}>
        Artist Dash Board
        </h1>
        <p>List of your submitted work</p>
        <div className="row" style={{ marginTop: "10%" }}>
          {(!this.props.posts || this.props.posts.length < 1) && (
            <div style={{ width: "60px", margin: "auto" }}>
              <BounceLoader color={"blue"} />
            </div>
          )}
          <div className="container">
            <div className="row">
              {this.props.posts &&
                this.props.posts.map((post, i) => {
                  return (
                      <AppCard 
                        post={post} 
                        key={i}
                        threeBox={this.props.threeBox}
                        space={this.props.space}
                        box={this.props.box}
                        usersAddress={this.props.usersAddress}
                        i={i} />
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
