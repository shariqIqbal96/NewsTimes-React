import React from 'react'

export default function NewsItems(props) {
    let {title, description, imageURL, newsURL, author, date, source} = props; //destructuring
    return (
        <div>
            <div className="card my-2">
                <div style={{display: 'flex',
                            justifyContent: 'end',
                            position: "absolute",
                            right: 0}}>
                    <span className="badge rounded-pill bg-danger">{source}</span>
                </div>
                <img src={imageURL} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted">By {author?author:'Unknown'} on {new Date(date).toUTCString()}</small></p>
                    <a rel="noreferrer" href={newsURL} target="_blank" className="btn btn-sm btn-dark">Read more</a>
                </div>
            </div>
        </div>
    )
}