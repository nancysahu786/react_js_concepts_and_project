import React from 'react'

export default  function basicOps(product,searchValue,sortDir) {

  if(product === null){
    return;
  }

  // filtering and hiding products
  let filterArr = product;

  if (searchValue != "") {
    filterArr = filterArr.filter((product) => {
      let lowerSearchItem = searchValue.toLocaleLowerCase();
      let lowerProductItem = product.title.toLocaleLowerCase();
      return lowerProductItem.includes(lowerSearchItem);
    })
  }

  // sorting and rearrange 
  let filterSortedArray = filterArr;
  if(sortDir != 0){
    if(sortDir == 1){
      filterSortedArray = filterSortedArray.sort(incCorporator);
      // increasing order
    }else{
      // decreasing order
      filterSortedArray = filterSortedArray.sort(decCorporator)

    }
  }

  return filterSortedArray;
}

function incCorporator (product1,product2){
if(product1.price > product2.price){
  return 1;
}else{
  return -1;
}
}

function decCorporator (product1,product2){
  if(product1.price < product2.price){
    return 1;
  }else{
    return -1;
  }
}

