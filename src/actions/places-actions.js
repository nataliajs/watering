import * as types from './action-types'
import * as placesApi from 'api/places'

function getPlacesLoading(){
  return{
    type: types.GET_PLACES_LOADING
  }
}

function getPlacesSuccess(places){
  return{
    type: types.GET_PLACES_SUCCESS,
    places
  }
}

function getPlacesError(error){
  return{
    type: types.GET_PLACES_ERROR
  }
}

export function getPlaces(){
  return (dispatch, getState)=>{
    dispatch(getPlacesLoading())

    placesApi
      .getPlaces()
      .then(response=>{
        dispatch(getPlacesSuccess(response))
      })
      .catch(error=>{
        console.error(error);
        dispatch(getPlacesError(error))
      })
  }
}