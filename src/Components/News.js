import React, { Component } from 'react'
import NewsItems from './NewsItems'
import noimage from '../noImage.jpg'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {

      constructor(props){
          super(props);
          this.state = {
              articles:[],
              loading:true,
              page:1,
              totalResults:0
          }
          document.title = `NewsTimes - ${this.props.category}`
      }

      componentDidMount() {
        this.controlState(this.state.page);
      }

      fetchMoreData = () => {
        this.controlState(this.state.page + 1);
      }

      async controlState(pageNo) {
        const url=`https://newsapi.org/v2/top-headlines?country=IN&category=${this.props.category}&apiKey=${this.props.apiKey}&pagesize=${this.props.pageSize}&Page=${pageNo}`;
        let data = await (await fetch(url)).json();
        this.setState({
            articles: this.state.articles.concat(data.articles),
            page:pageNo,
            totalResults:data.totalResults,
            loading:false
        });
      }

    render() {
        return (
            <div style={{marginTop:'60px'}}>
            <h2 className="text-center">NewsTimes - Top {this.props.category} Headlines</h2>
                {this.state.loading && <Spinner/>}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length!==this.state.totalResults}
                    loader={<Spinner/>}>
                        <div className="container">
                            <div className="row my-3">
                                {this.state.articles.map((elements)=>{
                                    return <div className="col-md-4" key={elements.url}>
                                                <NewsItems title={elements.title} description={elements.description}
                                                    imageURL={elements.urlToImage?elements.urlToImage:noimage} newsURL={elements.url}
                                                    author={elements.author} date={elements.publishedAt} source={elements.source.name}/>
                                            </div>
                                })}
                            </div>
                        </div>
                </InfiniteScroll>
            </div>
        )
    }
}

export default News
