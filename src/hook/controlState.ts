// import { IIngredient, IProductType, IProductPage } from '../state/user'

// export const replaceItemAtIndex = (arr:any, index:number, newValue:any) => {
//     return [...arr.slice(0,index), newValue, ...arr.slice(index+1)];
//   }
//   export const removeItemAtIndex = (arr:any,index:number) => {
//     return [...arr.slice(0,index), ...arr.slice(index+1)];
//   }
  
//   export const createProductChangedIngredient = (product:IProductType, index:number, newValue:any):IProductType => {
//     return {...product, ingredients : replaceItemAtIndex(product.ingredients,index,newValue)}
//   }
  
//   export const createListChangedProduct = (products:IProductPage, index:number, newValue:any):IProductPage => {
//     return {...products, list : replaceItemAtIndex(products.list,index,newValue)}
//   }
  
//   export const createIngredientAttributeAtProducts = (products:IProductPage, productIndex:number, ingredientIndex:number, newValue:any):IProductPage => {
//     return createListChangedProduct(
//       products,
//       productIndex,
//       createProductChangedIngredient(products.list[productIndex],ingredientIndex,newValue)
//     )
//   }

//   const getProduct = (products:IProductPage,productIndex:number):IProductType => products.list[productIndex]
//   const getIngredients = (products:IProductPage,productIndex:number):(IIngredient[] | null) => {
//     const product = getProduct(products,productIndex);
//     if(typeof product === "object"){
//       const ingredients = product.ingredients;
//       if(typeof ingredients !== "undefined"){
//         return ingredients;
//       }else{
//         return null;
//       }
//     }else{
//       return null
//     }
//   }
//   const getIngredient = (products:IProductPage,productIndex:number,ingredientIndex:number) => {
//     const ingredients = getIngredients(products,productIndex);
//     if(ingredients !== null){
//       return ingredients[ingredientIndex];
//     }else{
//       return null;
//     }
//   }

//   export const changeIngredientAttributeAtProducts = (products:IProductPage, productIndex:number, ingredientIndex:number, attrName:any, attrValue:any):IProductPage => {
//     return createIngredientAttributeAtProducts(products, productIndex, ingredientIndex, {...getIngredient(products,productIndex,ingredientIndex), [attrName]:attrValue});
//   }