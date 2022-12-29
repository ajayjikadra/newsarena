import React, { Component } from 'react'


export class NewsItem extends Component {
  
  render() {
    let {title, description, imageUrl, newsUrl} = this.props;
    return (
      <>
      <div className='my-3'>
        <div className={`card ${this.props.mode?"bg-dark text-white":" "} `} >
        <img className="card-img-top " src={!imageUrl? "https://2.bp.blogspot.com/-wshEkUrLN_w/XKGwQPce0II/AAAAAAAAAh4/5ma5_Oyz9K0BoODggEBIIhuxqIvaQK2UACLcBGAs/s320/IMG_5744.JPG" :imageUrl } alt="Sorry No Priview Available"/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text ">{description}</p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
        </div>
        </div>
        
      </div>
     
      </>
    )
  }
}

export default NewsItem
