import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import HomeTemplate from 'templates/home-template'
import PlacesTemplate from 'templates/places-template'
import ErrorPage from 'templates/error-page'
import UserTemplate from 'templates/user-template'

class App extends React.Component {
  render() {
    return(
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomeTemplate} />
          <Route path="/places" component={PlacesTemplate} />
          <Route path="/user" component={UserTemplate} />
          <Route component={ErrorPage} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
