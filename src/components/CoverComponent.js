import React, { Component } from 'react';

class CoverPhoto extends React.Component {
    constructor(props) {
      super(props);

      const images = [
        "https://www.royalcanin.com/~/media/Royal-Canin/Product-Categories/cat-adult-landing-hero.ashx",
        "https://www.petfinder.com/wp-content/uploads/2013/09/cat-black-superstitious-fcs-cat-myths-162286659.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/4/4d/Cat_March_2010-1.jpg"
      ];

      this.state = {
        images,
        currentImg: 0
      }
    }

    componentDidMount() {
      this.interval = setInterval(() => this.changeBackgroundImage(), 1000);
    }

    componentWillUnmount() {
      if (this.interval) {
        clearInterval(this.interval);
      }
    }

    changeBackgroundImage() {
      let newCurrentImg = 0;
      const {images, currentImg} = this.state;
      const noOfImages = images.length;

      if (currentImg !== noOfImages - 1) {
        newCurrentImg = currentImg + 1;
      }

      this.setState({currentImg: newCurrentImg});
    }

    render() {
      const {images, currentImg} = this.state;
      const urlString = `url('${images[currentImg]}')`;

      return (
        <div className="App">
          <div className='dynamicImage' style={{backgroundImage: urlString}} >
          </div>
        </div >
      );
    }
  }

  export default CoverPhoto;