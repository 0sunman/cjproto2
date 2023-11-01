import { atom } from "recoil"

export interface Category{
    id:string,
    name:string,
    parent:string
}
export const CAREGORY_NAME = {
    "ALL":"10000000",
    "RECIPE":"10010000",
    "HMR":"10020000",
    "VEGETABLE":"10030000",
    "SAUCE":"10040000",
}
export const categoryState = atom<Category[]>({
    key:"userListState",
    default:[{
        id:"10000000",
        name:"전체",
        parent:"0"
    },{
        id:"10010000",
        name:"레시피",
        parent:"10000000",
    },{
        id:"10020000",
        name:"HMR",
        parent:"10000000",
    },{
        id:"10030000",
        name:"야채",
        parent:"10000000",
    },{
        id:"10040000",
        name:"소스",
        parent:"10000000",
    }]
})

