import React, { Component } from 'react'
import "../Newsitem.css"

export default class Newsitem extends Component {
    // constructor(){
    //     super();
    // }
  render() {
    return (
    //   <div className="card">
    //  <img src="https://media.cnn.com/api/v1/images/stellar/prod/ap24195803071965.jpg?c=16x9&q=w_800,c_fill" alt="error"></img>
    //  <h3>Live updates: The latest on the 2024 campaign ahead of the RNC - CNN</h3>
    //  <h4>President Joe Biden is vowing to continue his reelection .</h4>
    //  <p>Tori B. Powell, Shania </p>
    //  <a className="btn" href="https://www.cnn.com/politics/live-news/election-biden-trump-07-13-24/index.html" target="_blank" rel="noreferrer">Read More</a>
    //   </div>
    <div className="card">
      
    <img src={this.props.urlToImage?this.props.urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/ap24195803071965.jpg?c=16x9&q=w_800,c_fill"} 
        alt="error"></img>
    <h3>{this.props.title?this.props.title.slice(0,65):"Visit to read Title of the news"}</h3>
    <h5>{this.props.description?this.props.description.slice(0,150):"Visit to read Description of the news "}</h5>
    <p>By {this.props.author?this.props.author:"Unknown"} on {this.props.time.slice(0,10)}</p>
    <a className="btn" href={this.props.url} target="_blank" rel="noreferrer">Read More</a>
    
     </div>
    )
  }
}
