import ProductCard from "../components/ProductCard"
import { products } from "../datas/products";

const ProductList = () => {

    return(
        <div>
            <h2>상품 목록</h2>
            <div className="product-list">
                {products.map((product) => (
                    <ProductCard 
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>
        </div>
    )
}

export default ProductList;