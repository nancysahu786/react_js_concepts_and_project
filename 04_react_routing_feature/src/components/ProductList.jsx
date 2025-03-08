import React from 'react'

function ProductList(props) {
    const {modifiedArr } = props;
  return (
    <>
    {
     modifiedArr === null ? <><div>...loading</div></> : 
     <>
       {
        
        modifiedArr?.map((product) => {
          return (
            <div className='product'>
              <img src={product.image} alt="" className='product_image' style={{ width: '100px' }} />
              <div className='product_data'>
                <p className='product_title'>{product.title}</p>
                <p>{product.price}</p>
              </div>
            </div>
          )
        })
      }
     </>
  
            }
    </>
  )
}

export default ProductList
