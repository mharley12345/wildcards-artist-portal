import React, {Component} from 'react';
import ArtworkForm from '../components/ArtworkForm';
import { BounceLoader } from 'react-spinners';

export default class AddArtwork extends Component {
    state = {
      thread: null
    };
  
    savePost = async formData => {
      formData.account = this.props.accounts[0];
      await this.props.thread.post(formData);
      this.props.getAppsThread();
    };
    render() {
      return (
        <div className="container">
          <h1 style={{ textAlign: "center" }}>Submit your Art Work!</h1>
          {!this.props.thread && (
            <div style={{ width: "100px", margin: "auto" }}>
              <BounceLoader color={"blue"} />
            </div>
          )}
          {this.props.thread && <ArtworkForm savePost={this.savePost} />}
        </div>
      );
    }
  }