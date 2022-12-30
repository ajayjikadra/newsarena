import React, { Component } from "react";
import NewsItem from "./NewsItem.js";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 6,
    category: "general",
    totalResults: 0,
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    this.setState({
      loading: true,
    });
    this.props.setProgress(20);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    this.props.setProgress(35);
    let parsedData = await data.json();
    this.props.setProgress(70);

    this.setState({
      articles: parsedData.articles,
      totalArticles: parsedData.totalResults,
      loading: false,
    });

    this.props.setProgress(100);
  }

  // handlePreviousClick = async()=>{
  //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fc03c00732fd473d889366baa656c9b5&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   // console.log(parsedData);

  //   this.setState({
  //   page : this.state.page-1,
  //   articles: parsedData.articles

  // })

  // }
  // handleNextClick = async () =>{
  //   if (this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)) {

  //   }
  //   else{
  //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fc03c00732fd473d889366baa656c9b5&page=${this.state.page +1}&pageSize=${this.props.pageSize}`;
  //     let data = await fetch(url);
  //     let parsedData = await data.json();
  //     console.log(parsedData);

  //     this.setState({
  //     page : this.state.page+1,
  //     articles: parsedData.articles,

  //     })

  //   }
  // }
  fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=${this.props.apiKey}&page=${
      this.state.page + 1
    }&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalArticles: parsedData.totalResults,
      page : this.state.page +1 ,
      loading: false,
    });
  };
  render() {
    return (
      <div className="container">
        <h1 className="text-center" style={{ margin: "25px", marginTop: "56px", paddingTop:'22px'}}>
          {this.props.title}{" "}
        </h1>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={(
            <span className=""></span>
        )}
        >
          <div className="container row">
            {this.state.articles.map((element, index) => {
              return (
                <div className="col-md-4" key={index}>
                  <NewsItem
                    mode={this.props.mode}
                    title={element.title}
                    description={element.description}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                  />
                </div>
              );
            })}
          </div>
        </InfiniteScroll>

        {/* <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-primary" onClick={this.handlePreviousClick}>&larr;Previous</button>
        <button type="button" className="btn btn-primary" onClick={this.handleNextClick}>Next &rarr;</button>
        </div> */}
      </div>
    );
  }
}

export default News;
