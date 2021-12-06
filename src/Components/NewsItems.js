import React, { Component } from 'react'

export class NewsItems extends Component {
    render() {
        let {title, description, imageURL, newsURL, author, date, source} = this.props;
        return (
            <div>
                <div className="card my-2">
                    <img src={imageURL} className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{zIndex:'1',left:'90%'}}>
                        {source}
                    </span>
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p class="card-text"><small class="text-muted">By {author?author:'Unknown'} on {new Date(date).toUTCString()}</small></p>
                        <a rel="noreferrer" href={newsURL} target="_blank" className="btn btn-sm btn-dark">Read more</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItems
