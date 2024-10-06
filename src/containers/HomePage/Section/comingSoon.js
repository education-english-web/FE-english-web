import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Preloader from "../../../components/Preloader/Preloader";
import Timer from "../../../components/Countdown/Timer";
import Optin from "../../../components/Optin/Optin";

import './comingSoon.scss';  // Import file SCSS ở đây
class About extends Component {

  render() {
    return (
<div className="App">
  <div className="container">
    <h1>
      <br />
      Coming Soon
    </h1>
    <Timer />
    
    <div className="subscribe">
      <input className="email" type="email" placeholder="Your email" />
      <button className="btn-subscribe">SUBSCRIBE</button>
    </div>
    <Optin />
    <Preloader />
  </div>
  
  {/* Di chuyển phần này xuống cuối */}
  <footer className="footer">
    <p>&copy;2024 Edu Team</p>
  </footer>
</div>

    );
  }


}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};



export default connect(mapStateToProps, mapDispatchToProps)(About);
