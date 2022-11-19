import React from 'react';
import './PostListItem.css'

export default class PostListItem extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
        important: false,
        like: false,
    }
    this.onImportant = this.onImportant.bind(this)
    this.onLike = this.onLike.bind(this) 
  }
  onImportant() {
    this.setState(({important}) => ({important: !important}))
  }
  onLike() {
    this.setState(({like}) => ({like: !like}))
  }

    render () {
    const {label, onDelete, onToggleImportant, onToggleLike, important, like} = this.props

    let classNames = "app-list-item d-flex justify-content-between";
    if (important) {
        classNames += ' important';
    }
    if (like) {
        classNames += ' like'
    }
        return (
            <li className={classNames}>
            <span className='app-list-item-label' onClick={onToggleLike}>
                {label}
            </span>
            <div className='d-flex justify-content-center align-items-center'>
                <button type='button' className='btn-star btn-sm' 
                onClick={onToggleImportant}>
                    <i className='fa fa-star' />
                </button>
                <button type='button' className='btn-trash btn-sm'
                onClick={onDelete}>
                    <i className='fa fa-trash' />
                </button>
                <i className="fa fa-heart" />
            </div>
            </li>
        )
    }
}