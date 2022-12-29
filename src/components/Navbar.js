import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav
          className={`navbar navbar-expand-lg sticky-top navbar-${
            this.props.mode ? "dark" : "light"
          } bg-${this.props.mode ? "dark" : "light"}`}
        >
          <Link className="navbar-brand" to="/">
            NewsArena
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              {/* <Link className="nav-item nav-link" to="/">Home <span className="sr-only">(current)</span></Link> */}
              <Link className="nav-item nav-link" to="/business">
                Business
              </Link>
              <Link className="nav-item nav-link" to="/entertainment">
                Entertainment
              </Link>
              <Link className="nav-item nav-link " to="/sports">
                Sports
              </Link>
              <Link className="nav-item nav-link" to="/health">
                Health
              </Link>
              <Link className="nav-item nav-link " to="/science">
                Science
              </Link>
              <Link className="nav-item nav-link " to="/technology">
                Technology
              </Link>
              {/* <Link className="nav-item nav-link " to="/general">General</Link> */}
              <form className="d-flex space">
                <div onClick={this.props.handleClick.bind(this)}>
                  {this.props.mode ? (
                    <svg 
                      
                      height="20px"
                      width="20px"
                      cursor="pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 384 512"
                    >
                      <path d="M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z" />
                    </svg>
                  ) : (
                    <svg
                      height="20px"
                      width="20px"
                      cursor="pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 384 512"
                    >
                      <path d="M112.1 454.3c0 6.297 1.816 12.44 5.284 17.69l17.14 25.69c5.25 7.875 17.17 14.28 26.64 14.28h61.67c9.438 0 21.36-6.401 26.61-14.28l17.08-25.68c2.938-4.438 5.348-12.37 5.348-17.7L272 415.1h-160L112.1 454.3zM192 0C90.02 .3203 16 82.97 16 175.1c0 44.38 16.44 84.84 43.56 115.8c16.53 18.84 42.34 58.23 52.22 91.45c.0313 .25 .0938 .5166 .125 .7823h160.2c.0313-.2656 .0938-.5166 .125-.7823c9.875-33.22 35.69-72.61 52.22-91.45C351.6 260.8 368 220.4 368 175.1C368 78.8 289.2 .0039 192 0zM288.4 260.1c-15.66 17.85-35.04 46.3-49.05 75.89h-94.61c-14.01-29.59-33.39-58.04-49.04-75.88C75.24 236.8 64 206.1 64 175.1C64 113.3 112.1 48.25 191.1 48C262.6 48 320 105.4 320 175.1C320 206.1 308.8 236.8 288.4 260.1zM176 80C131.9 80 96 115.9 96 160c0 8.844 7.156 16 16 16S128 168.8 128 160c0-26.47 21.53-48 48-48c8.844 0 16-7.148 16-15.99S184.8 80 176 80z" />
                    </svg>
                  )}
                </div>
              </form>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
