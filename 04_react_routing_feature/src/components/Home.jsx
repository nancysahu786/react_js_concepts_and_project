import React, { useEffect, useState } from 'react';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import basicOps from './utility/basicOps';
import Categories from './Categories';
import ProductList from './ProductList';

function Home() {
  const [searchValue, setSearchValue] = useState("");
  const [product, setProduct] = useState(null);
const [sortDir,setSortDir] = useState(0);
const [categories, setCategories] = useState([]);
const [currCategory,setCrrCategory] = useState(["All Categories"]);

// get all the products
  useEffect(() => {
    (async function () {
      const res = await fetch('https://fakestoreapi.com/products');
      const productData = await res.json();

      productData.forEach((elem) => {
        console.log(elem.title);

      })

      setProduct(productData);
    })()
  }, []);



 let  modifiedArr = basicOps(product,searchValue,sortDir,currCategory);

//  get all the categories
useEffect(() => {
  (async function () {
    const res = await fetch('https://fakestoreapi.com/products/categories');
    const categoryData = await res.json();
    console.log("catergory-->",categoryData);
    
    setCategories(categoryData);
  })()
}, []);

  return (
    <div>
      <header className='nav_wrapper'>
        <div className="search_sortWrapper">
        <input
          type='text'
          className='search_input'
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />

        <div className="icon_container">
          <ArrowCircleUpIcon style={{color:'white'}} fontSize='large' onClick={()=>{setSortDir(1)}}></ArrowCircleUpIcon>
          <ArrowCircleDownIcon style={{color:'white'}} fontSize='large' onClick={()=>{setSortDir(-1)}}></ArrowCircleDownIcon>
        </div>
        </div>
       

       <div className="categories_wrapper">
        <Categories categories={categories} setCrrCategory={setCrrCategory}/>
       </div>
      </header>

      <main>
          
              <ProductList modifiedArr={modifiedArr}/>
            
        
      </main>
    </div>
  )
}

export default Home
