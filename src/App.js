import React, {Component} from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage';
import ArticlePage from './pages/ArticlePages';
import NotFound from './pages/NotFoundPage';
import ArticleListPage from './pages/ArticleListPage';
import NavBar from './nav';


export default class App extends Component{
  render(){
    return(
      <BrowserRouter>
 
          <NavBar/>
          <div id="page-body">
            <Switch>
              <Route path="/" component={HomePage} exact/>
              <Route path="/about" component={AboutPage} exact/>
              <Route path="/articles-list" component={ArticleListPage} exact/>
              <Route path="/articles/:name" component={ArticlePage} exact/>
              <Route component={NotFound}/>
            </Switch>
            
          </div>
       
      </BrowserRouter>
      
    )
  }



}