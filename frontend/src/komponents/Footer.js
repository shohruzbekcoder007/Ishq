import React from 'react';

function Footer() {
  return (
    <>
      <footer>
        <div className="footer-area footer-padding fix">
              <div className="container">
                  <div className="row d-flex justify-content-between">
                      <div className="col-xl-5 col-lg-5 col-md-7 col-sm-12">
                          <div className="single-footer-caption">
                              <div className="single-footer-caption">
                                  <div className="footer-logo">
                                      <a href="index.html"><img src="assets/img/logo/logo2_footer.png" alt=""/></a>
                                  </div>
                                  <div className="footer-tittle">
                                      <div className="footer-pera">
                                          <p>Suscipit mauris pede for con sectetuer sodales adipisci for cursus fames lectus tempor da blandit gravida sodales  Suscipit mauris pede for con sectetuer sodales adipisci for cursus fames lectus tempor da blandit gravida sodales  Suscipit mauris pede for sectetuer.</p>
                                      </div>
                                  </div>
                                  <div className="footer-social">
                                      <a href="#"><i className="fab fa-twitter"></i></a>
                                      <a href="#"><i className="fab fa-instagram"></i></a>
                                      <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-4  col-sm-6">
                          <div className="single-footer-caption mt-60">
                              <div className="footer-tittle">
                                  <h4>Newsletter</h4>
                                  <p>Heaven fruitful doesn't over les idays appear creeping</p>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-5 col-sm-6">
                          <div className="single-footer-caption mb-50 mt-60">
                              <div className="footer-tittle">
                                  <h4>Instagram Feed</h4>
                              </div>
                              <div className="instagram-gellay">
                                  <ul className="insta-feed">
                                      <li><img src="assets/img/post/instra1.jpg" alt=""/></li>
                                      <li><img src="assets/img/post/instra2.jpg" alt=""/></li>
                                      <li><img src="assets/img/post/instra3.jpg" alt=""/></li>
                                      <li><img src="assets/img/post/instra4.jpg" alt=""/></li>
                                      <li><img src="assets/img/post/instra5.jpg" alt=""/></li>
                                      <li><img src="assets/img/post/instra6.jpg" alt=""/></li>
                                      {/* <li><img src="assets/img/post/instra6.jpg" alt=""/></li> */}
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
            <div className="footer-bottom-area">
                <div className="container">
                    <div className="footer-border">
                        <div className="row d-flex align-items-center justify-content-between">
                            <div className="col-lg-6">
                                
                            </div>
                            <div className="col-lg-6">
                                <div className="footer-menu f-right">
                                    <ul>                             
                                        <li>Terms of use Privacy Policy</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>
  );
}

export default Footer;
