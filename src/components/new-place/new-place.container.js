import React from 'react'

import * as placesAPI from 'api/places'

import NewPlace from './new-place'

class NewPlaceContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      description: ""
    }
  }

  componentWillMount(){
  }

  _submitPlace = (event)=>{
    event.preventDefault();
    console.log(this.state.name, this.state.description);
  }

  _onChange = (event)=>{
    const inputName = event.target.name;
    const inputValue = event.target.value;
    this.setState({...this.state,
      [inputName]: inputValue
    });
  }

  render() {
    return(
      <NewPlace {...this.state} onChange={this._onChange} submitPlace={this._submitPlace} />
    )
  }
}

export default NewPlaceContainer
