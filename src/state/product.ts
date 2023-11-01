import { atom, selector } from "recoil";
import { userState } from "./user";
import { CAREGORY_NAME } from "./category";

export interface IIngredient{
    id:number,
    name:string,
    price:number;
    amount:number;
    imgUrl:string;
  }
  
export interface IProductType{
    id:number;
    category:string;
    price:number;
    name:string;
    description:string;
    imgUrl:string;
    saleRate:number;
    ingredients?:IIngredient[];
    recipeId?:number;
    taggingProduct?:number[];
}

export interface IProducts{
    option?:boolean,
    list:IProductType[]
}

export const getProduct = selector({
  key:"getProduct",
  get:(({get})=>{
    const cuserState = get(userState);
    const productList = get(productListState);
    const productIndex = cuserState.productId;
    const product = productList.filter((ele)=>(ele.id === productIndex))[0];
    
    if(product !== undefined){
      return product;
    }else{
      return null;
    }
    })
})

export const getIngredients = selector({
    key:"getIngredients",
    get:(({get})=>{
      const cuserState = get(userState);
      const productList = get(productListState);
      const productIndex = cuserState.productId;
      const product = productList.filter((ele)=>(ele.id === productIndex))[0];
      const ingredients = product.ingredients;
      
      if(ingredients !== undefined){
        return ingredients;
      }else{
        return null;
      }
      })
})

export const getIngredient = selector({
  key:"getIngredient",
  get:(({get})=>{
    const cuserState = get(userState);
    const productList = get(productListState);
    const productIndex = cuserState.productId;
    const ingredientIndex = cuserState.ingredientId;
    const product = productList.filter((ele)=>(ele.id === productIndex))[0];
    const ingredients = product.ingredients;
    
    if(ingredients !== undefined){
      return ingredients[ingredientIndex];
    }else{
      return null;
    }
    })
})

