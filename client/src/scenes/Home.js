import React, { Component } from 'react';
import {Text} from '../components'

class Home extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row hero-image">
          <Text center green big>Hello</Text>
          <div className="mobile-card text-align-center">
          </div>
          <div className="col-xs-12 col-sm-4 margin-vertical-lg">
            <div className="homepage-card text-align-center">
              <h3 className="text-align-center">Show me tasty recipes!</h3>
              <a
                className="google sign-in-button margin-vertical-sm"
                href="/auth/google">
                <div className="content-wrapper">
                  <div className="logo-wrapper">
                    <img src="https://developers.google.com/identity/images/g-logo.png" />
                  </div>
                  <span className="text-container">
                    <span>Sign in with Google</span>
                  </span>
                </div>
              </a>
              <br />
              <a
                className="facebook sign-in-button margin-vertical-md"
                href="#">
                <div className="content-wrapper">
                  <div className="logo-wrapper">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_facebook.png" />
                  </div>
                  <span className="text-container">
                    <span>Sign in with Facebook</span>
                  </span>
                </div>
              </a>
              <br />
              <hr style={{ width: '240px', color: "#616161" }} />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12" style={{ marginLeft: '0.25em' }}>
            <Text green huge>The ultimate webiste for foodies</Text>
            <h3>1. Find and save recipes you love (placeholder)</h3>
            <h3 className="margin-vertical-sm">
              2. Share your recipes to be enjoyed by people all over the world
            </h3>
            <h3 className="margin-vertical-sm">
              3. Buy and sell extra portions from people in your area
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
