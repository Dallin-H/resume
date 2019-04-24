import React, { Component } from 'react'

export default class Resume extends Component {
  render() {
    return (
        
                <section id="resume">
                  {/* Education
                  ----------------------------------------------- */}
                  <div className="row education">
                    <div className="three columns header-col">
                      <h1><span>Education</span></h1>
                    </div>
                    <div className="nine columns main-col">
                      <div className="row item">
                        <div className="twelve columns">
                          <h3>Dev Mountain</h3>
                          <p className="info">Web Development <span>•</span> <em className="date">April 2019</em></p>
                          <p>
                              Led a team of student developers to design and create a full stack web application.
                          </p>
                        </div>
                      </div> {/* item end */}
                    </div> {/* main-col end */}
                  </div> {/* End Education */}

                  {/* Skills
                ----------------------------------------------- */}
                  <div className="row skill">
                    <div className="three columns header-col">
                      <h1><span>Skills</span></h1>
                    </div>
                    <div className="nine columns main-col">
                      <p>
                          React | Redux | JavaScriptES6 | HTML5 | CSS3 | Postgres | Node | Express
                      </p>

                    </div> {/* main-col end */}
                  </div> {/* End skills */}
                </section> 

    )
  }
}
