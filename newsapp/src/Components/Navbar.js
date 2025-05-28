import React, { Component } from 'react'
import '../Navbar.css'
import {Link} from "react-router-dom"

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className='left'>
            <img src="../../newsapp2.png" alt="ERROR"/>
            <div className='btn-main'><Link to="/">NEWSAPP</Link></div>
        </div>
        <ul className='links'>
            <li className='btn btn-links'><Link to="/">Home</Link></li>
            <li className='btn btn-links'><Link to="/science">Science</Link></li>
            <li className='btn btn-links'><Link to="/technology">Technology</Link></li>
            <li className='btn btn-links'><Link to="/sports">Sports</Link></li>
            <li className='btn btn-links'><Link to="/health">Health</Link></li>
            <li className='btn btn-links'><Link to="/business">Business</Link></li>
            <li className='btn btn-links'><Link to="/entertainment">Entertainment</Link></li>
            <li className='btn btn-links'><Link to="/general">General</Link></li>
        </ul>
        
      </div>
    )
  }
}
