import React, {useContext, useState} from 'react'
import {Button} from 'react-bootstrap'
import { CartContext } from '../CartContext'
import { getProductData } from '../ProductsStore'

const CardProduct = ({id, quantity}) => {

    const cart = useContext(CartContext);
    const productData = getProductData(id);
  return (
    <>
        <h3>{productData.title}</h3>
        <p>{quantity} total</p>
        <p>${(quantity * productData.price).toFixed(2)}</p>
        <Button size='sm' variant='danger' onClick={() => cart.deleteFromCart(id)}>Remove</Button>
        <hr />
    </>
  )
}

export default CardProduct