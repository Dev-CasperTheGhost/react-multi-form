import React, { Component } from 'react';
import ErrorMessage from "./ErrorMessage"

export default class SetPassword extends Component {
  onChange = (e) => {
    this.props.onChange(e);
  };

  next = () => {
    this.props.next();
  };

  prev = () => {
    this.props.prev();
  };

  render() {
    return (
      <div>
        <div className='form-group'>
          {this.props.error ? <ErrorMessage error={this.props.error} /> : null}
          <label htmlFor='password'>Enter Password</label>
          <input
            type='password'
            name='password'
            className='form-input'
            id='password'
            onChange={this.onChange}
            required
            value={this.props.passwords[0]}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password2'>Confirm Password</label>
          <input
            type='password'
            name='password2'
            id='password2'
            className='form-input'
            onChange={this.onChange}
            required
            value={this.props.passwords[1]}
          />
        </div>
        <div className='form-group row'>
          <button className='btn' onClick={this.prev}>
            Previous
          </button>
          <button className='btn blue' onClick={this.next}>
            Continue
          </button>
        </div>
      </div>
    );
  }
}
