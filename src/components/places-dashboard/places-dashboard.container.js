import React from 'react'
import ReactDOM from 'react-dom'

import * as placesAPI from 'api/places'

import PlacesDashboard from './places-dashboard'

class PlacesDashboardContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      places: [],
    }
  }

  componentWillMount(){
    /*const places = placesAPI.getPlaces();
    this.setState({...this.state,
      places: places
    });*/
    /*.then(response => {
        this.setState({...this.state,
          places: response
        });
      })
      .catch(error => {
        console.warn(error);
      })*/
  }

  render() {
    return(
      <PlacesDashboard places={this.state.places} />
    )
  }
}

export default PlacesDashboardContainer
