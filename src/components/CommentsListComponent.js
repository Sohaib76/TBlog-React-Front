import React from 'react'

const CommentsListComponent = ({comments}) =>(

    <div>
        <h3>Comments</h3>
        {comments.map((comment,key) => (
            <div className="comments" key={key}>
                <h4>User: {comment.username}</h4>
                <p>Comment: {comment.text}</p>
            </div>
        ))}
    </div>
)

export default CommentsListComponent