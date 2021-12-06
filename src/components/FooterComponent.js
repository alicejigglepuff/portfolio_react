import React from 'react';
import { Link } from 'react-router-dom'; 

function Footer(props) {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">             
                    <div className="col-4 col-sm-2 offset-1">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/directory">Directory</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="col-6 col-sm-3 text-center">
                        <h5>Social</h5>
                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/sophiathehuskyprincess"><i className="fa fa-instagram" /></a>{' '}
                        <a className="btn btn-social-icon btn-linkedin" href="http://linkedin.com/in/engineermian"><i className="fa fa-linkedin" /></a> 
                        <a className="btn btn-social-icon btn-github" href="http://github.com/alicejigglepuff/"><i className="fa fa-github" /></a> 
                    </div>
                    <div className="col-sm-4 text-center">
                        <a role="button" className="btn btn-link" href="mailto:notreal@notreal.co"><i className="fa fa-envelope-o" /> mianwangpe@gmail.com</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;