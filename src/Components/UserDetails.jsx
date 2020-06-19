import React, { Component } from 'react';
import ErrorMessage from './ErrorMessage';

export default class UserDetails extends Component {
  onChange = (e) => {
    this.props.onChange(e);
  };

  onChecked = (e) => {
    this.props.onChecked(e);
  };

  next = () => {
    this.props.next();
  };

  render() {
    return (
      <div>
        {this.props.error ? <ErrorMessage error={this.props.error} /> : null}
        <div className='row'>
          <div className='form-group'>
            <label htmlFor='firstName'>First Name</label>
            <input
              type='text'
              name='firstName'
              className='form-input'
              id='firstName'
              onChange={this.onChange}
              value={this.props.values.firstName}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='lastName'>Last Name</label>
            <input
              type='text'
              name='lastName'
              id='lastName'
              className='form-input'
              onChange={this.onChange}
              value={this.props.values.lastName}
              required
            />
          </div>
        </div>
        <div className='form-group'>
          <label htmlFor='username'>Username</label>
          <input
            type='text'
            name='username'
            id='username'
            className='form-input'
            onChange={this.onChange}
            value={this.props.values.username}
          />
        </div>
        <div className='form-group-checkbox'>
          <input
            name='agreed'
            id='agreed'
            type='checkbox'
            onChange={this.onChecked}
            checked={this.props.values.agreed}
          />
          <label htmlFor='agreed'>I agree to the terms and conditions</label>
        </div>
        <div className='form-group'>
          <button className='btn blue' onClick={this.next}>
            Continue
          </button>
        </div>
      </div>
    );
  }
}
