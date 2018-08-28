import React from 'react'

import store from 'store'
import { getPlaces } from 'actions/places-actions'

import PlacesDashboard from './places-dashboard'

class PlacesDashboardContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      places: [],
    }
  }

  componentWillMount(){
    store.dispatch(getPlaces());
  }

  render() {
    return(
      <PlacesDashboard places={this.state.places} />
    )
  }
}

export default PlacesDashboardContainer
