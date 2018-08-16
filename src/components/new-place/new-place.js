import React from 'react'
import PropTypes from 'prop-types'


class NewPlace extends React.Component {
  render() {
    return(
        <form className="form-lineup new-place">
          <div className="form-lineup_form-group inputfield">
            <div className="inputfield--label">Name</div>
            <input value={this.props.name} className="inputfield--text" name="name" type="text" onChange={this.props.onChange}/>
          </div>

          <div className="form-lineup_form-group inputfield">
            <div className="inputfield--label">Description</div>
            <input value={this.props.description} className="inputfield--textarea" name="description" type="text" rows="5" onChange={this.props.onChange}/>
          </div>

          <div className="form-lineup_form-group new-place__submit">
            <button className="new-place__submit__button" onClick={ this.props.submitPlace }>+</button>
          </div>
        </form>
    )
  }
}

NewPlace.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  onChange: PropTypes.func,
  submitPlace: PropTypes.func,
}
NewPlace.defaultProps = {
  name: "",
  description: "",
}

export default NewPlace
