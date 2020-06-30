import React, { useState } from 'react'

const AddCommentComponent = ({articleName, setArticleInfo}) =>{

    const [username, setUserName] = useState('')
    const [comment, addCommentText] = useState('') //change


    const addComment = async()=>{
        const result = await fetch(`/api/articles/${articleName}/add-comment`,{
            method:'post',
            body: JSON.stringify({username, text:comment}),
            headers:{
                'Content-Type':'application/json'
            }
        });
        const body = await result.json()
        setArticleInfo(body);
        setUserName('');
        addCommentText('');
    }



    return(
        <div className = "add-comment-form">
            <h3>Add a Comment</h3>
            <label>
                Name: 
                <input type="text" value={username} onChange={(event)=> setUserName(event.target.value)}/>
            </label>
            <label>
                Comment: 
                <textarea rows="4" cols="40" value={comment} onChange={(event)=> addCommentText(event.target.value)}/>
            </label>

        
            
            
            <button onClick={()=>addComment()}>Add Comment</button>
            <p></p>
        
        </div>
    )
    
}

export default AddCommentComponent