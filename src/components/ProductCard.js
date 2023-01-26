import React, {useContext} from 'react';
import {Card, Button, Row, Col, Form} from 'react-bootstrap';
import { CartContext } from '../CartContext'

const ProductCard = ({product}) => {

  const cart = useContext(CartContext);
  const productQuandtity = cart.getProductQuantity(product.id);
  console.log(cart.items)

  // console.log(productQuandtity)


  return (
    <Card>
        <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Title>${product.price}</Card.Title>
            {productQuandtity > 0 ? 
            <>
              <Form as={Row}>
                <Form.Label column='true' sm='6'>In Cart: {productQuandtity}</Form.Label>
                <Col sm='6'>
                  <Button sm='6' className='mx-2' onClick={() => cart.addOneToCart(product.id)}>+</Button>
                  <Button sm='6' className='mx-2' onClick={() => cart.removeOneFromCart(product.id)}>-</Button>
                  
                </Col>
              </Form>
              <Button variant='danger' className='my-3' onClick={() => cart.deleteFromCart(product.id)}>Remove From Cart</Button>
            </>  
            :
            <Button variant='primary' onClick={() => cart.addOneToCart(product.id)}>Add To Cart</Button>
          }

        </Card.Body>
    </Card>
  )
}

export default ProductCard