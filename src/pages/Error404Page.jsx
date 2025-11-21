import React from 'react'
import { Link } from 'react-router-dom'

const Error404Page = () => {
  return (
      <div>
          
          <div>Error 404, please go <Link to={-1}>back</Link>  or go to <Link to="/">home page</Link> </div>

    </div>
  )
}

export default Error404Page