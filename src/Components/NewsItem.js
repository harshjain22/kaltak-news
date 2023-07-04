import React from 'react'

 const NewsItem =(props)=> {

    let {title,description,imageUrl,url,publishedAt,source} = props;
    let date =  new Date(publishedAt);
    
    return (
      <div>
      <div className="card border border-primary rounded-bottom">
      <div className="card-header">

      </div>
  <img src={imageUrl} className="card-img-top" alt="news"/>
  <div className="card-body ">
  <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" 
    style={{left:'90%', zIndex:1}}> {source} </span>
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a rel="noreferrer" href={url} target="_blank" className="btn btn-sm btn-dark btn-primary">Read more...</a>
    <div>
    <p className="card-text"><small className="text-muted">{date.toGMTString() }</small></p>
    </div>
  </div>
</div>
      </div>
    )
}

export default NewsItem
