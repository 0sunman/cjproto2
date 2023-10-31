
export interface IComment{
    id:number;
    userId:string;
    description:string;
  }
  
export interface IRecipeComment extends IComment{
    imgUrl:string[];
    recipeId:number;
}
