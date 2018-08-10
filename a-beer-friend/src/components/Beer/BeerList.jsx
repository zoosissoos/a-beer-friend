import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { fetchBeer } from '../../actions';
import { connect } from "react-redux";


class BeerList extends Component {

  componentDidMount() {
    this.props.fetchBeer();
  }

  renderBeers() {
    return this.props.beers.map((beer, index) => {
      if(beer.beerName) {
        return (
          <li style={index === 0 ? styles.listItemFirst : styles.listItem } key={ beer._id }>
            <div style={styles.listDetails} >
              <h5 >{beer.beerName}</h5>
            </div>
            <div style={styles.listDetails}>
              <p>
                Style: {beer.beerStyle}
                <br />
                Date added: {beer.beerStyle}
              </p>
            </div>
            <div style={styles.actionButtonContainer}>
              <a href="#" >
                <i className="material-icons" style={styles.actionButton}>send</i>
              </a>
              <a href="#" style={styles.actionButton}>
                <i className="material-icons" style={{color: 'red'}}>delete_forever</i>
              </a>
            </div>
          </li>
        )
      }
    })
  }

  render() {
    console.log('testing beers', this.props.beers);
    switch (this.props.beers){
      case null:
        return 'Loading';
      case (this.props.beers.length < 1):
        return 'There are no beers logged.';
      default:
        return (
          <ul style = {styles.listContainer}>
            { this.renderBeers() }
          </ul>
        )
    }
  }
}

const styles = {
  listContainer: {
    boxSizing: 'border-box',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    padding: '3rem'
  },
  listItemFirst: {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'row',
    padding: '1rem',
    justifyContent: 'space-between',
    alignContent: 'space-between',
    border: 'solid black 1px',
    backgroundColor: '#D1CEC9'
  },
  listItem: {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'row',
    padding: '1rem',
    justifyContent: 'space-between',
    alignContent: 'space-between',
    borderBottom: 'solid black 1px',
    borderRight: 'solid black 1px',
    borderLeft: 'solid black 1px',
    backgroundColor: '#D1CEC9'
  },
  listDetails: {
    width:'45%',
    alignContent: 'left',
    boxSizing: 'border-box',
  },
  actionButtonContainer: {
    width:'10%',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around'
  }
};

function mapStateToProps({ beers }){
  return { beers };
}

export default connect(mapStateToProps, { fetchBeer }) (BeerList);


