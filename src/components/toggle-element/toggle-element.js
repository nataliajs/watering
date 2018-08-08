import React from 'react'
import classnames from 'classnames'

class ToggleElement extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpened: false,
    }
  }

  handleOnClick = () =>{
    this.setState( {...this.state, 
      isOpened: !this.state.isOpened
    });
  }

  render(){
    const toggleClass = classnames( 'l-span-A8 toggle-element',
      { 'toggle-element--active': this.state.isOpened }
    );
    return(
      <div className={toggleClass}>
        <div className="toggle-element_button" onClick={ this.handleOnClick }>
          +
          { this.props.buttonLabel ? this.props.buttonLabel: 'Add' }
        </div>
        <div className="toggle-element_container">
          { this.props.children }
        </div>
      </div>
    )
  }
}

export default ToggleElement
