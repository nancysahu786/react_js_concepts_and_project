import React, { useEffect, useState } from 'react';

function Home() {
    const [searchValue,setSearchValue] = useState("");
    const [product,setProduct] = useState(null);

    useEffect(()=>{
        (async function () {
            const res = await fetch('https://fakestoreapi.com/products');
            const productData = await res.json();

            productData.forEach((elem)=>{
                console.log(elem.title);
                
            })

            setProduct(productData);
        })()
    },[]);

  return (
    <div>
      <header className='nav_wrapper'>
        <input 
        type='text'
        className='search_input'
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        />
      </header>
    </div>
  )
}

export default Home
