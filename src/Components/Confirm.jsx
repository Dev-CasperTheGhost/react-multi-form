import React, { Component } from 'react';

export default class Confirm extends Component {
  submit = () => {
    this.props.submit();
  };

  prev = () => {
    this.props.prev();
  };

  render() {
    return (
      <div>
          <div style={{marginBottom: "10px"}}>
            <strong>Full Name: </strong> {`${this.props.values.firstName} ${this.props.values.lastName}`} <br />
            <strong>Username: </strong> {`${this.props.values.firstName}`} <br />
          </div>

        <div className='form-group row'>
          <button className='btn' onClick={this.prev}>
            Previous
          </button>
          <button className='btn blue' onClick={this.submit}>
            Confirm
          </button>
        </div>
      </div>
    );
  }
}
