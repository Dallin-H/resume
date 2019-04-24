import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (

        <footer>
            <div className="row">
            <div className="twelve columns">
                <ul className="social-links">
                <li><a href="https://www.facebook.com/dallin.hyde"><i className="fa fa-facebook" /></a></li>
                <li><a href="https://www.linkedin.com/in/dallinhyde/"><i className="fa fa-linkedin" /></a></li>
                <li><a href="https://github.com/Dallin-H"><i className="fa fa-github" /></a></li>
                <li><a href="mailto:dallinhyde@gmail.com"><i className="fa fa-envelope" /></a></li>
                </ul>
                <ul className="copyright">
                <li>© Copyright 2014 CeeVee</li>
                <li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>   
                </ul>
            </div>
            <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
            </div>
        </footer>

    )
  }
}
