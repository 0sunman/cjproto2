import { IProductType, IProducts } from '../state'

export const replaceItemAtIndex = (arr:any, index:number, newValue:any) => {
    return [...arr.slice(0,index), newValue, ...arr.slice(index+1)];
  }
  export const removeItemAtIndex = (arr:any,index:number) => {
    return [...arr.slice(0,index), ...arr.slice(index+1)];
  }
  
  export const createProductChangedIngredient = (product:IProductType, index:number, newValue:any):IProductType => {
    return {...product, ingredients : replaceItemAtIndex(product.ingredients,index,newValue)}
  }
  
  export const createListChangedProduct = (products:IProducts, index:number, newValue:any):IProducts => {
    return {...products, list : replaceItemAtIndex(products.list,index,newValue)}
  }
  
  export const createIngredientAttributeAtProducts = (products:IProducts, productIndex:number, ingredientIndex:number, newValue:any):IProducts => {
    return createListChangedProduct(
      products,
      productIndex,
      createProductChangedIngredient(products.list[productIndex],ingredientIndex,newValue)
    )
  }

  export const changeIngredientAttributeAtProducts = (products:IProducts, productIndex:number, ingredientIndex:number, attrName:any, attrValue:any):IProducts => {
    return createIngredientAttributeAtProducts(products, productIndex, ingredientIndex, {...products.list[productIndex].ingredients[ingredientIndex], [attrName]:attrValue});
  }