import React from "react";


function Contact(props){
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <br/>
                    <h2>Keep In Touch</h2>
                    <hr></hr>
                </div>
            </div>

            <div className="row row-content align-item-center">
                <div className="col-sm-4">
                    <h5>Location</h5>
                    <address>
                        SF Bay Area
                    </address>
                </div>
                <div className="col">
                    <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/sophiathehuskyprincess"><i className="fa fa-instagram" /> sophiathehuskyprincess</a>
                    <br/>
                    <a className="btn btn-social-icon btn-linkedin" href="http://linkedin.com/in/engineermian"><i className="fa fa-linkedin" /> Mian Wang, MS, PE</a> <br/>
                    <a role="button" className="btn btn-link" href="mailto:mianwangpe@gmail.com"><i className="fa fa-envelope-o" /> mianwangpe@gmail.com</a>
                </div>
            </div>
        </div>
        
    );
}

export default Contact;

