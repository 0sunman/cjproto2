import { useProducts } from '@/hook/productHook';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import { useEffect } from 'react';
import { getRecipeWithProductId } from '@/state/recipe';
import { useRecipe } from '@/hook/recipeHook';
import { useCurrentUser } from '@/hook/userHook';
import useUtilHook from '@/hook/utilHook';

export default function Product(){
    const router = useRouter();
    const id = Number(router.query.id);
    const {products, setProducts} = useProducts();
    const {currentUser, setCurrentUser, setProductId, setRecipeId, setIngredientId} = useCurrentUser();
    const {printPrice}=useUtilHook();
    //index
    
    const currentRecipe = useRecoilValue(getRecipeWithProductId)

        
    const product = products.filter((data:any)=>{
        return data.id === Number(id)
    })[0];
    

    useEffect(()=>{
        setCurrentUser({...currentUser, productId:id})
    },[])

    return(<>
    {product && <div className="Product">
        <img src={product.imgUrl} style={{width:"100%"}}/>
        <div className='wrapper'>
            <p>{product.name}</p>
            <p>
                <span>{product.saleRate * 100}%</span>
                <span>{printPrice(product.price * (1 - product.saleRate))}원</span> 
            </p>
            <p className="product-description">
                {product.description}
            </p>
            <p className="recipe-title">
                레시피
            </p>
            <hr></hr>
            <ul className="recipe">
            {currentRecipe && currentRecipe.step.map((recipeData,idx)=>{
                return (
                    <li>
                        <div>
                            <img src={recipeData.imgUrl}/>
                            <span>{idx+1}</span>
                        </div>
                        <p>{recipeData.description}</p>
                    </li>
                    
                )
            })}
            </ul>
            {/* <img src="/images/contents.webp" style={{marginTop:'50px'}}/> */}
        </div>
        
    </div>}
    </>)
}