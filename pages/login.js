var NewComponent = React.createClass({
    render: function() {
      return (
        <div>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="stylesheet" href="login.css" />
          <title>Hines</title>
          <div className="background">
            <form className="form">
              <div className="form-top">
                <h1 className="brand">Hines</h1>
                <h5 className="sign-in">Sign in</h5>
                <p className="oneline">Use your work email to get access </p>
              </div>
              <div className="email-input">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="input" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
              <div className="password-input">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="input" id="exampleInputPassword1" />
              </div>
              <div className="form-checkbox">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="check-label" htmlFor="exampleCheck1">Remember Passworrd</label>
              </div>
              <button type="submit" className="btn">SIGN IN</button>
              <div>
                <p className="bottom-line">Can’t access!&nbsp;&nbsp;<span className="bottom-line-part">Forgot Password</span>
                </p>
              </div>
            </form>
          </div>
          <div className="footer">
            <footer>Copyright © 2010-2020 Hines Securities, Inc. All rights reserved. Hines and the Hines logo are
              registered trademarks of Hines Interests Limited Partnership.</footer>
          </div>
        </div>
      );
    }
  });