export const productListState = atom<IProductType[]>({
  key:"productList",
  default:[{
      
    id:1,
    category:CAREGORY_NAME["RECIPE"],
    name:"비비고 육개장 야채 세트",

    imgUrl:"https://img.cjthemarket.com/images/file/product/843/20220510174529772.jpg?SF=webp&RS=299x299",

    price:6500,

    saleRate:0.1,

    description:"끓이기만 되는 비비고 육개장에 야채 1인분 세트(파, 양파, 버섯, 고추)를 넣어 푸짐한 한 끼를 해결할 수 있습니다.",

    ingredients:[{

      id:1,

      name:"파 10g",

      amount:1,

      price:300,

      imgUrl:"https://img.cjthemarket.com/images/file/product/843/20220510174529772.jpg?SF=webp&RS=299x299",

    },{

      id:2,

      name:"양파 20g",

      amount:1,

      price:300,

      imgUrl:"https://img.cjthemarket.com/images/file/product/843/20220510174529772.jpg?SF=webp&RS=299x299",

    },{

      id:3, 

      name:"못생긴 느타리버섯 15g",

      amount:1,

      price:300,

      imgUrl:"https://img.cjthemarket.com/images/file/product/843/20220510174529772.jpg?SF=webp&RS=299x299",

    },{

      id:4,

      name:"청양고추 5g",

      amount:1,

      price:100,

      imgUrl:"https://img.cjthemarket.com/images/file/product/843/20220510174529772.jpg?SF=webp&RS=299x299",

    },{

      id:5,

      name:"비비고 육개장 1EA",

      amount:1,

      price:5500,

      imgUrl:"https://img.cjthemarket.com/images/file/product/843/20220510174529772.jpg?SF=webp&RS=299x299",

    },

    ],
    recipeId:1,
    taggingProduct:[1,2,3,4,5]

  },



  {
    id:2,
    name:"비비고 얼큰 육개장 버섯 전골 세트",
    category:CAREGORY_NAME["RECIPE"],
    imgUrl:"https://www.cj.co.kr/images/theKitchen/PHON/0000001741/0000006541/0000001741.jpg",
    price:9200,
    saleRate:0.1,        
    description:"다양한 버섯과 두부에 육개장 한 팩을 넣어 맛과 향, 영양까지 풍부한 얼큰 육개장 버섯 전골. 건더기를 먹은 후 국물에 국수사리까지 넣어 먹으면 식사의 완성! 오랜만에 집에서 술 한잔을 기울이기 좋은 메뉴다.",        
    ingredients:[{

      id:1,

      name:"느타리버섯 30g",

      amount:1,

      price:500,

      imgUrl:"https://img.cjthemarket.com/images/file/product/843/20220510174529772.jpg?SF=webp&RS=299x299",

    },{

      id:2,

      name:"팽이버섯 30g",

      amount:1,

      price:500,

      imgUrl:"https://img.cjthemarket.com/images/file/product/843/20220510174529772.jpg?SF=webp&RS=299x299",

    },{

      id:3,

      name:"새송이버섯 30g",

      amount:1,

      price:500,

      imgUrl:"https://img.cjthemarket.com/images/file/product/843/20220510174529772.jpg?SF=webp&RS=299x299",

    },{

      id:4,

      name:"표고버섯 50g",

      amount:1,

      price:500,

      imgUrl:"https://img.cjthemarket.com/images/file/product/843/20220510174529772.jpg?SF=webp&RS=299x299",

    },{

      id:5,

      name:"양파 20g",

      amount:1,

      price:300,

      imgUrl:"https://img.cjthemarket.com/images/file/product/843/20220510174529772.jpg?SF=webp&RS=299x299",

    },{

      id:6,

      name:"대파 10g",

      amount:1,

      price:300,

      imgUrl:"https://img.cjthemarket.com/images/file/product/843/20220510174529772.jpg?SF=webp&RS=299x299",

    },{

      id:7,

      name:"두부 150g",

      amount:1,

      price:800,

      imgUrl:"https://img.cjthemarket.com/images/file/product/843/20220510174529772.jpg?SF=webp&RS=299x299",

    },{

      id:8,

      name:"쑥갓 10g",

      amount:1,

      price:300,

      imgUrl:"https://img.cjthemarket.com/images/file/product/843/20220510174529772.jpg?SF=webp&RS=299x299",

    },{

      id:9,

      name:"비비고 육개장 1EA",

      amount:1,

      price:5500,

      imgUrl:"https://img.cjthemarket.com/images/file/product/843/20220510174529772.jpg?SF=webp&RS=299x299",

    },


  ],
  recipeId:2,
  taggingProduct:[1,2,3,4,5]
  },



 

  {

    id:3,
    name:"육개장 순두부 찌개 세트",
    category:CAREGORY_NAME["RECIPE"],
    imgUrl:"https://www.cj.co.kr/images/theKitchen/PHON/0000001744/0000006562/0000001744.jpg",
    price:7700,
    saleRate:0.1,
    description:"부드러운 육개장과 순두부의 조합. 끓이기 힘들었다면 비비고 육개장으로 간편하게 만들어 보자. 비비고 육개장 한팩과 몽글몽글한 순두부로 고소함과 영양을 살린 육개장 순두부 찌개 세트",
    ingredients:[{
      id:1,
      name:"순두부 350g",
      amount:1,
      price:1500,

      imgUrl:"https://img.cjthemarket.com/images/file/product/843/20220510174529772.jpg?SF=webp&RS=299x299",

    },{

      id:2,

      name:"양파 20g",

      amount:1,

      price:300,

      imgUrl:"https://img.cjthemarket.com/images/file/product/843/20220510174529772.jpg?SF=webp&RS=299x299",

    },{

      id:3,

      name:"홍고추 5g",

      amount:1,

      price:100,

      imgUrl:"https://img.cjthemarket.com/images/file/product/843/20220510174529772.jpg?SF=webp&RS=299x299",

    },{

      id:4,

      name:"대파 10g",

      amount:1,

      price:300,

      imgUrl:"https://img.cjthemarket.com/images/file/product/843/20220510174529772.jpg?SF=webp&RS=299x299",

    },{

      id:5,

      name:"비비고 육개장 1EA",

      amount:1,

      price:5500,

      imgUrl:"https://img.cjthemarket.com/images/file/product/843/20220510174529772.jpg?SF=webp&RS=299x299",

    },

  ],
  
  recipeId:3,
  taggingProduct:[1,2,3,4,5]

  },





 

  {

    id:4,

    name:"육개장 칼국수&부추 겉절이 세트",
    category:CAREGORY_NAME["RECIPE"],

    imgUrl:"https://www.cj.co.kr/images/theKitchen/PHON/0000002238/0000009166/0000002238.jpg",

    price:9400,

    saleRate:0.1,

    description:"속까지 얼큰하여 먹고 나면 개운함이 느껴지는 육개장에 밥이 아닌 칼국수를 넣어보면 진하고 깊은 맛의 국물에 쫄깃하고 도톰한 면이 제격! 여기에 아삭하게 씹히는 양파와 상큼한 부추를 가볍게 버무려 곁들이면 한끼 식사로 손색없는 한 상이 된다.",

    ingredients:[{

      id:1,

      name:"제일제면소 생칼국수 150g",

      amount:1,

      price:2500,

      imgUrl:"https://img.cjthemarket.com/images/file/product/843/20220510174529772.jpg?SF=webp&RS=299x299",

    },{

      id:2,

      name:"대파 10g",

      amount:1,

      price:300,

      imgUrl:"https://img.cjthemarket.com/images/file/product/843/20220510174529772.jpg?SF=webp&RS=299x299",

    },{

      id:3,

      name:"양파 20g",

      amount:1,

      price:300,

      imgUrl:"https://img.cjthemarket.com/images/file/product/843/20220510174529772.jpg?SF=webp&RS=299x299",

    },{

      id:4,

      name:"부추 150g",

      amount:1,

      price:800,

      imgUrl:"https://img.cjthemarket.com/images/file/product/843/20220510174529772.jpg?SF=webp&RS=299x299",

    },{

      id:5,

      name:"비비고 육개장 1EA",

      amount:1,

      price:5500,

      imgUrl:"https://img.cjthemarket.com/images/file/product/843/20220510174529772.jpg?SF=webp&RS=299x299",

    },

  ],
  
  recipeId:4,
  taggingProduct:[1,2,3,4,5]


  },





 

  {

    id:5,

    name:"된장 누룽지죽 세트",
    category:CAREGORY_NAME["RECIPE"],

    imgUrl:"https://www.cj.co.kr/images/theKitchen/PHON/0000001737/0000006514/0000001737.jpg",

    price:5700,

    saleRate:0.1,

    description:"구수한 누룽지에 얼큰한 육개장 한봉을 넣고 푹 끓여내면 냄새부터 맛있는 육개장 누룽지죽이 완성된다. 달캉한 버섯과 폭신한 감자를 넣어 한 그릇 먹는 내내 재밌는 식감까지 느낄 수 있다.",

    ingredients:[{

      id:1,

      name:"누룽지 50g",

      amount:1,

      price:2500,

      imgUrl:"https://img.cjthemarket.com/images/file/product/843/20220510174529772.jpg?SF=webp&RS=299x299",

    },{

      id:2,

      name:"감자 50g",

      amount:1,

      price:800,

      imgUrl:"https://img.cjthemarket.com/images/file/product/843/20220510174529772.jpg?SF=webp&RS=299x299",

    },{

      id:3,

      name:"표고버섯 50g",

      amount:1,

      price:500,

      imgUrl:"https://img.cjthemarket.com/images/file/product/843/20220510174529772.jpg?SF=webp&RS=299x299",

    },{

      id:4,

      name:"피망",

      amount:1,

      price:700,

      imgUrl:"https://img.cjthemarket.com/images/file/product/843/20220510174529772.jpg?SF=webp&RS=299x299",

    },{

      id:5,

      name:"비비고 육개장 1EA",

      amount:1,

      price:5500,

      imgUrl:"https://img.cjthemarket.com/images/file/product/843/20220510174529772.jpg?SF=webp&RS=299x299",

    },

  ],
  
  recipeId:5,
  taggingProduct:[1,2,3,4,5]

  },



  {
    id:6,
    name:"못생긴 느타리버섯 30g",
    category:CAREGORY_NAME["VEGETABLE"],
    imgUrl:"https://www.cj.co.kr/images/theKitchen/PHON/0000001741/0000006541/0000001741.jpg",
    price:9200,
    saleRate:0.1,        
    description:"다양한 버섯과 두부에 육개장 한 팩을 넣어 맛과 향, 영양까지 풍부한 얼큰 육개장 버섯 전골. 건더기를 먹은 후 국물에 국수사리까지 넣어 먹으면 식사의 완성! 오랜만에 집에서 술 한잔을 기울이기 좋은 메뉴다.",        
    ingredients:[{

      id:1,

      name:"못생긴 느타리버섯 30g (추가)",

      amount:1,

      price:500,

      imgUrl:"https://img.cjthemarket.com/images/file/product/843/20220510174529772.jpg?SF=webp&RS=299x299",

    },
    {

      id:2,

      name:"못생긴 느타리버섯 60g (추가)",

      amount:1,

      price:750,

      imgUrl:"https://img.cjthemarket.com/images/file/product/843/20220510174529772.jpg?SF=webp&RS=299x299",

    }

  ],
  recipeId:-1,
  taggingProduct:[1,2,3,4,5]

  },


]
})
