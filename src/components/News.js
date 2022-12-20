import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {

  static defaultProps = {
    country : "in",
    pageSize : 8,
    category : 'general'
  }

  static propTypes = {
    country : PropTypes.string,
    pageSize : PropTypes.number,
    category : PropTypes.string,

  }

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props){
    super(props);
    console.log("Hello I am a constructor form news component")
    this.state = {
      articles : [],
      loading : false,
      page : 1
    }
    document.title = `NewsMonkey - ${this.capitalizeFirstLetter(this.props.category)}`
  }

  async updateNews(){
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5abd17a1f07f443e9854b6dda904c254&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading : true});
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData)
    this.setState({
      articles : parsedData.articles, 
      totalResults : parsedData.totalResults,
      loading : false
    })
  }

  async componentDidMount(){
    this.updateNews();
  }

  handleNextClick = async() => {
    this.setState({page : this.state.page+1});
    this.updateNews();
  }

  handlePrevClick = async() => {
    this.setState({page : this.state.page-1});
    this.updateNews();
  }

  render() {
    return (
      <div>
        <div className="container my-3">
          <h1 className='text-center'><span class="badge bg-primary">NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</span></h1>
          {this.state.loading && <Spinner/>}
          <div className="container d-flex justify-content-between my-3">
            <button disabled = {this.state.page <= 1 ? true : false} type="button" className="btn btn-primary" onClick={this.handlePrevClick}>&larr; Previous</button>
            <button disabled = {this.state.page > Math.ceil(this.state.totalResults/this.props.pageSize - 1) ? true : false} type="button" className="btn btn-primary" onClick={this.handleNextClick}>Next &rarr;</button>
          </div>
          <div className="row">
            {this.state.articles.map((element) => {
              return  <div className="col-md-4" key={element.url}>
                        <NewsItem title = {element.title?element.title:"..."} description = {element.description?element.description:"..."} imgUrl = {element.urlToImage} newsUrl = {element.url} author = {element.author} date = {element.publishedAt} source = {element.source.name}/>
                      </div>
              })}
            
          </div>
        </div>
        <div className="container d-flex justify-content-between my-3">
          <button disabled = {this.state.page <= 1 ? true : false} type="button" className="btn btn-primary" onClick={this.handlePrevClick}>&larr; Previous</button>
          <button disabled = {this.state.page > Math.ceil(this.state.totalResults/this.props.pageSize - 1) ? true : false} type="button" className="btn btn-primary" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News