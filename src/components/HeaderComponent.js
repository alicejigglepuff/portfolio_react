import React, { Component }  from 'react';
import { Nav, Navbar, NavbarBrand, Jumbotron, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';


class Header extends Component {

    constructor(props){
        super(props);

        this.toggleNav = this.toggleNav.bind(this);    
        this.state = {
            isNavOpen: false,
            status: "top"
        };
        this.listener = null;
    }

    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    componentDidMount() {
        this.listener = document.addEventListener("scroll", e => {
          var scrolled = document.scrollingElement.scrollTop;
          if (scrolled >= 550) {
            if (this.state.status !== "notTop") {
              this.setState({ status: "notTop" });
            }
          } else {
            if (this.state.status !== "top") {
              this.setState({ status: "top" });
            }
          }
        });
    }

    componentDidUpdate() {
        document.removeEventListener("scroll", this.listener);
    }

    render(){
        return(
            <React.Fragment>
                
                
                <Navbar 
                    dark fixed="top" expand="md"
                    style={{
                        backgroundColor: this.state.status === "top" ? "transparent" : "#2b3621",
                        // color: this.state.status === "top" ? "white" : "blue",
                        opacity: 0.7,
                        position: "fixed"
                      }}               
                >
                    <div className="container">
                        <NavbarBrand className="mr-auto" href="/"><img src="/assets/images/logo.png" height="30" width="30" alt="" /></NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <i className="fa fa-home fa-lg" /> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/directory">
                                        <i className="fa fa-list fa-lg" /> Directory
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/portfolio">
                                        <i className="fa fa-list fa-lg" /> Portfolio
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/about">
                                        <i className="fa fa-info fa-lg" /> About
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contact">
                                        <i className="fa fa-address-card fa-lg" /> Contact
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                
                <Jumbotron fluid id="headerJumbo">
                    <div>
                        <div className="row">
                            <div className="col headerContent d-flex">
                                <img className="coverPhoto" src="../assets/images/cover1.jpg" />
                                {/* <div className="align-items-center justify-content-center">
                                    <h1>Mian's Portfolio</h1><br />
                                    <h2>Education, Experience, Project Portfolio, And Some Random Thoughts</h2>
                                </div>        */}
                                <div className="headerText">Mian's Portfolio</div>
                            </div>
                            
                        </div>
                    </div>
                </Jumbotron>
                
                


                
            </React.Fragment>
        );
    };
}

export default Header;