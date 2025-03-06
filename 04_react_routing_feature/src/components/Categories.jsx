import React from 'react'

function Categories(props) {
    const {categories} = props;
    console.log("categories",categories);
    
  return (
   <>
   <button className='category_option'>All Category </button>
   {
    categories.map((category)=>{
        return (
            <>    <button className='category_option'>{category}</button></>
        )
    

    })
   }
   </>
  )
}

export default Categories
