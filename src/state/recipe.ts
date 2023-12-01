import { atom, selector } from "recoil";
import { userState } from "./user";
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
    productId:number,
    companyImageURL:string
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
            name:"일상 점심 레시피",
            description:"",
            companyImageURL:"data:image/png;base64,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",
            imgUrl:"/img_1107/d_com_4.jpg",
            step:[{
                id:1,
                recipeId:1,
                imgUrl:"/img_1107/d_all_1.jpg",
                description:"각각의 재료를 준비한다."
            },{
                id:2,
                recipeId:1,
                imgUrl:"/img_1107/recipe/1217.jpg",
                description:"대파, 청양고추는 어슷썰고, 느타리 버섯은 잘게 찢는다."
            },{
                id:3,
                recipeId:1,
                imgUrl:"/img_1107/recipe/1191.jpg",
                description:"냄비에 파기름을 만든 후, 육개장을 넣고 끓인다."
            },{
                id:4,
                recipeId:1,
                imgUrl:"/img_1107/recipe/1208.jpg",
                description:"느타리 버섯, 청양고추를 넣고 끓인다."
            }   ,]
        },
        {
            id:2,
            productId:2,
            name:"비비고 새우왕교자 계란찜",
            description:"",
            companyImageURL:"data:image/png;base64,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",
            imgUrl:"/img_1107/recipe/1357.jpg",
            step:[{
                id:1,
                recipeId:2,
                imgUrl:"/img_1107/recipe/1228.jpg",
                description:"영양부추와 팽이버섯은 밑둥을 제거하여 1cm로 자르고, 새우 왕교자는 6등분 한다."
            },{
                id:2,
                recipeId:2,
                imgUrl:"/img_1107/recipe/1368.jpg",
                description:"계란물을 풀고, 소금 한 꼬집을 넣어준다. 영양부추, 팽이버섯, 새우 왕교자를 골고루 계란물에 넣어준다."
            },{
                id:3,
                recipeId:2,
                imgUrl:"/img_1107/recipe/1246.jpg",
                description:"15분동안 중탕으로 끓여주고 마무리한다. 기호에 따라 윗면에 참기름을 둘러주면 더욱 맛있다."
            }]

        },
        {
            id:3,
            productId:3,
            name:"육개장 순두부 찌개",
            description:"",
            companyImageURL:"data:image/png;base64,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",
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
            name:"육개장 칼국수 & 부추 겉절이",
            description:"",
            companyImageURL:"data:image/png;base64,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",
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
            name:"된장 누룽지죽",
            description:"",
            companyImageURL:"data:image/png;base64,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",
            imgUrl:"https://www.cj.co.kr/images/theKitchen/PHON/0000001737/0000006514/0000001737.jpg",
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