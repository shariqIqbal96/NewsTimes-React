import React, { Component } from 'react'
import NewsItems from './NewsItems'
import noimage from '../noImage.jpg'
import Spinner from './Spinner';

export class News extends Component {

      constructor(){
          super();
          this.state = {
              articles:[],
              loading:false,
              page:1,
              totalResults:0
          }
      }

      componentDidMount() {
        this.controlState(this.state.page);
      }

      handlePreviousClick = ()=> {
        this.controlState(this.state.page - 1);
      }

      handleNextClick = ()=> {
        this.controlState(this.state.page + 1);
      }

      async controlState(pageNo) {
        let url=`https://newsapi.org/v2/top-headlines?country=IN&category=${this.props.category}&apiKey=13d89fb7606f44bbaef472734e085c3f&pagesize=${this.props.pageSize}&Page=${pageNo}`;
        this.setState({loading:true});
        let data = await (await fetch(url)).json();
        this.setState({
            articles:data.articles,
            page:pageNo,
            totalResults:data.totalResults,
            loading:false
        });
      }

    render() {
        return (
            <div className="container my-3">
                <h2 className="text-center">NewsTimes - Top headlines</h2>
                {this.state.loading && <Spinner/>}
                {!this.state.loading && <div className="row my-3">
                    {this.state.articles.map((elements)=>{
                        return <div className="col-md-4" key={elements.url}>
                                    <NewsItems title={elements.title} description={elements.description}
                                        imageURL={elements.urlToImage?elements.urlToImage:noimage} newsURL={elements.url}
                                        author={elements.author} date={elements.publishedAt} source={elements.source.name}/>
                                </div>
                    })}
                </div>}
                <div className="container d-flex justify-content-between">
                    <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
                    <button type="button" disabled={this.state.page>=Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
