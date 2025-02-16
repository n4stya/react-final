import { ProductModel } from './models/product.model';

const fetchProducts = async (): Promise<ProductModel[]> => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data: ProductModel[] = await response.json();

    return data.map((product: ProductModel) => ({
        id: product.id,
        title: product.title,
        price: product.price,
        description: product.description,
        category: product.category,
        image: product.image
    }));
};

export const productListData: Promise<ProductModel[]> = fetchProducts();
