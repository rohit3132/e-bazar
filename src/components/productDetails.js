import React from "react"
import { Link, Navigate, useParams } from "react-router-dom";

import { getProductById } from '../fetcher';

const ProductDetail = () => {
    const [{title, image, specs, features, price}, product,  setProduct] = React.useState({errorMessage:'',  data: {}});
    const {productId} = useParams();

    React.useEffect(() => {
        const fetchData = async ()=> {
          const responseObject = await getProductById(productId);
           setProduct(responseObject);
        }
        fetchData();
    },[productId]);

    return(
        <article>
        <div className='category-product-title'>
            {product.data.title}
            

        </div>

        <figure>
            <div className='category_product-title'>
            <img src={`/assets/${product.data.image}` }alt={product.data.title}/>
            </div>
        </figure>

        <aside >
            <div className='category-product-info-capacity'>
            <h3>Dimensions</h3>
            <label>{specs.dimensions}</label>
            </div>

            {(product.data.specs.capacity &&
            <div className='category-product-info-capacity'>
            <h3>capacity</h3>
            <label>{product.data.specs.capacity}</label>
            </div>
            )}

    <div className="category-product-info-features">
                    <h3>Features</h3>
                    <ul>
                        {product.data.features?.map((f,i) => {
                            return <li key={`feature${i}`}>{f}</li>
                        })} 
                    </ul>
                </div>
        </aside>

        <aside className="category-product-finace">
                <div className="category-product-finance-price">
                  &#8377;{product.data.price}
                </div>
                <div className="category-product-info-stock">
                    <label>Stock level: {product.data.stock}</label>
                    <label>FREE Delivery</label>
                </div>

                <div className="category-product-action">
                    <button>Add to Basket</button>
                </div>
            </aside>

            <div>{product.data?.description}</div>
        </article>
        
    )
}

export default ProductDetail