import React from 'react'

const CategoryProduct = ({title, image, specs, features, price, stock}) => {
    return(
        <article>
        <div className='category-product-title'>
            {title}
        </div>

        <figure>
            <div className='category_product-image-container'>
            <img src={`,/assets/${image}` }alt={title}/>
            </div>
        </figure>

        <aside >
            
            <div className='category-product-info-capacity'>
            <h3>Dimensions</h3>
            <label>{specs.dimensions}</label>
            </div>

            <div className='category-product-info-capacity'>
            <h3>capacity</h3>
            <label>{specs.capacity}</label>
            </div>
        </aside>
        </article>
    )
}

export default CategoryProduct