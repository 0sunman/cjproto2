import {atom} from 'recoil';

export interface IUserState{
  url:string;
  recipeId:number;
  productId:number;
  ingredientId:number;
}

export const userState = atom<IUserState>({
  key:'contentAtom',
  default:{
      url:"/",
      recipeId:1,
      productId:1,
      ingredientId:1,
  }
})

