import React from 'react'
var NewComponent = React.createClass({
    render: function() {
      return (
        <div>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="stylesheet" href="reset-password.css" />
          <title>Hines</title>
          <div className="background">
            <form className="form">
              <div className="form-top">
                <h1 className="brand">Hines</h1>
                <h2 className="sign-in">Reset Password</h2>
                <p className="oneline">Enter your email id to get reset password link.</p>
              </div>
              <div className="email-input">
                <label htmlFor="exampleInputEmail1">EMAIL ADDRESS</label>
                <input type="email" className="input" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <button type="submit" className="btn">SUBMIT</button>
              </div></form>
            <div className="footer">
              <footer>Copyright © 2010-2020 Hines Securities, Inc. All rights reserved. Hines and the Hines logo are
                registered trademarks of Hines Interests Limited Partnership.</footer>
            </div>
          </div></div>
      );
    }
  });