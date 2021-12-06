import React, { Component } from 'react';

import '../App.css'

class Home extends Component {
    constructor(props){
        super(props);
    }

    render(){
        const home = this.props.projects.map(project => {
            return(
                <div key="project.id" className="container">
                    <br />
                    <br />
                    <h2>{project.name}</h2>
                    <p>{project.description}</p>
                    <div className="row-content">
                        <img src={project.image} alt={project.name} className="directoryPhoto "/>
                    </div>
                    
                    
                </div>
            )
        });

        return(
            <div className="container">
                <div className="row">
                    {home}
                </div>
            </div>
        )
    }
}

export default Home;