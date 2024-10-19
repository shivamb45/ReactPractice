interface Product {
    name: string;
    description: string;
    image: string;
    countinCart: number;
}

interface ProductsProps {
    productList: Product[];
    setProductList: React.Dispatch<React.SetStateAction<Product[]>>;
}

export type { Product, ProductsProps };