import React, {useState,useEffect} from 'react';
import articleContent from '../components/article-content'
import NotFound from './NotFoundPage';
import ArticleListComponent from '../components/ArticleListComponent';
import CommentsListComponent from '../components/CommentsListComponent';
import UpvoteComponent from '../components/UpvoteComponent';
import AddCommentComponent from '../components/AddCommentComponent';


const ArticlePage = ({match})=>{

      const name = match.params.name

      const [articleInfo, setArticleInfo] = useState({upvotes:0,comments:[]})


      //Mounts and Updates
      useEffect(()=>{

        const fetchData = async()=>{
          const result = await fetch(`/api/articles/${name}`)
          const body = await result.json()
          console.log(body)
          setArticleInfo(body)
        }
        fetchData()
        
      },[name])

      
      
      const article = articleContent.find(article=>article.name==name)

      const otherArticles = articleContent.filter(article => article.name != name)



      
      if(!article) {
          return <NotFound/>
      }
    
      return(
      <div>
         <h1>{article.title}</h1>
        <UpvoteComponent name={name} upvotes={articleInfo.upvotes} setArticleInfo={setArticleInfo}/>
         {article.content.map((paragraph,key)=>(
             <p key={key}>{paragraph}</p>
         ))}
         <CommentsListComponent comments={articleInfo.comments}/>
         <AddCommentComponent articleName={name} setArticleInfo={setArticleInfo}/>
         <h3>Other Articles</h3>
         <ArticleListComponent articles={otherArticles}/>
      </div>
    )


    
  }

  export default ArticlePage




