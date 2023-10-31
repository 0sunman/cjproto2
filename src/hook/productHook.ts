import { useRecoilState, useRecoilValue, useSetRecoilState, } from 'recoil'
import { IProductType, productListState } from '@/state/product';
import { useCurrentUser } from './userHook';
import { useMiniCart } from './miniCartHook';
export const useProducts = () => {
    const [products, setProducts] = useRecoilState(productListState)

    const currentProduct = useRecoilValue(productListState);

    const getProductWithProductId = (id:number) => products.filter((product:IProductType)=>
        (product.id === id ? true : false)
    )[0]
    return {products, setProducts, currentProduct, getProductWithProductId}
}
