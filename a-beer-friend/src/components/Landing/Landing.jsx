import React from 'react';
import Radium from 'radium';

import landing from './assets/landing.jpg'


const Landing = () => {
  return (
    <div style={styles.container}>
      <img style={styles.imageSplash} src={landing} alt="landing"/>
      <div style={styles.textContainer}>
        <h3>Welcome to A Beer Friend.</h3>
        <p>Features:</p>
        <ul>
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
        </ul>
      </div>
    </div>
  )
};

const styles = {
  container: {
    width: '100%',
    position: 'relative',
    textAlign: 'center',
  },
  imageSplash: {
    width: '100%'
  },
  textContainer: {
    position: 'absolute',
    top: '8px',
    padding: '1.5rem',
    color: 'white'
  }

};


export default Radium(Landing);