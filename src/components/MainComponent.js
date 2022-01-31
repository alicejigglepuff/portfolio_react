import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Directory from './DirectoryComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { PROJECTS } from '../shared/projects';
import { Switch, Route, Redirect } from 'react-router-dom';
import '../App.css'


class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            projects: PROJECTS
        };
    }

    render(){

        const HomePage = () => {
            return (
                <Home projects={this.state.projects}/>
            );
        }

        return(
            <div>
                <Header />
                
                
                <Switch>
                    <Route  path='/' component={HomePage} />
                    <Route exact path='/directory' render={() => <Directory projects={this.state.projects} />} />
                    <Route exact path='/contact' component={Contact} />
                    <Route exact path='/about' component={About} />
                </Switch>
                
                
                <Footer />
            </div>
        );
    };
}

export default Main;