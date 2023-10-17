
import { useRecoilState, useSetRecoilState, } from 'recoil'
import { IIngredient, IProductType, IProducts, productState } from '../../state'
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { changeIngredientAttributeAtProducts } from '../../hook/controlState'


  

  


export default function Product(){
    const router = useRouter();
    const id = router.query.id;
    const ingredient = router.query.ingredient;
    const currentId = Number(id) - 1;
    const currentIngredientId = ingredient !== undefined ? Number(ingredient) - 1 : -1;
    const [products, setProducts] = useRecoilState(productState);
    const product = products.list.filter((data:any)=>{
        return data.id === Number(id)
    })[0];
    const getIngredient = (index:number) =>{
        return products.list[currentId].ingredients[index]
    }
    const plusIngredient = (index:number) =>{
        setProducts(changeIngredientAttributeAtProducts(
            products,
            currentId,
            index,
            "amount",
            products.list[currentId].ingredients[index].amount + 1
        ));
    }
    const minusIngredient = (index:number) =>{
        if(products.list[currentId].ingredients[index].amount - 1 < 0) return;
        setProducts(changeIngredientAttributeAtProducts(
            products,
            currentId,
            index,
            "amount",
            products.list[currentId].ingredients[index].amount - 1
        ));
    }
    useEffect(()=>{
    },[])
    useEffect(()=>{
        console.log(products);
        console.log(test)
    },[products])

    const test = product?.ingredients?.reduce((a:any,v:any,i:any)=>{
        if(v.amount > 0){
            a.push(v)
        }
        return a;
    },[]);

    return(<>
    {product && <div className="Product">
        <img src={product.imgUrl} style={{width:"100%"}}/>
        <div className='wrapper'>
            <p>{product.name}</p>
            <p>
                <span>{product.saleRate * 100}%</span>
                <span>{product.price * (1 - product.saleRate) +(currentIngredientId !== -1 ? (getIngredient(currentIngredientId).price * getIngredient(currentIngredientId).amount) : 0)}원</span> 
                

            </p>
            <p className="product-description">
                {product.description}
            </p>
            <p className="recipe-title">
                레시피
            </p>
            <hr></hr>
            <ul className="recipe">
            {product.recipe && product.recipe.map((recipeData,idx)=>{
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
        <div className={`dimmed ${products.option ? "on" : ""}`}></div>
        <div className={`Ingredients ${products.option ? "on" : ""}`} >
                    <div className='header'>
                    <ul>
                    <li style={{justifyContent:"end"}}>
                        <span className="material-symbols-outlined" onClick={()=>{setProducts({...products,option:false})}} style={{paddingRight:"15px"}}>
                         close
                        </span>
                    </li>
                        </ul>
                    </div>
                    <div className='mini-cart-scroll'>
                        <ul>
                        {product.ingredients.map((ingredient:IIngredient,index:number) => {
                            return <li>
                                <div>
                                {ingredient.name} 
                                </div>
                                <div>
                                    <button onClick={() => minusIngredient(index)}>-</button>
                                    <input type="text" value={ingredient.amount}/>
                                    <button onClick={() => plusIngredient(index)}>+</button>
                                </div>
                                </li>
                        })}
                        
                    </ul>
                </div>
            </div>
    </div>}
    </>)
}