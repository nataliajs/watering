import React from 'react'
import ReactDOM from 'react-dom'

import * as placesAPI from 'api/places'

class PlacesDashboardContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      places: [],
    }
  }

  componentWillMount(){
    placesAPI.getPlaces()
    .then(response => {
        this.setState({...this.state,
          places: response
        });
      })
      .catch(error => {
        console.warn(error);
      })
  }

  render() {
    return(
      <div>
        {this.state.places}
      </div>
    )
  }
}

export default PlacesDashboardContainer
