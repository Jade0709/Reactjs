import React from 'react'
import { Link, Router } from 'react-router-dom'
import { createBrowserHistory } from 'history';
import './Footer.css'
import {MdLocationOn} from 'react-icons/md'
import {FaPhoneSquare} from 'react-icons/fa';
import {SiGmail} from 'react-icons/si';
import {CgWebsite} from  'react-icons/cg';
import {IconContext} from 'react-icons'

import { Button } from '../Button'

function Footer() {
    
    const history = createBrowserHistory();
    return (
        
        <div className="footer-container">
                <section className="footer-subscription">
                    <p className="footer-subscription-heading">
                            Join the Adventure newsletter to receive luxury sneakers.
                    </p>
                    <p className="footer-subscription-text">
                            You can unsubscribe at any time.
                    </p>
                    <div className="input-areas">
                        <form>
                            <input type="email" name="email" placeholder="Your email" className="footer-input"/>
                            <Button>Subscribe</Button>
                            
                    </form>
                    </div>
                </section>
                
                <div className="footer-links">
                    <IconContext.Provider value = {{color:"cornflowerblue",size:"2rem"}}>
                        <div className="footer-link-wrapper">
                            <div className="footer-link-items">
                                <h2 className="contact">Contact us at</h2>
                                <ul>
                                    <li><MdLocationOn/>{" "}Nguyen Huu Tho, Tan Phong Ward, District 7, Ho Chi Minh City</li> <br/>
                                    <li><FaPhoneSquare/>{" "}0837 755 035</li> <br/>
                                    <li><SiGmail/>{" "}tonducthang@tdtu.edu.vn</li> 
                                    <a href="https://www.tdtu.edu.vn/"><CgWebsite/>{" "} https://www.tdtu.edu.vn/</a>

                                </ul>
                            </div>
                            <div className="footer-link-items">
                                <h2>Timework</h2>
                                <p>6:00Am - 5:30Pm</p>
                        </div>
                    </div>
                    </IconContext.Provider>
                   <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                            <h2>Social media</h2>
                            <Router path="/" history={history}>
                                <Link to='/'>Instagram</Link>
                                <Link to='/'>Facebook</Link>
                                <Link to='/'>Youtube</Link>
                                <Link to='/'>Twitter</Link>
                            </Router>
                        </div>   
                    </div> 
                </div>
                <section className="social-media">
                    <div className="social-media-wrap">
                        <div className="footer-logo">
                            <Router path="/" history={history}>
                            <Link to ='/'className="social-logo">
                                ToiBanGiay<i className="fab fa-react"></i>
                            </Link>
                            </Router>
                        </div>
                        <small className="website-rights">ToiBanGiay © 2020</small>
                        <div className="social-icons">
                            <Router path="/" history={history}>
                                <Link to ='/'className="social-icon-link facebook" 
                                target="_blank"
                                aria-label="Facebook">
                                    <i className="fab fa-facebook-f"></i>
                                </Link>
                            </Router>
                            <Router path="/" history={history}>
                                <Link to ='/'className="social-icon-link instagram" 
                                target="_blank"
                                aria-label="Instagram">
                                    <i className="fab fa-instagram"></i>
                                </Link>
                            </Router>
                            <Router path="/" history={history}>
                                <Link to ='/'className="social-icon-link youtube" 
                                target="_blank"
                                aria-label="Youtube">
                                    <i className="fab fa-youtube"></i>
                                </Link>
                            </Router>
                            <Router path="/" history={history}>
                                <Link to ='/'className="social-icon-link twitter" 
                                target="_blank"
                                aria-label="Instagram">
                                    <i className="fab fa-twitter"></i>
                                </Link>
                            </Router>
                        </div>     
                    </div>
                </section>
        </div>
    )
}

export default Footer
