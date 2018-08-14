import React, { Component } from 'react';
import { fetchBeer, deleteBeer } from '../../actions';
import { connect } from "react-redux";

class BeerList extends Component {

  componentDidMount() {
    this.props.fetchBeer();
  }

  //conditionally renders delete button if the user signed in is the creator of the beer.
  //TODO create profiles for other users to view their beers.
  renderDelete(beerCreator, user) {
    if(beerCreator.createdBy === user){
      return(
        <button
          onClick={() => this.props.deleteBeer(beerCreator._id, this.props.history)}
          style={ styles.actionButton }
        >
          <i className="material-icons" style={{color: 'red'}}>delete_forever</i>
        </button>
      )
    }
  }

  //renders the beer list items
  renderBeerListItems() {
    return this.props.beers.map((beer, index) => {
      if(beer.beerName) {
        return (
          <li style={ index === 0 ? styles.listItemFirst : styles.listItem } key={ beer._id }>
            <div style={ styles.listDetails } >
              <h5 >{ beer.beerName }</h5>
            </div>
            <div style={styles.listDetails}>
              <p>
                Style: { beer.beerStyle }
                <br />
                Date added: { beer.createdOn }
              </p>
            </div>
            <div style={styles.actionButtonContainer}>
              <button
                // TODO add link to beer details page
                style={styles.actionButton}
              >
                <i className="material-icons" style={{color:'green'}}>send</i>
              </button>
              { this.renderDelete(beer, this.props.auth._id) }
            </div>
          </li>
        )
      }
      return (null);
    })
  }

  render() {
    console.log('testing auth', this.props.auth);
    console.log('testing beers', this.props.beers);
    switch (this.props.beers){
      case null:
        return 'Loading';
      case (this.props.beers && this.props.beers.length < 1):
        return 'There are no beers logged.';
      default:
        return (
          <ul style = {styles.listContainer}>
            { this.renderBeerListItems() }
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
  },
  actionButton: {
    background: 'none',
    border: 'none',
    padding: '0',
    font: 'inherit',
    cursor: 'pointer',
    outline: 'inherit'
  }
};

function mapStateToProps({ beers, auth }){
  return { beers, auth };
}

export default connect(mapStateToProps, { fetchBeer, deleteBeer }) (BeerList);


