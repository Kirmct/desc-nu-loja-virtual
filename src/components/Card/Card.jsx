import React from 'react'
import Button from 'react-bootstrap/Button';
import CardBs from 'react-bootstrap/Card';
import { useAppContext } from '../../store/AppContext';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Card = ({id, image, title, description, price, onClick,onRemoveClick }) => {
  
 
  return (
    <CardBs style={{ width: '14rem' }}>
      <CardBs.Img variant="top" src={image} />
      <CardBs.Body>
        <CardBs.Title>{title}</CardBs.Title>
        <CardBs.Text>
          {description}, only ${price}
        </CardBs.Text>
        
        <Container>
          <Row>
            <Col> <Button  variant="primary" onClick={() => onClick(id, title, price, image) }>+</Button></Col>
            <Col> <Button  variant="primary" onClick={() => onRemoveClick(id) }>-</Button></Col>
          </Row>        
         
        </Container>
      </CardBs.Body>
    </CardBs>
  )
}
