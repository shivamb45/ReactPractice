import React, { useState } from 'react'
import Cart from '../cart/cart'
import Products from '../products/products'
import { Product } from '../models/products.model';

const singleProduct: Product = {
    name: 'Xyz Product',
    description: 'lorem ....',
    image: 'imagepath.png',
    countinCart: 0
}

const listOfProducts: Product[] = Array.from({ length: 10 }, (_, i) => ({
    ...singleProduct,
    name: `${singleProduct.name}${i + 1}`
}));

function MainApp() {
    const [productList, setProductList] = useState<Product[]>(listOfProducts);
    return (
        <div className="catalog-container">
        <section>
            <h1>Products</h1>
            <Products productList={productList} setProductList={setProductList}/>
        </section>
        <section>
            <h1>Cart Items</h1>
            <Cart productList={productList} setProductList={setProductList} />
        </section>
      </div>
    )
}

export default MainApp;