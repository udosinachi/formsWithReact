import React from 'react'

function Product(props) {
    return (
        <div>
            <h2>{props.product.name}</h2>
            <p>${props.product.price}</p>
            -{props.product.description}
        </div>
    )
}

export default Product