import {Button, Container, Navbar, Modal} from 'react-bootstrap'
import React,{useState, useContext} from 'react'
import { CartContext } from '../CartContext'
import { productsArray } from '../ProductsStore';
import CardProduct from './CardProduct';

const NavbarComponents = () => {

  const cart = useContext(CartContext);

  const [ show, setShow ] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);

  const checkout = async () => {
    await fetch('http://localhost:4000/checkout',{
      method:'Post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({items: cart.items})
    }).then((response) => {
      return response.json();
    }).then((response) => {
      if(response.url) {
        window.location.assign(response.url);
      }
    })
  }


  return (
    <>
    <Navbar expand='sm'>
        <Navbar.Brand href='/'>Ecommerce Store</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end'>
            <Button onClick={handleShow}>Cart ({productsCount} Item)</Button>
        </Navbar.Collapse>
    </Navbar>
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Shopping Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {productsCount > 0 ?
        <>
          <p>Items in your cart:</p>
          {cart.items.map((currentProduct, idx) => (
            <CardProduct key={idx} id={currentProduct.id} quantity={currentProduct.quantity} />
          ))}

          <h3>Total: ${cart.getTotalCost().toFixed(2)}</h3>

          <Button variant='success' onClick={checkout} className='my-3'>
            Purchase Items!
          </Button>
        </>
        :
        <h2>There are no items in your cart!</h2>
      
      }
      </Modal.Body>
    </Modal>
    </>
  )
}

export default NavbarComponents;