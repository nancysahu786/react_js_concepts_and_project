import React, { useEffect, useState } from 'react';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import basicOps from './utility/basicOps';
import Categories from './Categories';

function Home() {
  const [searchValue, setSearchValue] = useState("");
  const [product, setProduct] = useState(null);
const [sortDir,setSortDir] = useState(0);
const [categories, setCategories] = useState([]);

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

  // let filterArr = product;

  // if (searchValue != "") {
  //   filterArr = filterArr.filter((product) => {
  //     let lowerSearchItem = searchValue.toLocaleLowerCase();
  //     let lowerProductItem = product.title.toLocaleLowerCase();
  //     return lowerProductItem.includes(lowerSearchItem);
  //   })
  // }

 let  modifiedArr = basicOps(product,searchValue,sortDir);

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
        <Categories categories={categories}/>
       </div>
      </header>

      <main>
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
      </main>
    </div>
  )
}

export default Home
