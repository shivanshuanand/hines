var NewComponent = React.createClass({
    render: function() {
      return (
        <div>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="stylesheet" href="sign-up.css" />
          <title>Hines</title>
          <div className="background">
            <form className="form">
              <div className="form-top">
                <h1 className="brand">Hines</h1>
                <h2 className="sign-in">Welcome onboard</h2>
                <p className="oneline">Please upload your signature and set your password</p>
              </div>
              <div className="name-input">
                <label htmlFor="exampleInputEmail1">Full Name</label>
                <input type="email" className="input" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
              <div className="email-input">
                <label htmlFor="exampleInputPassword1">EMAIL ADDRESS</label>
                <input type="password" className="input" id="exampleInputPassword1" />
              </div>
              <div className="department-input">
                <label htmlFor="exampleInputPassword1">DEPARTMENT</label>
                <input type="password" className="input" id="exampleInputPassword1" />
              </div>
              <div className="password-input">
                <label htmlFor="exampleInputPassword1">SET PASSWORD</label>
                <input type="password" className="input" id="exampleInputPassword1" />
                <input type="password" className="input" id="exampleInputPassword1" />
              </div>
              <div className="form-checkbox">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="check-label" htmlFor="exampleCheck1">UPLOAD SIGNATURE</label>
              </div>
              <button type="submit" className="btn">SIGN IN</button>
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