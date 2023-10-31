import { atom, selector } from "recoil";
import { userState } from "./user";
import { IRecipeComment } from "./comment";
import { productListState } from "./product";

export interface IRecipeState{
    recipes:IRecipe[]
}

export interface IRecipe{
    id:number;
    name:string,
    description:string;
    imgUrl:string;
    step:IRecipeStep[],
    comment?:IRecipeComment[],
    productId:number
}

export const getRecipe = selector({
    key:"getRecipe",
    get:({get})=>{
        const state = get(recipeState);
        const userInfoState = get(userState);
        const id = userInfoState.recipeId;
        return state.recipes.filter(ele=>{
            if(ele.id === id){
                return true;
            }
            return false;
        })[0];
    }
})

export const getRecipeWithProductId = selector({
    key:"getRecipeWithProductId",
    get:({get})=>{
        const state = get(recipeState);
        const userInfoState = get(userState);
        const id = userInfoState.productId;
        return state.recipes.filter(ele=>{
            if(ele.productId === id){
                return true;
            }
            return false;
        })[0];
    }
})

export const recipeState = atom<IRecipeState>({
    key:"recipeAtom",
    default:{
        recipes:[
        {
            id:1,
            productId:1,
            name:"CJ제일제당_레시피명_1",
            description:"",
            imgUrl:"https://img.cjthemarket.com/images/file/product/843/20220510174529772.jpg?SF=webp&RS=299x299",
            step:[{
                id:1,
                recipeId:1,
                imgUrl:"https://www.cj.co.kr/images/cjrecipe/0000002318/c4/c4_0000010725.jpg",
                description:"각각의 재료를 준비한다."
            },{
                id:2,
                recipeId:1,
                imgUrl:"https://www.cj.co.kr/images/cjrecipe/0000002318/c4/c4_0000010726.jpg",
                description:"대파, 청양고추, 홍고추는 어슷썰고, 양파는 0.5cm 두께로 슬라이스, 느타리버섯은 잘게 찢는다."
            },{
                id:3,
                recipeId:1,
                imgUrl:"https://www.cj.co.kr/images/cjrecipe/0000002318/c4/c4_0000010727.jpg",
                description:"냄비에 육개장과 물을 넣고 끓인다."
            },{
                id:4,
                recipeId:1,
                imgUrl:"https://www.cj.co.kr/images/cjrecipe/0000002318/c4/c4_0000010728.jpg",
                description:"양파, 대파, 느타리버섯, 수교자를 넣고 끓인다."
            },{
                id:5,
                recipeId:1,
                imgUrl:"https://www.cj.co.kr/images/cjrecipe/0000002318/c4/c4_0000010729.jpg",
                description:"다진 마늘, 청양고추, 홍고추, 소금을 넣어 한소끔 끓여낸다."
            },],
            comment:[{
                id:1,
                recipeId:1,
                imgUrl:["https://img.cjthemarket.com/images/file/product/843/20220510174529772.jpg?SF=webp&RS=299x299"],
                userId:"홍길동",
                description:"겁나 맛있어용 하하하"
            }]
        },
        {
            id:2,
            productId:2,
            name:"CJ제일제당_레시피명_2",
            description:"",
            imgUrl:"https://www.cj.co.kr/images/theKitchen/PHON/0000001741/0000006541/0000001741.jpg",
            step:[{
                id:1,
                recipeId:2,
                imgUrl:"https://www.cj.co.kr/images/cjrecipe/0000001741/c4/c4_0000007772.jpg",
                description:"느타리버섯과 팽이버섯은 밑둥을 제거하여 큼직하게 자르고, 새송이버섯과 표고버섯은 납작하게 썰어 놓는다."
            },{
                id:2,
                recipeId:2,
                imgUrl:"https://www.cj.co.kr/images/cjrecipe/0000001741/c4/c4_0000007773.jpg",
                description:"양파는 채썰고, 대파는 어슷썰고, 두부는 도톰하게 썰고, 전골냄비에 양파를 넓게 깔고 버섯과 두부를 둘러 담아놓는다."
            },{
                id:3,
                recipeId:2,
                imgUrl:"https://www.cj.co.kr/images/cjrecipe/0000001741/c4/c4_0000007775.jpg",
                description:"버섯의 숨이 죽기 시작하면 대파를 넣고 한 번 더 끓인 뒤 쑥갓을 얹어 마무리한다. 버섯을 건져 먹은 뒤 남은 국물에 사리를 넣어 먹으면 맛있다."
            }]

        },
        {
            id:3,
            productId:3,
            name:"CJ제일제당_레시피명_3",
            description:"",
            imgUrl:"https://www.cj.co.kr/images/theKitchen/PHON/0000001744/0000006562/0000001744.jpg",
            step:[{
                id:1,
                recipeId:3,
                imgUrl:"https://www.cj.co.kr/images/cjrecipe/0000001744/c4/c4_0000007783.jpg",
                description:"양파는 채썰고, 표고버섯은 밑동을 제거한 뒤 채 썰고, 대파와 고추는 어슷 썬다. 칵테일 새우는 깨끗한 물에 헹궈 체에 받쳐 물기를 제거한다."
            },{
                id:2,
                recipeId:3,
                imgUrl:"https://www.cj.co.kr/images/cjrecipe/0000001744/c4/c4_0000007784.jpg",
                description:"냄비에 물 3컵을 붓고, 다담 청국장찌개양념과 양파를 넣어 양파가 투명해 질때까지 센불에서 끓인다. 중불로 줄이고 칵테일 새우와 순두부를 넣고 살살 저어가며 끓인다."
            },{
                id:3,
                recipeId:3,
                imgUrl:"https://www.cj.co.kr/images/cjrecipe/0000001744/c4/c4_0000007785.jpg",
                description:"버섯과 고추, 대파를 넣고 한 소금 더 끓여서 마무리 한다."
            }]
        },
        {
            id:4,
            productId:4,
            name:"CJ제일제당_레시피명_4",
            description:"",
            imgUrl:"https://www.cj.co.kr/images/theKitchen/PHON/0000002238/0000009166/0000002238.jpg",
            step:[{
                id:1,
                recipeId:4,
                imgUrl:"https://www.cj.co.kr/images/cjrecipe/0000002238/c4/c4_0000010258.jpg",
                description:"각각의 재료를 준비한다."
            },{
                id:2,
                recipeId:4,
                imgUrl:"https://www.cj.co.kr/images/cjrecipe/0000002238/c4/c4_0000010259.jpg",
                description:"대파는 5cm 길이로 잘라 세로로 반 가르고, 부추는 5~6cm 길이로 자른다. 양파는 슬라이스하여 얼음물에 10분 담근 후 체에 밭쳐 물기 제거한다."
            },{
                id:3,
                recipeId:4,
                imgUrl:"https://www.cj.co.kr/images/cjrecipe/0000002238/c4/c4_0000010260.jpg",
                description:"볼에 분량의 [겉절이양념]을 넣고 섞는다."
            },{
                id:4,
                recipeId:4,
                imgUrl:"https://www.cj.co.kr/images/cjrecipe/0000002238/c4/c4_0000010261.jpg",
                description:"끓는 물에 생칼국수를 삶아 찬물에 헹군 후 체에 밭쳐 물기를 제거한다."
            },{
                id:5,
                recipeId:4,
                imgUrl:"https://www.cj.co.kr/images/cjrecipe/0000002238/c4/c4_0000010262.jpg",
                description:"볼에 부추, 양파, [겉절이양념]을 넣고 골고루 버무린다."
            },{
                id:6,
                recipeId:4,
                imgUrl:"https://www.cj.co.kr/images/cjrecipe/0000002238/c4/c4_0000010263.jpg",
                description:"냄비에 육개장과 대파를 넣고 한소끔 끓인 후 생칼국수를 넣고 1분 더 끓인다. 고추기름을 뿌리고 5를 곁들여낸다."
            }]
        },
        {
            id:5,
            productId:5,
            name:"CJ제일제당_레시피명_5",
            description:"https://www.cj.co.kr/images/theKitchen/PHON/0000001737/0000006514/0000001737.jpg",
            imgUrl:"",
            step:[{
                id:1,
                recipeId:5,
                imgUrl:"https://www.cj.co.kr/images/cjrecipe/0000001737/c4/c4_0000007757.jpg",
                description:"표고버섯은 밑동을 뗀 뒤 작게 다지고, 감자는 껍질을 벗겨 버섯과 비슷한 크기로 다진다."
            },{
                id:2,
                recipeId:5,
                imgUrl:"https://www.cj.co.kr/images/cjrecipe/0000001737/c4/c4_0000007758.jpg",
                description:"냄비에 물 5컵과 다담 냉이된장찌개양념을 넣어 잘 섞는다."
            },{
                id:3,
                recipeId:5,
                imgUrl:"https://www.cj.co.kr/images/cjrecipe/0000001737/c4/c4_0000007759.jpg",
                description:"2의 냄비에 누룽지를 넣고 센 불에서 끓이다 물이 끓어오르면 중약 불로 줄인 뒤 감자를 넣어 누룽지가 부드럽게 풀릴 때까지 끓인다. 이 때 누룽지와 감자가 바닥에 눌어붙지 않도록 중간중간 저어준다."
            },{
                id:4,
                recipeId:5,
                imgUrl:"https://www.cj.co.kr/images/cjrecipe/0000001737/c4/c4_0000007760.jpg",
                description:"누룽지가 부드러워지고 죽이 끓어오르면 표고버섯을 넣어 센 불에서 한 소끔 더 끓여 마무리한다."
            },{
                id:5,
                recipeId:5,
                imgUrl:"https://www.cj.co.kr/images/cjrecipe/0000001737/c4/c4_0000007761.jpg",
                description:"된장 누룽지죽을 그릇에 담아낸다."
            }]
        },
    ]}
})
export interface IRecipeStep{
    id:number;
    recipeId:number;
    imgUrl:string;
    description:string;
}