import React, {Component} from 'react';
import articleContent from '../components/article-content'
import ArticleListComponent from '../components/ArticleListComponent';




export default class ArticleListPage extends Component{
  render(){

 

    return(
      <div>
        <h1>Articles</h1>
        <ArticleListComponent articles={articleContent}/>
      </div>
    )
  }



}