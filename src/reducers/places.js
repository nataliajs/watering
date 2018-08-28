import * as types from 'actions/action-types'
import { WAITING, LOADING, ERROR, SUCCESS } from 'utils/constants'

const initialState = {
  places: [], //list of places (id , name and description)
  networkState: WAITING,
}

const placesReducer = function(state = initialState, action) {
  switch (action.type) {
    case types.GET_PLACES_LOADING:
      return {
        ...state,
        networkState: LOADING,
      }

    case types.GET_PLACES_SUCCESS:
      return {
        ...state,
        places: action.places,
        networkState: SUCCESS,
      }

    case types.GET_PLACES_ERROR:
      return {
        ...state,
        networkState: ERROR,
        error: action.error,
      }

    default:
      return state
  }
}

export default placesReducer
