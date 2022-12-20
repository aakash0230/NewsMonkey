import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imgUrl, newsUrl, author, date, source} = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <img src={!imgUrl?"https://images.moneycontrol.com/static-mcnews/2021/09/Trading-770x433.jpg":imgUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
            <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style = {{left : "90%" , zIndex : "1"}}>{source}</span>
              <h5 className="card-title">{title}...</h5>
              <p className="card-text">{description}...</p>
              <p className="card-text"><small className="text-muted">By {!author ? "unknown" : author} on {date}</small></p>
              <a href= {newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read More..</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
