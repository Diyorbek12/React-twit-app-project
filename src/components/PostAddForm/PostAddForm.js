import React from 'react';
import './PostAddForm.css'

export default class PostAddForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
        text: ''
    }
    this.onValueChange = this.onValueChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
 
  onValueChange(e) {
      this.setState({text: e.target.value})
  }
  onSubmit(e) {
    e.preventDefault();
    this.state.text.length > 0 &&
     this.props.onAdd(this.state.text)
     this.setState({text: ''})
  }

    render () {
        const {onAdd} = this.props
        return (
          <form className='bottom-panel d-flex' onSubmit={this.onSubmit}>
            <input 
            type='text'
            placeholder='what are you thinking about?'
            className='form-control new-post-label'
            value={this.state.text}
            onChange={this.onValueChange} />
            <button type='submit' className='btn btn-outline-secondary'>
            Add Post</button>
          </form> 
        )
    }
}

