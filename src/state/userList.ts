import { atom } from "recoil"

export interface IUser{
    id:string,
    imgUrl:string
}

export const userListState = atom<IUser[]>({
    key:"userListState",
    default:[{
        id:"goodman1",
        imgUrl:"data:image/jpeg;base64,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"
    },{
        id:"nicegirl",
        imgUrl:"https://live.staticflickr.com/7375/14177453364_a3442dfa70_n.jpg"
    },{
        id:"michael_davis",
        imgUrl:"https://upload.wikimedia.org/wikipedia/en/8/83/DoctorWho42_cat_Snow.jpg"
    },{
        id:"sarah_wilson",
        imgUrl:"https://live.staticflickr.com/7375/14177453364_a3442dfa70_n.jpg"
    },{
        id:"david_brown",
        imgUrl:"https://upload.wikimedia.org/wikipedia/en/8/83/DoctorWho42_cat_Snow.jpg"
    }]
})
