import React from 'react'

const UpvoteComponent = ({name,upvotes,setArticleInfo}) =>{
    const upvoteArticle = async()=>{
        const result = await fetch(`/api/articles/${name}/upvote`,{
            method:'post'
        })
        const body = await result.json()
        setArticleInfo(body)
    }

    return(
        <div className="upvote-section">
            <button onClick={()=>upvoteArticle()}>Add Upvote</button>
            <p>This post has been upvoted {upvotes} times</p>
        </div>
    )
   
}

export default UpvoteComponent