import React, { Component } from 'react'

export default class About extends Component {

        render() {
          return (
      
            <section id="about">
              <div className="row">
                <div className="three columns">
                  <img className="profile-pic" src="images/profilepic.jpg" alt='' />
                </div>
                <div className="nine columns main-col">
                  <h2>About Me</h2>
                  <p> 
                  My top talents include communication, achievement, learning and responsibility. I work well on a team, and get things done on time, and under budget! I have a contagious enthusiasm, and I love to solve problems. I attended Dev Mountain to learn about web development, and have since been working on sites for small businesses in the Utah area. When I am not coding you will find me with my wife and daughters! We are often camping, fishing, or going to a movie. Even though my family thinks it is boring, I enjoy golfing too!
                  </p>
                  <div className="row">
                    <div className="columns contact-details">
                      <h2>Contact Details</h2>
                      <p className="address">
                        <span>Dallin Hyde</span><br />
                        <span>Lehi, Utah area </span><br />
                        <span>dallinhyde@gmail.com</span><br />
                        <span>(801)358-9049</span><br />
                      </p>
                    </div>
                    <div className="columns download">
                      <p>
                        <a href="/images/dallinhyderesume.pdf" className="button"><i className="fa fa-download" />Download Resume</a>
                      </p>
                    </div>
                  </div> 
                </div> 
              </div>
            </section> 

          );
        }
}
