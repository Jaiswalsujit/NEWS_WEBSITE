import React, { Component } from 'react'
import Loader from "../spinner.gif"

export default class Spinner extends Component {
  render() {
    return (
      <img src={Loader} alt="Spinner Not Loaded" style={{display:"block",margin:"0px auto"}}></img>
    )
  }
}
