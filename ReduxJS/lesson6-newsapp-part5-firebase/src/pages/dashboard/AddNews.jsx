import React from 'react'
import NewsForm from '../../components/NewsForm'
import {  addNewsToDatabase } from '../../tools/actions/newsActions'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const AddNews = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div>
      <h1 className='text-center my-5'>Add News</h1>
      <NewsForm formData={fd => {
        dispatch(addNewsToDatabase(fd));
        swal("News added", "", "success")
        setTimeout(() => {
          navigate('/dashboard')
        }, 1500)
      }} />
    </div>
  )
}

export default AddNews