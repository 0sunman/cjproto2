import { atom } from "recoil"

export interface IUser{
    id:string,
    imgUrl:string
}

export const userListState = atom<IUser[]>({
    key:"userListState",
    default:[{
        id:"joo020202",
        imgUrl:"/new/u/joo.png"
    },{
        id:"d.eunjee",
        imgUrl:"/new/u/jee.png"
    },{
        id:"minikini_k2",
        imgUrl:"/new/u/kang.png"
    },{
        id:"0sunman",
        imgUrl:"/new/u/0sun.png"
    }]
})

