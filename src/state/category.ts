import { atom } from "recoil"

export interface ICategory{
    id:string,
    name:string,
    parent:string,
    engName:string,
    imgUrl:string
}
export const CATEGORY_NAME:any = {
    "ALL":"10000000",
    "RECIPE":"10010000",
    "HMR":"10020000",
    "VEGETABLE":"10030000",
    "SAUCE":"10040000",
}
export const categoryState = atom<ICategory[]>({
    key:"userListState",
    default:[{
        id:"10000000",
        name:"전체",
        engName:"ALL",
        parent:"0",
        imgUrl:"/images/food.jpg"
    },{
        id:"10010000",
        name:"레시피",
        engName:"RECIPE",
        parent:"10000000",
        imgUrl:"/images/recipe.jpg"
    },{
        id:"10020000",
        name:"HMR",
        engName:"HMR",
        parent:"10000000",
        imgUrl:"/images/hmr.jpg"
    },{
        id:"10030000",
        name:"야채",
        engName:"VEGETABLE",
        parent:"10000000",
        imgUrl:"/images/vegetable.jpg"
    },{
        id:"10040000",
        name:"소스",
        engName:"SAUCE",
        parent:"10000000",
        imgUrl:"/images/sauce.jpg"
    }]
})

