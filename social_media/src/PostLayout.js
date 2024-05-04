import React from 'react'
import { Link, Outlet } from 'react-router-dom'
const PostLayout = () => {
  return (
    // fragment
    <> 
     <ul>
        <li><Link to='/postpage/1'>PostPage 1</Link></li>
        <li><Link to='/postpage/2'>PostPage 2</Link></li>
        <li><Link to='/postpage/3'>PostPage 3</Link></li>
      </ul>
      {/* it work only in -v 6 */}
      <Link to="/postpage/newpost">NewPost</Link>
      {/* it not work without outlet it shows the current page */}
      <Outlet/>
    </>
  )
}

export default PostLayout