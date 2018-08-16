import { combineReducers } from 'redux'

import placesReducer from 'reducers/places'

// Combine Reducers
const reducers = combineReducers({
  placesState: placesReducer
});

export default reducers