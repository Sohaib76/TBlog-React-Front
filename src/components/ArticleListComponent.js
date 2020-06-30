import React, {Component} from 'react';
import { Link } from 'react-router-dom';





export default class ArticleListComponent extends Component{
  render(){
    return(
      <div>
       
        {this.props.articles.map((article,key)=>(
              <Link className="article-list-item" key={key} to={`/articles/${article.name}`}>
                <h3>{article.title}</h3>
                <p>{article.content[0].substring(0,150)}...</p>
              </Link>
         ))}
      </div>
    )
  }



}