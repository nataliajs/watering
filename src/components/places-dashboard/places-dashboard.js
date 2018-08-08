import React from 'react'
import ReactDOM from 'react-dom'
import * as R from 'ramda'

import ToggleElement from 'components/toggle-element/toggle-element'
import NewPlace from 'components/new-place/new-place'


class PlacesDashboard extends React.Component {
  renderPlaceIntro({ name, id }){ // destructuring assigment 0
  /* destructuring assigment 1
    renderPlaceIntro({ name, id }){
      var { name, id } = place;
  5tg tgg       */
    return(
      <div className="l-span-A4 place-intro" key={'pla-intro-'+id}>
        <div className="place-intro_name">{ name }</div>
      </div>
    )
  }

  render() {
    return(
      <div className="l-container places-dashboard">
        <div className="l-row places-dashboard_list">
          { R.map(this.renderPlaceIntro, this.props.places) }
        </div>
        <div className="l-row places-dashboard_add">
          <ToggleElement buttonLabel="Add place">
            <NewPlace />
          </ToggleElement>
        </div>
      </div>
    )
  }
}

export default PlacesDashboard
