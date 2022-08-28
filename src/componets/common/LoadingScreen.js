import React, { Component } from 'react'
import { BarLoader } from 'react-spinners'

export default class LoadingScreen extends Component {
  render() {
    return (
      <div><BarLoader loading={this.props.loading}  /></div>
    )
  }
}
