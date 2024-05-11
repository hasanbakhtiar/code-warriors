import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import slugify from 'slugify'

const SingleCard = ({alldata}) => {
  return (
    <Col sm={12} md={3}>
    <Card >
      <Card.Img variant="top" src={alldata.img} alt={alldata.title} />
      <Card.Body>
        <Card.Title>{alldata.title.slice(0,15)}...</Card.Title>
        <Card.Text>
        {alldata.desc.slice(0,100)}...
        </Card.Text>
        <LinkContainer to={`/news/${slugify(alldata.title)}`}><Button  className="primary">Read more</Button></LinkContainer>
      </Card.Body>
    </Card>
  </Col>
  )
}

export default SingleCard