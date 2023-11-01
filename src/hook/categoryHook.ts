import { categoryState } from "@/state/category";
import { useRecoilState } from "recoil"


export const useCategory = () => {
    const [category,setCategory] = useRecoilState(categoryState);
    return {category,setCategory}
}