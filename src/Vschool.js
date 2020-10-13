import React from 'react'
import products from './vschoolProducts'
import Product from './Product'
function Vschool(){
    const productComponents = products.map(item=><Product key={item.id} product={item}/>)
    return(
        <div>
            {productComponents}
        </div>
    )
}
export default Vschool