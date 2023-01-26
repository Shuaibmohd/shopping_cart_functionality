import React from 'react'
import { Row, Col } from 'react-bootstrap'
import ProductCard from '../components/ProductCard'
import { productsArray } from '../ProductsStore'

const Store = () => {
    return (
        <>
            <h1 align='center' className='p-4'>Welcome to the Store</h1>
            <Row xs={1} md={3} className='g-4'>
                {productsArray.map((product, idx) => (
                    <Col align='center' key={idx}>
                        <ProductCard product={product} />
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default Store