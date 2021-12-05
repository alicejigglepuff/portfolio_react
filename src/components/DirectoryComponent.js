import React, { Component } from 'react';
import '../App.css'

class Directory extends Component {
    constructor(props){
        super(props);
        this.state = {
            projects: [
                {
                    id: 0,
                    name: 'Living With My Stubborn Huskies',
                    image: 'assets/images/story1.jpeg',
                    description: 'Blog, Travel, Love'
                },
                {
                    id: 1,
                    name: 'The HomeMaker\'s Tool',
                    image: 'assets/images/story2.jpeg',
                    description: 'A handy tool for home management - asset management, budget management, weekly menu, shopping list, and reminders'
                },
                {
                    id: 2,
                    name: 'Baby Damian',
                    image: 'assets/images/story3.jpeg',
                    description: 'For my baby boy due next March.'
                }

            ],
        };
    }

    render(){
        const directory = this.state.projects.map(project => {
            return(
                <div key="project.id" className="container">
                    <img src={project.image} alt={project.name} className="directoryPhoto "/>
                    <h2>{project.name}</h2>
                    <p>{project.description}</p>
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