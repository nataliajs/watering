import React from 'react'


class NewPlace extends React.Component {
  render() {
    return(
        <form className="new-place">
          <div>
            <div>Name</div>
            <input name="name" type="text"/>
          </div>

          <div>
            <div>Description</div>
            <input name="description" type="text"/>
          </div>
        </form>
    )
  }
}

export default NewPlace
