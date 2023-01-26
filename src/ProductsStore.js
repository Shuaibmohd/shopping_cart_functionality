

const productsArray = [
    {
        id: 'price_1M0jkaSGLmru5JSiAnUdZgKy',
        title: 'Coffee',
        price: 3.99
    },
    {
        id: 'price_1M0jluSGLmru5JSiDK4xWkRi',
        title: 'Jeans',
        price: 12.99
    },
    {
        id: 'price_1M0jmSSGLmru5JSihaEJNE5C',
        title: 'Camera',
        price: 36.99
    }
]

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id);

    if(productData === undefined){
        console.log('Product Data does not exist for id:' + id);
        return undefined;
    }
    return productData;
}


export { productsArray, getProductData };