import { useProducts } from "@/hook/productHook";
import { useRouter } from "next/router";
import styled from '@emotion/styled'


const CategoryWrapper = styled.div`margin-top:44px;display:flex; flex-direction:column; width:100%;`;
export default function CategoryList(){
    const router = useRouter()
    const {getProductWithProductId} = useProducts();
    const getProduct = getProductWithProductId;
    return (<CategoryWrapper>카테고리</CategoryWrapper>)
}