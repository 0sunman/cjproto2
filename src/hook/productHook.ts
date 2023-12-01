import { useRecoilState, useRecoilValue, useSetRecoilState, } from 'recoil'
import { IIngredient, IProductType, productListState } from '@/state/product';
import { useCurrentUser } from './userHook';
import { useMiniCart } from './miniCartHook';
import { userState } from '@/state/user';
import { useRouter } from 'next/router';
export const useProducts = () => {
    const [products, setProducts] = useRecoilState(productListState);
    const {currentUser, setCurrentUser} = useCurrentUser();
    const router = useRouter();

    const currentProduct = useRecoilValue(productListState);
    const changeProduct = (productId:number) => {
        setCurrentUser({...currentUser, productId:productId,})
        router.push(`/product/${productId}`);
      }
      const getProductWithProductId = (id:number) => products.filter((product:IProductType)=>
          (product.id === id ? true : false)
      )[0]
      const getProductSalePriceWithProductId = (id:number) => products.filter((product:IProductType)=>
          (product.id === id ? true : false)
      )[0].ingredients?.reduce((totalSum:number, ingredient:IIngredient)=>{
        totalSum += ingredient.amount * (ingredient.price * (1 - (ingredient.saleRate !== undefined ? ingredient.saleRate : 0)))
        return totalSum;
      },0)
      const getProductPriceWithProductId = (id:number) => products.filter((product:IProductType)=>
          (product.id === id ? true : false)
      )[0].ingredients?.reduce((totalSum:number, ingredient:IIngredient)=>{
        totalSum += ingredient.amount * ingredient.price;
        return totalSum;
      },0)
      const getSaleRate = (price:number,salePrice:number) => String(Number(((1 - salePrice!/price!)).toFixed(2)) * 100).substring(0,2)
    return {products, setProducts, currentProduct, getProductWithProductId,changeProduct, getProductPriceWithProductId, getProductSalePriceWithProductId,getSaleRate}
}
