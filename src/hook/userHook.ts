import { userState } from "@/state/user"
import { useRouter } from "next/router"
import { useRecoilState } from "recoil"

export const useCurrentUser = ()=>{
    const router = useRouter();
    const [currentUser, setCurrentUser] = useRecoilState(userState)
    const setProductId = (productId:number) => {setCurrentUser({...currentUser, productId})}
    const setRecipeId = (recipeId:number) => {setCurrentUser({...currentUser, recipeId})}
    const setIngredientId = (ingredientId:number) => {setCurrentUser({...currentUser, ingredientId})}
    const setCurrentUrl = () => {setCurrentUser({...currentUser, url:router.route})}

    return {currentUser, setCurrentUser, setProductId, setRecipeId,setIngredientId,setCurrentUrl}
}