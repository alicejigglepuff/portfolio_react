import React, { Component } from 'react';

import '../App.css'

class Directory extends Component {
    constructor(props){
        super(props);
    }

    render(){
        const directory = this.props.projects.map(project => {
            return(
                <div key="project.id" className="container">
                    <h2>{project.name}</h2>
                    <p>{project.description}</p>
                    <img src={project.image} alt={project.name} className="directoryPhoto "/>
                    
                </div>
            )
        });

        return(
            <div className="container">
                <div className="row">
                    {directory}
                </div>
            </div>
        )
    }
}

export default Directory;