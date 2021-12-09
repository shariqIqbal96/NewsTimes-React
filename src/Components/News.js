import React, { useState,useEffect } from 'react'
import NewsItems from './NewsItems'
import noimage from '../noImage.jpg'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props) {

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    document.title = `NewsTimes - ${props.category}`

    //similar to componentDidMount in class based react app
    useEffect(() => { 
        controlState(page)
    },[]);  // eslint-disable-line react-hooks/exhaustive-deps

    const fetchMoreData = () => {
        controlState(page + 1);
      }

    const controlState = async (pageNo) => {
        const url=`https://newsapi.org/v2/top-headlines?country=IN&category=${props.category}&apiKey=${props.apiKey}&pagesize=${props.pageSize}&Page=${pageNo}`;
        let data = await (await fetch(url)).json();
        setArticles(articles.concat(data.articles));
        setPage(pageNo);
        setTotalResults(data.totalResults);
        setLoading(false);
      }

    return (
        <div style={{marginTop:'60px'}}>
        <h2 className="text-center">NewsTimes - Top {props.category} Headlines</h2>
            {loading && <Spinner/>}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length!==totalResults}
                loader={<Spinner/>}>
                    <div className="container">
                        <div className="row my-3">
                            {articles.map((elements)=>{
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