import React, { Component } from "react";
import {Card, Nav} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import '../App.css'

class About extends Component {
    render(){
        return(
            <div className="container">
                <div className="row row-padding">
                    <h2><i className="fa fa-briefcase" />Experience</h2>
                </div>
                <div className="row">
                    <div className="col-3">
                        <img className="aboutPhoto" src="../assets/images/cal_water_logo.jpg" alt="California Water Service" />
                    </div>
                    <div className="col d-flex headerContent">
                        <div className="align-items-center">
                            <h3>California Water Service Company</h3>
                            <p>2020 - Present</p>
                            <p>Project Engineer</p>
                            <p>
                                <ul className="left-align">
                                    <li>Analyze large datasets using Python to evaluate the design and criticality of distribution system elements, such as pumps, tanks, and pipes.</li>
                                    <li>Build and calibrate a hydraulic model for a distribution system.</li>
                                    <li>Managed multi-million dollar projects through planning-design-construction.</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row row-end row-padding">
                    <div className="col d-flex headerContent">
                        <div className="align-items-center">
                            <h3>Valley Water</h3>
                            <p>2015 - 2020</p>
                            <p>Graduate Intern, Assistant Engineer</p>
                            <ul className="left-align">
                                    <li>Developed and maintained internal website using JavaScript for Water Quality Unit with functions such as site search, interactive process view, and real-time unit task manager. </li>
                                    <li>Built an ios quiz application with Swift which was used by the District team to prepare for the 2019 Top Ops Competition. It generates 20 random questions each time and calculates scores of users.</li>
                                    <li>Developed a data normalization spreadsheet for reverse osmosis pilot study using VBA to create macro and automize data analyses on a click of a button. </li>
                                    <li>Managed a reverse osmosis pilot study.</li>
                                    <li>Created cost-saving guidelines to implement raw water pH adjustment by
                                    analyzing past 10 years’ data, modeling and visualizing data with Excel and R.
                                    Presented the study at American Water Works Association Annual Fall
                                    Conference.</li>
                                </ul>
                            
                        </div>
                    </div>
                    <div className="col-3">
                        <img className="aboutPhoto" src="../assets/images/valley_water.png" alt="Valley Water" />
                    </div>
                </div>

                <div className="row row-padding">
                    <h2><i className="fa fa-graduation-cap" />Education</h2>
                </div>
                <div className="row">
                    <div className="col">
                        <img className="aboutPhoto" src="../assets/images/cornell.jpeg" alt="cornell" />
                    </div>
                    <div className="col d-flex headerContent">
                        <div className="align-items-center">
                            <h3>Cornell University</h3>
                            <p>2013 - 2015</p>
                            <p>Master of Science, College of Engineering</p>
                            <p>Proud former member of the Helbling Research Group</p>
                            <p>Publication:</p>
                            <p><a href="https://www.sciencedirect.com/science/article/abs/pii/S0043135416304808">A non-target approach to identify disinfection byproducts of structurally similar sulfonamide antibiotics</a></p>
                        </div>
                        
                    </div>
                </div>
                <div className="row row-end row-padding">
                    <div className="col d-flex headerContent">
                        <div className="align-items-center">
                            <h3>Ocean University of China</h3>
                            <p>2009 - 2013</p>
                            <p>Bachelor of Science, College of Environmental Science and Engineering</p>
                            <p>Publication:</p>
                            <p><a href="https://www.researchgate.net/profile/Mian-Wang-15/publication/256548761_Toxic_Effects_of_Nano-CuO_Micro-CuO_and_Cu2_on_Chlorella_sp/links/0c960523693d264227000000/Toxic-Effects-of-Nano-CuO-Micro-CuO-and-Cu2-on-Chlorella-sp.pdf">Toxic Effects of Nano-CuO, Micro-CuO and Cu Ion on Chlorella sp.</a></p>
                        </div>
                    </div>
                    <div className="col">
                        <img className="aboutPhoto" src="../assets/images/ouc.jpg" alt="Ocean University of China" />
                    </div>
                </div>
            
                
                <div>
                    <h2><i className="fa fa-book" />Certificates</h2>
                    
                    
                </div>
            </div>
        );


    }


}
const aboutStyle = {
    color: 'red',
    margin: '50px',

}

export default About;