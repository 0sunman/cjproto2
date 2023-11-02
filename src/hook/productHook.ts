import { useRecoilState, useRecoilValue, useSetRecoilState, } from 'recoil'
import { IProductType, productListState } from '@/state/product';
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
    return {products, setProducts, currentProduct, getProductWithProductId,changeProduct}
}
