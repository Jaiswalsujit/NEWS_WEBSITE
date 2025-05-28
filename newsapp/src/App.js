// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar'
import News  from './Components/News';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

// function App() {
//   return (<>
//     <Navbar/>
//     <News setProgress={this.setProgress}  category="science" pagesize={pagesize}/>
//     </>
//   );
// }

// export default App;
import React, { Component } from 'react'
import LoadingBar from 'react-top-loading-bar'
import Footer from './Components/Footer';

export default class App extends Component {
  pagesize=9;
  country="us";
  // apiKey="0eee7c84633a41cbbf2b268293d583a6";//my apikey
    //  apiKey="e879aae1e10948e6b3aaa370a6bc8046";//akash apikey

   
  apiKey="aefdcc4b024e45c385dc88a21bf124f4"
  

     constructor(){
      super();
      this.state={
        progress:5
       }
     }

     setProgress=(prg)=>{
      this.setState({
        progress:prg
      })
     }

  render() {
    
    return (
      <>
      <Router>
     <Navbar/>
     <LoadingBar color="red" progress={this.state.progress} />
     {/* <News setProgress={this.setProgress}  category="sports" pagesize={this.pagesize} country={this.country}/> */}
     <Routes>
      <Route exact path="/" element={<News setProgress={this.setProgress}  key="home"  category="sports" pagesize={this.pagesize} country={this.country} apiKey={this.apiKey}/>}></Route>
      <Route exact path="/science" element={<News setProgress={this.setProgress}  key="science" category="science" pagesize={this.pagesize} country={this.country} apiKey={this.apiKey}/>}></Route>
      <Route exact path="/technology" element={<News setProgress={this.setProgress}  key="technology" category="technology" pagesize={this.pagesize} country={this.country} apiKey={this.apiKey}/>}></Route>
      <Route exact path="/sports" element={<News setProgress={this.setProgress}  key="sports" category="sports" pagesize={this.pagesize} country={this.country} apiKey={this.apiKey}/>}></Route>
      <Route exact path="/health" element={<News setProgress={this.setProgress}  key="health" category="health" pagesize={this.pagesize} country={this.country} apiKey={this.apiKey}/>}></Route>
      <Route exact path="/business" element={<News setProgress={this.setProgress}  key="business" category="business" pagesize={this.pagesize} country={this.country} apiKey={this.apiKey}/>}></Route>
      <Route exact path="/entertainment" element={<News setProgress={this.setProgress}  key="entertainment" category="entertainment" pagesize={this.pagesize} country={this.country} apiKey={this.apiKey}/>}></Route>
      <Route exact path="/general" element={<News setProgress={this.setProgress}  key="general" category="general" pagesize={this.pagesize} country={this.country} apiKey={this.apiKey}/>}></Route>
     </Routes>

      <Footer/>

     </Router>
     </>
    )
  }
}

