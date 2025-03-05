import React, { useEffect, useState } from 'react';

function Home() {
  const [searchValue, setSearchValue] = useState("");
  const [product, setProduct] = useState(null);

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

  let filterArr = product;

  if (searchValue != "") {
    filterArr = filterArr.filter((product) => {
      let lowerSearchItem = searchValue.toLocaleLowerCase();
      let lowerProductItem = product.title.toLocaleLowerCase();
      return lowerProductItem.includes(lowerSearchItem);
    })
  }

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

      <main>
        {
          filterArr === null ? <><div>...loading</div></> :
            <>
              {
                filterArr.map((product) => {
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
