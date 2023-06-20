import { useEffect } from 'react';
import {useAppContext} from "../../store/AppContext"

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { CardContainer } from '../../containers/CardContainer/CardContainer';
import { Carrinho } from '../Cart/Carrinho';
import { fetchCardsAction, fetchCartProductsAction } from '../../store/actions';

export const HomePage = () => {

  const {state, dispatch} = useAppContext();

  useEffect(()=>{
    fetchCardsAction(dispatch);
    fetchCartProductsAction(dispatch)
  },[])
   
  return (
    <Container fluid>
      <br />
        <Row>
          {state.cards.map((produtc) => (
            <Col xs={6} md={3} key={produtc.id}>

              <CardContainer 
                id={produtc.id}            
                image={produtc.image} 
                title={produtc.title} 
                description={produtc.description} 
                price={produtc.price} 
                disabled={produtc.hasAdd}
              />     

            </Col>
          ))}        
        </Row>
        <br />

        <Carrinho />
      </Container>
  )
}
