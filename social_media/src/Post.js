import React from 'react'
import { useParams } from 'react-router-dom'

const Post = () => {
    const {id}=useParams()
  return (
    <div>
        <h3>Post :{id}</h3>
         </div>
  )
}

export default Post