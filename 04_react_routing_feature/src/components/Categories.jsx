import React from 'react'

function Categories(props) {
    const {categories,setCrrCategory} = props;
    console.log("categories",categories);
    
  return (
   <>
   <button className='category_option' onClick={()=>{
                setCrrCategory("All Categories");
            }}>All Categories</button>
   {
    categories.map((category)=>{
        return (
            <>    <button className='category_option' onClick={()=>{
                setCrrCategory(category)
            }}>{category}</button></>
        )
    

    })
   }
   </>
  )
}

export default Categories
