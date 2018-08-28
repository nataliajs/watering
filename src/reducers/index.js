import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import placesReducer from 'reducers/places'

// Combine Reducers
const reducers = combineReducers({
  placesState: placesReducer,
  routing: routerReducer
});

export default reducers