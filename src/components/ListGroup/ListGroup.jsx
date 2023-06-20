import Badge from 'react-bootstrap/Badge';
import ListGroupBs from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

export const ListGroup = ({id, name, price, quantity, onClick}) => {
  return (    
    <ListGroupBs as="ul" >
      <ListGroupBs.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">{name}</div>
          Total price: R$ <strong>{price * quantity}</strong> 
          <br />
          <Button className='my-2' variant="primary" onClick={() => onClick(id) }>Remove All</Button>
        </div>
        <Badge bg="primary" pill>
          <span> {quantity}</span> 
          
        </Badge>
      </ListGroupBs.Item>
    </ListGroupBs>
  )
}
