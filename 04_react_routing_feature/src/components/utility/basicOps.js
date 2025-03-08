import React from 'react'

const categorization = (arrOfProducts,currCategory) => {
  let modifiedArr = arrOfProducts;
  if(currCategory != "All Categories"){
    modifiedArr = modifiedArr.filter((product)=>{
      return product.category == currCategory;
    })
  }
    return modifiedArr;
  
}

const sorting = (arrOfProducts,sortDir) => {
  let modifiedArr = arrOfProducts;
  if(sortDir != 0){
    if(sortDir == 1){
      modifiedArr = modifiedArr.sort(incCorporator);
      // increasing order
    }else{
      // decreasing order
      modifiedArr = modifiedArr.sort(decCorporator)

    }
  }
    return modifiedArr;
}

const searchItems = (arrOfProducts,searchValue) =>{
  let modifiedArr = arrOfProducts;

  if (searchValue != "") {
    modifiedArr = modifiedArr.filter((product) => {
      let lowerSearchItem = searchValue.toLocaleLowerCase();
      let lowerProductItem = product.title.toLocaleLowerCase();
      return lowerProductItem.includes(lowerSearchItem);
    })
  }
  return modifiedArr;
}

export default  function basicOps(product,searchValue,sortDir,currCategory) {
  let modifiedArr = product;

  if(product === null){
    return;
  }

  // filtering and hiding products

  modifiedArr = searchItems(modifiedArr,searchValue);

  // sorting and rearrange 
   modifiedArr = sorting(modifiedArr,sortDir);
 

  // categorization
  
  modifiedArr = categorization(modifiedArr,currCategory);
 
 

  return modifiedArr;
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

