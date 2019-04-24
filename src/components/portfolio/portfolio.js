import React, { Component } from 'react'

export default class Portfolio extends Component {
  render() {
    return (

                <section id="portfolio">
                  <div className="row">
                    <div className="twelve columns collapsed">
                      <h1>Check Out Some of My Work.</h1>
                      {/* portfolio-wrapper */}
                      <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                        <div className="columns portfolio-item">
                          <div className="item-wrap">
                            <a href="#modal-01" title=''>
                              <img alt='' src="images/portfolio/edudeckstitle.png" />
                              <div className="overlay">
                                <div className="portfolio-item-meta">
                                  <h5>EduDecks</h5>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div> {/* item end */}
                        <div className="columns portfolio-item">
                          <div className="item-wrap">
                            <a href="#modal-02" title=''>
                              <img alt='' src="images/portfolio/FRealXPtitle.png" />
                              <div className="overlay">
                                <div className="portfolio-item-meta">
                                  <h5>FRealXP</h5>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div> {/* item end */}
                        <div className="columns portfolio-item">
                          <div className="item-wrap">
                            <a href="#modal-05" title=''>
                              <img alt='' src="images/portfolio/trelloapptitle.jpg" />
                              <div className="overlay">
                                <div className="portfolio-item-meta">
                                  <h5>Trello App</h5>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div> {/* item end */}
                        <div className="columns portfolio-item">
                          <div className="item-wrap">
                            <a href="#modal-06" title=''>
                              <img alt='' src="images/portfolio/dogpicstitle.jpg" />
                              <div className="overlay">
                                <div className="portfolio-item-meta">
                                  <h5>Dog Rating</h5>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div> {/* item end */}
                      </div> {/* portfolio-wrapper end */}
                    </div> {/* twelve columns end */}
                    {/* Modal Popup
                    --------------------------------------------------------------- */}
                    <div id="modal-01" className="popup-modal mfp-hide">
                      <img className="scale-with-grid" src="images/portfolio/modals/edudeckstitle.png" alt='' />
                      <div className="description-box">
                        <h4>EduDecks</h4>
                        <p>EduDecks is a study application where a user can create decks of multiple choice questions.
                        </p>
                        <span className="categories"><i className="fa fa-tag" />React, Web development</span>
                      </div>
                      <div className="link-box">
                        <a href="http://www.edudecks.com">EduDecks.com</a>
                        <a className="popup-modal-dismiss" href="https://github.com/Dallin-H/edudecks">GitHub</a>
                        <a className="popup-modal-dismiss">Close</a>
                      </div>
                    </div>{/* modal-01 End */}
                    <div id="modal-02" className="popup-modal mfp-hide">
                      <img className="scale-with-grid" src="images/portfolio/modals/FRealXPtitle.png" alt='' />
                      <div className="description-box">
                        <h4>FRealXP</h4>
                        <p>FRealXP allows a user to select from various challenges and earn experience points. 
                        </p>
                        <span className="categories"><i className="fa fa-tag" />React, Web Development</span>
                      </div>
                      <div className="link-box">
                        <a href="https://github.com/frealxpgroup/frealxp">GitHub</a>
                        <a className="popup-modal-dismiss">Close</a>
                      </div>
                    </div>{/* modal-02 End */}
                    <div id="modal-05" className="popup-modal mfp-hide">
                      <img className="scale-with-grid" src="images/portfolio/modals/trelloapptitle.jpg" alt='' />
                      <div className="description-box">
                        <h4>Trello App</h4>
                        <p>A todo list with 4 columns where the individual items can move between the columns.</p>
                        <span className="categories"><i className="fa fa-tag" />React, Web Development</span>
                      </div>
                      <div className="link-box">
                        <a href="https://github.com/Dallin-H/systemtechchallenge">GitHub</a>
                        <a className="popup-modal-dismiss">Close</a>
                      </div>
                    </div>{/* modal-05 End */}
                    <div id="modal-06" className="popup-modal mfp-hide">
                      <img className="scale-with-grid" src="images/portfolio/modals/dogpicstitle.jpg" alt='' />
                      <div className="description-box">
                        <h4>Dog Rating</h4>
                        <p>A dog api sends random images and when liked by the user the image is saved. User can also choose a random image by breed.</p>
                        <span className="categories"><i className="fa fa-tag" />React, Web Development</span>
                      </div>
                      <div className="link-box">
                        <a href="https://github.com/Dallin-H/dogpics">GitHub</a>
                        <a className="popup-modal-dismiss">Close</a>
                      </div>
                    </div>{/* modal-06 End */}
                  </div> {/* row End */}
                </section>
    )
  }
}
