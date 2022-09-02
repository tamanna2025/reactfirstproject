import './App.css';
import admin from "./images/aa.png";
import email from "./images/email.png";
import pass from "./images/pass.ico";

function App() {
  return (
    <div className="main">
      <div className="sub-main">
        <div>
          <div className="imgs">
            <div className="container-images">
              <img src={admin} alt="admin" className="profile"/>
            </div>
          </div>
          <div>
            <h1>LOGIN PAGE</h1>
            <div>
              <img src={email} alt="email" className="email"/>
              <input type="text" placeholder="Email" className="name"/>
            </div>
            <div className="space">
              <img src={pass} alt="password" className="email"/>
              <input type="password" placeholder="Password" className="name"/>
            </div>
            <div className="buttonspace">
            <button>Login</button>
            </div>
            <div>
              <p><a href="a">Forgot password?</a> Or <a href="a">Sign Up</a></p>


            </div>
          </div>
        </div>
      </div>
    {/*  <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
  </header>*/}
    </div>
  );
}

export default App;
