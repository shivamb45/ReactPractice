import React from 'react';
import './products.css';
import { ProductsProps, Product } from '../models/products.model';

const Products: React.FC<ProductsProps> = ({ productList, setProductList }) => {
    const addMe = (product: Product) => {
        const updatedProductList = productList.map(p =>
            p.name === product.name ? { ...p, countinCart: (p.countinCart ?? 0) + 1 } : p
        );
        setProductList(updatedProductList);
    };

    return (
        <section className="products-container">
            {productList.map((product, index) => (
                <div className="box" key={index}>
                    <div className="icon-container">
                        <img
                            src="https://images.pexels.com/photos/2113125/pexels-photo-2113125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            alt="Product"
                            width="50"
                            height="60"
                        />
                    </div>
                    <div>
                        <p><strong>{product.name}</strong>{product.description}</p>
                    </div>
                    <div>
                        <button onClick={() => addMe(product)}>Add Me</button>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Products;
