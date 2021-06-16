import React from 'react';

function Header() {
  return (
    <>
      <header>
        <div className="header-area">
              <div className="main-header ">
                  <div className="header-top black-bg d-none d-md-block">
                    <div className="container">
                        <div className="col-xl-12">
                              <div className="row d-flex justify-content-between align-items-center">
                                  <div className="header-info-right">
                                      <ul className="header-social">    
                                          <li><a href="#11"><i className="fab fa-twitter"></i></a></li>
                                          <li><a href="#22"><i className="fab fa-instagram"></i></a></li>
                                        <li> <a href="#33"><i className="fab fa-pinterest-p"></i></a></li>
                                      </ul>
                                  </div>
                              </div>
                        </div>
                    </div>
                  </div>
                  <div className="header-mid d-none d-md-block">
                    <div className="container">
                          <div className="row d-flex align-items-center">
                              <div className="col-xl-3 col-lg-3 col-md-3">
                                  <div className="logo">
                                      <a href="index.html"><img src="assets/img/logo/logo.png" alt=""/></a>
                                  </div>
                              </div>
                              <div className="col-xl-9 col-lg-9 col-md-9">
                                  <div className="header-banner f-right ">
                                      <img src="assets/img/hero/header_card.jpg" alt=""/>
                                  </div>
                              </div>
                          </div>
                    </div>
                  </div>
                <div className="header-bottom header-sticky">
                      <div className="container">
                          <div className="row align-items-center">
                              <div className="col-xl-10 col-lg-10 col-md-12 header-flex">
                                      <div className="sticky-logo">
                                          <a href="index.html"><img src="assets/img/logo/logo.png" alt=""/></a>
                                      </div>
                                  <div className="main-menu d-none d-md-block">
                                      <nav>                  
                                          <ul id="navigation">    
                                              <li><a href="index.html">Home</a></li>
                                              <li><a href="categori.html">Category</a></li>
                                              <li><a href="about.html">About</a></li>
                                              <li><a href="latest_news.html">Latest News</a></li>
                                              <li><a href="contact.html">Contact</a></li>
                                              <li><a href="#">Pages</a>
                                                  <ul className="submenu">
                                                      <li><a href="elements.html">Element</a></li>
                                                      <li><a href="blog.html">Blog</a></li>
                                                      <li><a href="single-blog.html">Blog Details</a></li>
                                                      <li><a href="details.html">Categori Details</a></li>
                                                  </ul>
                                              </li>
                                          </ul>
                                      </nav>
                                  </div>
                              </div>             
                              
                              <div className="col-12">
                                  <div className="mobile_menu d-block d-md-none"></div>
                              </div>
                          </div>
                      </div>
                </div>
              </div>
        </div>
      </header>
    </>
  );
}

export default Header;
