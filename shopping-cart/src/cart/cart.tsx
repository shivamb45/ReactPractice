import React from 'react';
import ReactDOM from 'react-dom/client';
import './cart.css';
import Products from '../products/products';
import { ProductsProps } from '../models/products.model';

let cartItem = {
    name: 'Xyz Product',
    description: 'lorem ....',
    image: 'imagepath.png',
    count: 1
}


const Cart: React.FC<ProductsProps> = ({ productList, setProductList }) => {

    return (
        <section className="products-container">
            <ul>
            {productList.map((product: any) => {
                return (
                    <li>{product.name}, Quantity - {product.countinCart}</li>
                )
            })}
            </ul>
        </section>
    );
}

export default Cart;