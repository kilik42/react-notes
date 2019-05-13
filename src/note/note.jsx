import React, { Component, PropTypes} from 'react';
import './Note.css';
// import PropTypes from 'prop-types';

class Note extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props){
    super(props);
    this.message = "hello from the note component"
  }
  render(props) {
    return (
      <div>
        <h1>hello from note component!</h1>
      </div>
    );
  }
}


export default Note;
