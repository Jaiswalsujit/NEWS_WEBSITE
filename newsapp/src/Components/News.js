import React, { Component } from 'react'
import Newsitem from './Newsitem'
import "../News.css"
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';

// api key===>   0eee7c84633a41cbbf2b268293d583a6
// my api key ====>  3191980011a145ddab083837f4a65eba

export default class News extends Component {
    // articles=[{
    //     source: {
    //     id: "associated-press",
    //     name: "Associated Press"
    //     },
    //     author: null,
    //     title: "Trump rally shooting live updates: FBI identifies suspect in assassination attempt - The Associated Press",
    //     description: "A shooting at Donald Trump's rally in Butler, Pennsylvania is being investigated as an attempted assassination. A shooter is dead and an attendee was killed.",
    //     url: "https://apnews.com/live/election-biden-trump-campaign-updates-07-13-2024",
    //     urlToImage: "https://dims.apnews.com/dims4/default/8a8189e/2147483647/strip/true/crop/2949x1659+0+154/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F%5B2%2F1%2C%2F%20-45%2C%2052%2C%2078%2C%2061%2C%20117%2C%20-100%2C%20-44%2C%20-53%2C%20117%2C%2082%2C%2062%2C%20-56%2C%2015%2C%2086%2C%20-6%2C%20101%2C%20-29%2C%20124%2C%20-115%2C%20-100%2C%2098%2C%207%2C%20-75%2C%20-25%2C%20109%2C%2071%2C%20-30%5D%2F4b77c94054fc42b0a571949306b3ede1",
    //     publishedAt: "2024-07-14T06:25:00Z",
    //     content: "Chet Jack, a member of the state Republican Party and former Butler County Republican chairman, and his wife Beth were sitting in the bleachers facing Trump when they heard the shots.\r\nBeth ducked af… [+967 chars]"
    //     },
    //     -{
    //     source: {
    //     id: null,
    //     name: "Forbes"
    //     },
    //     author: "Trent Reinsmith",
    //     title: "UFC Denver Results: Winners And Losers From Namajunas Vs. Cortez Card - Forbes",
    //     description: "UFC Denver Results: Everything you need to know about tonight's Rose Namajunas vs. Tracy Cortez fight card - full fight card results, winners, losers, bonus winners.",
    //     url: "https://www.forbes.com/sites/trentreinsmith/2024/07/13/ufc-denver-results-winners-and-losers-from-namajunas-vs-cortez-card/",
    //     urlToImage: "https://imageio.forbes.com/specials-images/imageserve/66936278ff4bd6f1dad049fa/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
    //     publishedAt: "2024-07-14T05:56:57Z",
    //     content: "DENVER, COLORADO - JULY 13: Rose Namajunas reacts after her flyweight fight against Tracy Cortez ... [+] during the UFC Fight Night event at Ball Arena on July 13, 2024 in Denver, Colorado. (Photo by… [+17099 chars]"
    //     }]
    constructor(props){
        super(props);
        this.state={
            articles:[],
            loading:false,
            page:1,
            totalResults:0
        }
    }

    async componentDidMount(){

   

    this.props.setProgress(10);
    this.setState({loading:true});
  
// let response=await fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=aefdcc4b024e45c385dc88a21bf124f4");


let response=await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pagesize=${this.props.pagesize}`);

this.props.setProgress(40);
       let data=await response.json();
       console.log(data);
       console.log(this.props.country, this.props.category, this.props.apiKey, this.state.page, this.props.pagesize);

       this.props.setProgress(70);
       this.setState({articles:data.articles
        ,totalResults:data.totalResults,
        loading:false
       });
       console.log(this.state.articles);
       console.log("hiiiiii");
       this.props.setProgress(100);
       document.title=`Newsapp-${this.props.category}`;
    }

    // handleNextClick=async()=>{
    //     console.log("Next click ");
    //     console.log(this.state.totalResults);
    //     this.setState({loading:true});
    //     let response=await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page +1}&pagesize=${this.props.pagesize}`);
    //    let data=await response.json();
    //    this.setState({articles:data.articles,
    //     page:this.state.page+1,
    //     loading:false
    //    });
    // }
    // handlePrevClick=async()=>{
    //     let response=await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page -1}&pagesize=${this.props.pagesize}`);
    //    let data=await response.json();
    //    this.setState({articles:data.articles,
    //     page:this.state.page-1
    //    });
    // }

    fetchMoreData=async()=>{
        let response=await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page +1}&pagesize=${this.props.pagesize}`);
       
        let data=await response.json();
        
        // console.log(this.state.articles);
        // console.log("byyyiiiiii");
       this.setState({
        articles:this.state.articles.concat(data.articles)
        ,page:this.state.page+1
       })
   
    }


    
  render() {
    return (
     <>
     <h1 style={{textAlign:"center"}}>NEWSAPP - TOP {this.props.category.toUpperCase()} HEADLINES</h1>

     {/* CODE WITHOUT INCLUDING REACT-INFINITE-SCROLL-COMPONENT  */}
    {/* <div > {this.state.loading && <Spinner/>}</div>
      <div className='grid'>
       {!this.state.loading &&
        this.state.articles.map(element=>{
        return (<Newsitem  key={element.url} title={element.title} description={element.description} url={element.url} 
            urlToImage={element.urlToImage} author={element.author} time={element.publishedAt} source={element.source}/>)
       })}

      </div> 
      <div style={{display:"flex" ,width:"97%",justifyContent:"space-between",backgroundColor:"aqua", 
        margin:"0px auto" ,padding:"0.5rem ",borderRadius:"0.4rem"}}>
        <button className="btn" style={{padding:"0.8rem",color:"red"}} onClick={this.handlePrevClick} disabled={this.state.page <= 1}>&larr;Prev</button>
        <button className="btn" style={{color:"red"}} onClick={this.handleNextClick} disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pagesize)}>Next&rarr;</button>
      </div> */}

     
         <InfiniteScroll dataLength={this.state.articles.length} next={this.fetchMoreData}
        hasMore={this.state.articles.length!==this.state.totalResults} loader={<Spinner/>}>
              <div>
             <div className="grid">
     {this.state.articles.map(element=>{
        return (<Newsitem key={element.url} title={element.title} description={element.description} url={element.url} 
            urlToImage={element.urlToImage} author={element.author} time={element.publishedAt} source={element.source} />)
     })}
       </div>
      </div> 
        </InfiniteScroll> 

      </>
    )
  }

}
