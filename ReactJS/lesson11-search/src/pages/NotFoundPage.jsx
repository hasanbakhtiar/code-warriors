import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <Link to="/" className='d-flex align-items-center justify-content-center'>
      <img src="https://i.pinimg.com/originals/f3/1b/5b/f31b5bcda076125bf7010c781a4578a0.gif" alt="" />
    </Link>
  )
}

export default NotFoundPage