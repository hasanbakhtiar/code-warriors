import React from 'react'
import {  Container, Row } from 'react-bootstrap'
import SingleCard from '../components/SingleCard'
import { useSelector } from 'react-redux'

const News = () => {
  const data = useSelector(p=>p);
  console.log(data);
  return (
    <Container>
      <h1 className='my-5 text-center'>News</h1>
      <Row className='g-5'>
        {data.map(i=>(

          <SingleCard alldata={i} key={i.id}/>
        ))}

      </Row>
    </Container>
  )
}

export default News