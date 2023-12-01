import { atom, selector } from "recoil";
import { userState } from "./user";
import { CATEGORY_NAME } from "./category";

export interface IIngredient{
    id:number,
    name:string,
    price:number;
    amount:number;
    imgUrl:string;
    saleRate?:number;
    addProduct?:boolean;
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
    videos?:string[];
    descriptionImage?:string;
    addProduct?:number[];
}

export interface ICompareProduct{
  name:string,
  data:{
    c:number,
    k:number,
    n:number
  }
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
export const compareProductState = atom<ICompareProduct[]>({
  key:"compareProduct",
  default:[{
    name:"대파",
    data:{
      c:2200,
      n:2500,
      k:2490
    }
  },
  {
    name:"느타리버섯",
    data:{
      c:1490,
      n:1500,
      k:1590
    }
  },
  {
    name:"청양고추",
    data:{
      c:1450,
      n:1980,
      k:1250
    }
  },
  {
    name:"팽이버섯",
    data:{
      c:1160,
      n:950,
      k:1290
    }
  },
  {
    name:"영양부추",
    data:{
      c:3500,
      n:4450,
      k:4990
    }
  },
  {
    name:"피양파",
    data:{
      c:2190,
      n:1935,
      k:2990
    }
  }]
})
/*
청양고추 2개 (30~45g) : 2000
      name:"영양부추 100g", : 
      name:"팽이버섯 150g",
      name:"피양파 (300~400g)",

*/

export const productListState = atom<IProductType[]>({
  key:"productList",
  default:[
    {
      
    id:1,
    category:CATEGORY_NAME["RECIPE"],
    name:"일상 점심 세트",

    imgUrl:"/new/k/k1.jpeg",

    price:8000,

    saleRate:0.4,

    description:"비비고 고기 듬뿍 육개장에 볼매 야채(대파, 느타리버섯, 청양고추)를 준비합니다.",
    //"끓이기만 되는 비비고 육개장에 야채 1인분 세트(파, 양파, 버섯, 고추)를 넣어 푸짐한 한 끼를 해결할 수 있습니다.",
    descriptionImage:"/img_1107/detail/HMR_detail_sixdog.webp",
    ingredients:[{

      id:1,

      name:"대파 1개 (250g)",

      amount:1,

      price:2200,
      saleRate:0.3,

      imgUrl:"/img_1107/d_pa.jpg",

    },{

      id:2,

      name:"느타리버섯 (200g)",

      amount:1,

      price:1250,
      saleRate:0.25,

      imgUrl:"/img_1107/d_nuta.jpg",

    },{

      id:3, 

      name:"청양고추 (80g)",

      amount:1,

      price:1450,
      saleRate:0.2,

      imgUrl:"/img_1107/d_gochu.jpg",

    },{

      id:5,

      name:"비비고 고기듬뿍 육개장 1EA",

      amount:1,

      price:5980,
      saleRate:0.2,

      imgUrl:"/images/6dog.jpg",

    },{

      id:6,

      name:"햇반 210g 1EA",

      amount:0,

      price:1900,
      saleRate:0.2,

      imgUrl:"/images/hb2.jpg",
      addProduct:true
    },{

      id:7,

      name:"비비고 썰은배추김치 100g",

      amount:0,

      price:1800,
      saleRate:0.2,

      imgUrl:"/images/kc.jpg",
      addProduct:true

    },{

      id:8,

      name:"비비고 소고기장조림 125g",

      amount:0,

      price:3680,
      saleRate:0.2,


      imgUrl:"/images/jjr.jpg",
      addProduct:true

    }
    /*
    name:"햇반 작은공기130g 1EA",
  
    imgUrl:"/images/shrimp.jpg",
  
    price:1300,
    name:"햇반 210g 1EA",
  
    imgUrl:"/images/shr0mp.jpg",
  
    price:1900,
  
    name:"햇반 큰공기 300g 1EA",
  
    imgUrl:"/images/shrimp.jpg",
  
    price:2700,
    */

    ],
    recipeId:1,
    taggingProduct:[30003,30004,30005],
    videos:["d_all_1.mp4","d_six_1.mp4","d_six_2.mp4","d_six_3.mp4","d_six_4.mp4","d_six_5.mp4","d_six_6.mp4","d_six_7.mp4"],
    addProduct:[90011,90012,90013]

  },


  {
    id:2,
    name:"비비고 새우왕교자 계란찜",
    category:CATEGORY_NAME["RECIPE"],
    imgUrl:"/new/k/k2.jpeg",
    price:2500,
    saleRate:0.4,        
    description:"비비고 새우왕교자를 영양부추와 팽이버섯와 동일한 크기로 썰어서 계란물에 넣어 스팀해서 완성하는 추억의 계란찜.",       
    descriptionImage:"/img_1107/detail/HMR_detail_sp.webp", 
    ingredients:[{

      id:1,

      name:"영양부추 100g",

      amount:1,

      price:3100,
      saleRate:0.1,

      imgUrl:"/img_1107/d_buchu_1.jpg",

    },{

      id:2,

      name:"팽이버섯 300g",

      amount:1,

      price:1000,
      saleRate:0.1,


      imgUrl:"/img_1107/d_pang_1.jpg",

    },{

      id:3,

      name:"비비고 새우 왕교자 315g * 2",

      amount:1,

      price:8980,
      saleRate:0.1,


      imgUrl:"/images/shrimp.jpg",

    }
    ,{

      id:6,

      name:"햇반 210g 1EA",

      amount:0,

      price:1900,
      saleRate:0.2,

      imgUrl:"/images/hb2.jpg",
      addProduct:true
    },{

      id:7,

      name:"비비고 썰은배추김치 100g",

      amount:0,

      price:1800,
      saleRate:0.2,

      imgUrl:"/images/kc.jpg",
      addProduct:true

    },{

      id:8,

      name:"비비고 소고기장조림 125g",

      amount:0,

      price:3680,
      saleRate:0.2,


      imgUrl:"/images/jjr.jpg",
      addProduct:true

    }

  ],
  recipeId:2,
  taggingProduct:[30010,30001,30002],
  videos:["d_egg_1.mp4","d_egg_2.mp4","d_egg_3.mp4"],
  addProduct:[90011,90012,90013]
  },



 

  // {

  //   id:3,
  //   name:"육개장 순두부 찌개 세트",
  //   category:CATEGORY_NAME["RECIPE"],
  //   imgUrl:"https://www.cj.co.kr/images/theKitchen/PHON/0000001744/0000006562/0000001744.jpg",
  //   price:7700,
  //   saleRate:0.1,
  //   description:"부드러운 육개장과 순두부의 조합. 끓이기 힘들었다면 비비고 육개장으로 간편하게 만들어 보자. 비비고 육개장 한팩과 몽글몽글한 순두부로 고소함과 영양을 살린 육개장 순두부 찌개 세트",
  //   ingredients:[{
  //     id:1,
  //     name:"순두부 350g",
  //     amount:1,
  //     price:1500,
  //     saleRate:0.1,

  //     imgUrl:"https://img.cjthemarket.com/images/file/product/843/20220510174529772.jpg?SF=webp&RS=299x299",

  //   },{

  //     id:2,

  //     name:"피양파 (500g)",

  //     amount:1,

  //     price:2000,
  //     saleRate:0.1,

  //     imgUrl:"https://img.cjthemarket.com/images/file/product/843/20220510174529772.jpg?SF=webp&RS=299x299",

  //   },{

  //     id:3,

  //     name:"홍고추 50g",

  //     amount:1,

  //     price:1200,
  //     saleRate:0.1,

  //     imgUrl:"https://img.cjthemarket.com/images/file/product/843/20220510174529772.jpg?SF=webp&RS=299x299",

  //   },{

  //     id:4,

  //     name:"대파 1개 (250g)",

  //     amount:1,

  //     price:2200,
  //     saleRate:0.1,

  //     imgUrl:"https://img.cjthemarket.com/images/file/product/843/20220510174529772.jpg?SF=webp&RS=299x299",

  //   },{

  //     id:5,

  //     name:"비비고 육개장 1EA",

  //     amount:1,

  //     price:5980,
  //     saleRate:0.1,

  //     imgUrl:"https://img.cjthemarket.com/images/file/product/843/20220510174529772.jpg?SF=webp&RS=299x299",

  //   },{

  //     id:6,

  //     name:"햇반 210g 1EA",

  //     amount:0,

  //     price:1900,
  //     saleRate:0.2,

  //     imgUrl:"/images/hb2.jpg",
  //     addProduct:true
  //   },{

  //     id:7,

  //     name:"비비고 썰은배추김치 100g",

  //     amount:0,

  //     price:1800,
  //     saleRate:0.2,

  //     imgUrl:"/images/kc.jpg",
  //     addProduct:true

  //   },{

  //     id:8,

  //     name:"비비고 소고기장조림 125g",

  //     amount:0,

  //     price:3680,
  //     saleRate:0.2,


  //     imgUrl:"/images/jjr.jpg",
  //     addProduct:true

  //   }

  // ],
  
  // recipeId:3,
  // taggingProduct:[30001,30003,30005],
  // addProduct:[90011,90012,90013]

  // },





 

  // {

  //   id:4,

  //   name:"육개장 칼국수&부추 겉절이 세트",
  //   category:CATEGORY_NAME["RECIPE"],

  //   imgUrl:"https://www.cj.co.kr/images/theKitchen/PHON/0000002238/0000009166/0000002238.jpg",

  //   price:9400,

  //   saleRate:0.1,

  //   description:"속까지 얼큰하여 먹고 나면 개운함이 느껴지는 육개장에 밥이 아닌 칼국수를 넣어보면 진하고 깊은 맛의 국물에 쫄깃하고 도톰한 면이 제격! 여기에 아삭하게 씹히는 양파와 상큼한 부추를 가볍게 버무려 곁들이면 한끼 식사로 손색없는 한 상이 된다.",

  //   ingredients:[{

  //     id:1,

  //     name:"제일제면소 생칼국수 150g",

  //     amount:1,

  //     price:2500,
  //     saleRate:0.1,

  //     imgUrl:"https://img.cjthemarket.com/images/file/product/843/20220510174529772.jpg?SF=webp&RS=299x299",

  //   },{

  //     id:2,

  //     name:"대파 1개 (250g)",

  //     amount:1,

  //     price:2200,
  //     saleRate:0.1,

  //     imgUrl:"https://img.cjthemarket.com/images/file/product/843/20220510174529772.jpg?SF=webp&RS=299x299",

  //   },{

  //     id:3,

  //     name:"피양파 (500g)",

  //     amount:1,

  //     price:2000,
  //     saleRate:0.1,

  //     imgUrl:"https://img.cjthemarket.com/images/file/product/843/20220510174529772.jpg?SF=webp&RS=299x299",

  //   },{

  //     id:4,

  //     name:"영양부추 100g",

  //     amount:1,

  //     price:3100,
  //     saleRate:0.1,

  //     imgUrl:"https://img.cjthemarket.com/images/file/product/843/20220510174529772.jpg?SF=webp&RS=299x299",

  //   },{

  //     id:5,

  //     name:"비비고 육개장 1EA",

  //     amount:1,

  //     price:5500,
  //     saleRate:0.1,

  //     imgUrl:"https://img.cjthemarket.com/images/file/product/843/20220510174529772.jpg?SF=webp&RS=299x299",

  //   },{

  //     id:6,

  //     name:"햇반 210g 1EA",

  //     amount:0,

  //     price:1900,
  //     saleRate:0.2,

  //     imgUrl:"/images/hb2.jpg",
  //     addProduct:true
  //   },{

  //     id:7,

  //     name:"비비고 썰은배추김치 100g",

  //     amount:0,

  //     price:1800,
  //     saleRate:0.2,

  //     imgUrl:"/images/kc.jpg",
  //     addProduct:true

  //   },{

  //     id:8,

  //     name:"비비고 소고기장조림 125g",

  //     amount:0,

  //     price:3680,
  //     saleRate:0.2,


  //     imgUrl:"/images/jjr.jpg",
  //     addProduct:true

  //   }

  // ],
  
  // recipeId:4,
  // taggingProduct:[30002,30004,30006,30007],
  // addProduct:[90011,90012,90013]


  // },





 

  // {

  //   id:5,

  //   name:"된장 누룽지죽 세트",
  //   category:CATEGORY_NAME["RECIPE"],

  //   imgUrl:"https://www.cj.co.kr/images/theKitchen/PHON/0000001737/0000006514/0000001737.jpg",

  //   price:5700,

  //   saleRate:0.1,

  //   description:"구수한 누룽지에 얼큰한 육개장 한봉을 넣고 푹 끓여내면 냄새부터 맛있는 육개장 누룽지죽이 완성된다. 달캉한 버섯과 폭신한 감자를 넣어 한 그릇 먹는 내내 재밌는 식감까지 느낄 수 있다.",

  //   ingredients:[{

  //     id:1,

  //     name:"누룽지 500g",

  //     amount:1,

  //     price:2500,
  //     saleRate:0.1,

  //     imgUrl:"https://img.cjthemarket.com/images/file/product/843/20220510174529772.jpg?SF=webp&RS=299x299",

  //   },{

  //     id:2,

  //     name:"감자 500g",

  //     amount:1,

  //     price:3500,
  //     saleRate:0.1,

  //     imgUrl:"https://img.cjthemarket.com/images/file/product/843/20220510174529772.jpg?SF=webp&RS=299x299",

  //   },{

  //     id:3,

  //     name:"표고버섯 100g",

  //     amount:1,

  //     price:5000,
  //     saleRate:0.1,

  //     imgUrl:"https://img.cjthemarket.com/images/file/product/843/20220510174529772.jpg?SF=webp&RS=299x299",

  //   },{

  //     id:4,

  //     name:"피망 2개",

  //     amount:1,

  //     price:2000,
  //     saleRate:0.1,

  //     imgUrl:"https://img.cjthemarket.com/images/file/product/843/20220510174529772.jpg?SF=webp&RS=299x299",

  //   },{

  //     id:5,

  //     name:"비비고 육개장 1EA",

  //     amount:1,

  //     price:5980,
  //     saleRate:0.1,

  //     imgUrl:"https://img.cjthemarket.com/images/file/product/843/20220510174529772.jpg?SF=webp&RS=299x299",

  //   },{

  //     id:6,

  //     name:"햇반 210g 1EA",

  //     amount:0,

  //     price:1900,
  //     saleRate:0.2,

  //     imgUrl:"/images/hb2.jpg",
  //     addProduct:true
  //   },{

  //     id:7,

  //     name:"비비고 썰은배추김치 100g",

  //     amount:0,

  //     price:1800,
  //     saleRate:0.2,

  //     imgUrl:"/images/kc.jpg",
  //     addProduct:true

  //   },{

  //     id:8,

  //     name:"비비고 소고기장조림 125g",

  //     amount:0,

  //     price:3680,
  //     saleRate:0.2,


  //     imgUrl:"/images/jjr.jpg",
  //     addProduct:true

  //   }

  // ],
  
  // recipeId:5,
  // taggingProduct:[30001,30002,30003],
  // addProduct:[90011,90012,90013]

  // },



  {
      
    id:30001,
    category:CATEGORY_NAME["VEGETABLE"],
    name:"팽이버섯",

    imgUrl:"/img_1107/d_pang_1.jpg",

    price:1000,

    saleRate:0.4,

    description:"",
    descriptionImage:"/img_1107/detail/vegetable_d_pang.png",
    //"끓이기만 되는 비비고 육개장에 야채 1인분 세트(파, 양파, 버섯, 고추)를 넣어 푸짐한 한 끼를 해결할 수 있습니다.",

    ingredients:[{

      id:1,

      name:"팽이버섯 추가",

      amount:1,

      price:1000,
      saleRate:0.1,

      imgUrl:"/img_1107/d_pang_1.jpg",

    },{

      id:6,

      name:"햇반 210g 1EA",

      amount:0,

      price:1900,
      saleRate:0.2,

      imgUrl:"/images/hb2.jpg",
      addProduct:true
    },{

      id:7,

      name:"비비고 썰은배추김치 100g",

      amount:0,

      price:1800,
      saleRate:0.2,

      imgUrl:"/images/kc.jpg",
      addProduct:true

    },{

      id:8,

      name:"비비고 소고기장조림 125g",

      amount:0,

      price:3680,
      saleRate:0.2,


      imgUrl:"/images/jjr.jpg",
      addProduct:true

    }

    ],
    recipeId:-1,
    taggingProduct:[],
    addProduct:[90011,90012,90013]
  },

  {
      
    id:30002,
    category:CATEGORY_NAME["VEGETABLE"],
    name:"영양부추",

    imgUrl:"/img_1107/d_buchu_1.jpg",
    descriptionImage:"/img_1107/detail/vegetable_d_buchu.jpg",

    price:3100,

    saleRate:0.4,

    description:"",
    //"끓이기만 되는 비비고 육개장에 야채 1인분 세트(파, 양파, 버섯, 고추)를 넣어 푸짐한 한 끼를 해결할 수 있습니다.",

    ingredients:[{

      id:1,

      name:"영양부추 추가",

      amount:1,

      price:3100,
      saleRate:0.1,

      imgUrl:"/img_1107/d_buchu_1.jpg",

    },{

      id:6,

      name:"햇반 210g 1EA",

      amount:0,

      price:1900,
      saleRate:0.2,

      imgUrl:"/images/hb2.jpg",
      addProduct:true
    },{

      id:7,

      name:"비비고 썰은배추김치 100g",

      amount:0,

      price:1800,
      saleRate:0.2,

      imgUrl:"/images/kc.jpg",
      addProduct:true

    },{

      id:8,

      name:"비비고 소고기장조림 125g",

      amount:0,

      price:3680,
      saleRate:0.2,


      imgUrl:"/images/jjr.jpg",
      addProduct:true

    }

    ],
    recipeId:-1,
    taggingProduct:[],
    addProduct:[90011,90012,90013]
  },

  {
      
    id:30003,
    category:CATEGORY_NAME["VEGETABLE"],
    name:"느타리버섯",

    imgUrl:"/img_1107/d_nuta.jpg",

    descriptionImage:"/img_1107/detail/vegetable_d_mushroom.png",
    price:1250,

    saleRate:0.4,

    description:"",
    //"끓이기만 되는 비비고 육개장에 야채 1인분 세트(파, 양파, 버섯, 고추)를 넣어 푸짐한 한 끼를 해결할 수 있습니다.",

    ingredients:[{

      id:1,

      name:"느타리버섯 추가",

      amount:1,

      price:1250,
      saleRate:0.1,

      imgUrl:"/img_1107/d_nuta.jpg",

    },{

      id:6,

      name:"햇반 210g 1EA",

      amount:0,

      price:1900,
      saleRate:0.2,

      imgUrl:"/images/hb2.jpg",
      addProduct:true
    },{

      id:7,

      name:"비비고 썰은배추김치 100g",

      amount:0,

      price:1800,
      saleRate:0.2,

      imgUrl:"/images/kc.jpg",
      addProduct:true

    },{

      id:8,

      name:"비비고 소고기장조림 125g",

      amount:0,

      price:3680,
      saleRate:0.2,


      imgUrl:"/images/jjr.jpg",
      addProduct:true

    }

    ],
    recipeId:-1,
    taggingProduct:[],
    addProduct:[90011,90012,90013]
  },

  {
      
    id:30004,
    category:CATEGORY_NAME["VEGETABLE"],
    name:"대파",

    imgUrl:"/img_1107/d_pa.jpg",

    descriptionImage:"/img_1107/detail/vegetable_d_pa.png",
    price:2200,

    saleRate:0.4,

    description:"비비고 고기 듬뿍 육개장에 볼매 야채(대파, 느타리버섯, 청양고추)를 준비합니다.",
    //"끓이기만 되는 비비고 육개장에 야채 1인분 세트(파, 양파, 버섯, 고추)를 넣어 푸짐한 한 끼를 해결할 수 있습니다.",

    ingredients:[{

      id:1,

      name:"대파 추가",

      amount:1,

      price:2200,
      saleRate:0.1,

      imgUrl:"/img_1107/d_pa.jpg",

    },{

      id:6,

      name:"햇반 210g 1EA",

      amount:0,

      price:1900,
      saleRate:0.2,

      imgUrl:"/images/hb2.jpg",
      addProduct:true
    },{

      id:7,

      name:"비비고 썰은배추김치 100g",

      amount:0,

      price:1800,
      saleRate:0.2,

      imgUrl:"/images/kc.jpg",
      addProduct:true

    },{

      id:8,

      name:"비비고 소고기장조림 125g",

      amount:0,

      price:3680,
      saleRate:0.2,


      imgUrl:"/images/jjr.jpg",
      addProduct:true

    }

    ],
    recipeId:-1,
    taggingProduct:[],
    addProduct:[90011,90012,90013]
  },

  {
      
    id:30005,
    category:CATEGORY_NAME["VEGETABLE"],
    name:"청양고추",

    imgUrl:"/img_1107/d_gochu.jpg",

    descriptionImage:"/img_1107/detail/vegetable_d_gochu.png",
    price:1450,

    saleRate:0.4,

    description:"비비고 고기 듬뿍 육개장에 볼매 야채(대파, 느타리버섯, 청양고추)를 준비합니다.",
    //"끓이기만 되는 비비고 육개장에 야채 1인분 세트(파, 양파, 버섯, 고추)를 넣어 푸짐한 한 끼를 해결할 수 있습니다.",

    ingredients:[{

      id:1,

      name:"청양고추 추가",

      amount:1,

      price:1450,
      saleRate:0.1,

      imgUrl:"/img_1107/d_gochu.jpg",

    },{

      id:6,

      name:"햇반 210g 1EA",

      amount:0,

      price:1900,
      saleRate:0.2,

      imgUrl:"/images/hb2.jpg",
      addProduct:true
    },{

      id:7,

      name:"비비고 썰은배추김치 100g",

      amount:0,

      price:1800,
      saleRate:0.2,

      imgUrl:"/images/kc.jpg",
      addProduct:true

    },{

      id:8,

      name:"비비고 소고기장조림 125g",

      amount:0,

      price:3680,
      saleRate:0.2,


      imgUrl:"/images/jjr.jpg",
      addProduct:true

    }

    ],
    recipeId:-1,
    taggingProduct:[],
    addProduct:[90011,90012,90013]
  },

  {
      
    id:30006,
    category:CATEGORY_NAME["VEGETABLE"],
    name:"감자",

    imgUrl:"/img_1107/d_potato_1.jpg",

    descriptionImage:"/img_1107/detail/vegetable_d_potato.jpg",
    price:3500,

    saleRate:0.4,

    description:"비비고 고기 듬뿍 육개장에 볼매 야채(대파, 느타리버섯, 청양고추)를 준비합니다.",
    //"끓이기만 되는 비비고 육개장에 야채 1인분 세트(파, 양파, 버섯, 고추)를 넣어 푸짐한 한 끼를 해결할 수 있습니다.",

    ingredients:[{

      id:1,

      name:"감자 추가",

      amount:1,

      price:3500,
      saleRate:0.1,

      imgUrl:"/img_1107/d_potato_1.jpg",

    },{

      id:6,

      name:"햇반 210g 1EA",

      amount:0,

      price:1900,
      saleRate:0.2,

      imgUrl:"/images/hb2.jpg",
      addProduct:true
    },{

      id:7,

      name:"비비고 썰은배추김치 100g",

      amount:0,

      price:1800,
      saleRate:0.2,

      imgUrl:"/images/kc.jpg",
      addProduct:true

    },{

      id:8,

      name:"비비고 소고기장조림 125g",

      amount:0,

      price:3680,
      saleRate:0.2,


      imgUrl:"/images/jjr.jpg",
      addProduct:true

    }

    ],
    recipeId:-1,
    taggingProduct:[],
    addProduct:[90011,90012,90013]
  },

  {
      
    id:30007,
    category:CATEGORY_NAME["VEGETABLE"],
    name:"고구마",

    imgUrl:"/img_1107/d_gogu_1.jpg",

    descriptionImage:"/img_1107/detail/vegetable_d_gogu.png",
    price:3000,

    saleRate:0.4,

    description:"비비고 고기 듬뿍 육개장에 볼매 야채(대파, 느타리버섯, 청양고추)를 준비합니다.",
    //"끓이기만 되는 비비고 육개장에 야채 1인분 세트(파, 양파, 버섯, 고추)를 넣어 푸짐한 한 끼를 해결할 수 있습니다.",

    ingredients:[{

      id:1,

      name:"고구마 추가",

      amount:1,

      price:3000,
      saleRate:0.1,

      imgUrl:"/img_1107/d_gogu_1.jpg",

    },{

      id:6,

      name:"햇반 210g 1EA",

      amount:0,

      price:1900,
      saleRate:0.2,

      imgUrl:"/images/hb2.jpg",
      addProduct:true
    },{

      id:7,

      name:"비비고 썰은배추김치 100g",

      amount:0,

      price:1800,
      saleRate:0.2,

      imgUrl:"/images/kc.jpg",
      addProduct:true

    },{

      id:8,

      name:"비비고 소고기장조림 125g",

      amount:0,

      price:3680,
      saleRate:0.2,


      imgUrl:"/images/jjr.jpg",
      addProduct:true

    }

    ],
    recipeId:-1,
    taggingProduct:[],
    addProduct:[90011,90012,90013]
  },

  {
      
    id:30008,
    category:CATEGORY_NAME["VEGETABLE"],
    name:"양파",

    imgUrl:"/img_1107/d_onion_1.jpg",

    descriptionImage:"/img_1107/detail/vegetable_d_onion.png",
    price:2000,

    saleRate:0.4,

    description:"비비고 고기 듬뿍 육개장에 볼매 야채(대파, 느타리버섯, 청양고추)를 준비합니다.",
    //"끓이기만 되는 비비고 육개장에 야채 1인분 세트(파, 양파, 버섯, 고추)를 넣어 푸짐한 한 끼를 해결할 수 있습니다.",

    ingredients:[{

      id:1,

      name:"양파 추가",

      amount:1,

      price:2000,
      saleRate:0.1,

      imgUrl:"/img_1107/d_onion_1.jpg",

    },{

      id:6,

      name:"햇반 210g 1EA",

      amount:0,

      price:1900,
      saleRate:0.2,

      imgUrl:"/images/hb2.jpg",
      addProduct:true
    },{

      id:7,

      name:"비비고 썰은배추김치 100g",

      amount:0,

      price:1800,
      saleRate:0.2,

      imgUrl:"/images/kc.jpg",
      addProduct:true

    },{

      id:8,

      name:"비비고 소고기장조림 125g",

      amount:0,

      price:3680,
      saleRate:0.2,


      imgUrl:"/images/jjr.jpg",
      addProduct:true

    }

    ],
    recipeId:-1,
    taggingProduct:[],
    addProduct:[90011,90012,90013]
  },

  {
      
    id:30009,
    category:CATEGORY_NAME["VEGETABLE"],
    name:"당근",

    imgUrl:"/img_1107/d_carrot_1.jpg",

    price:4900,

    descriptionImage:"/img_1107/detail/vegetable_d_carrot.jpg",
    saleRate:0.4,

    description:"비비고 고기 듬뿍 육개장에 볼매 야채(대파, 느타리버섯, 청양고추)를 준비합니다.",
    //"끓이기만 되는 비비고 육개장에 야채 1인분 세트(파, 양파, 버섯, 고추)를 넣어 푸짐한 한 끼를 해결할 수 있습니다.",

    ingredients:[{

      id:1,

      name:"당근 추가",

      amount:1,

      price:4900,
      saleRate:0.1,

      imgUrl:"/img_1107/d_carrot_1.jpg",

    },{

      id:6,

      name:"햇반 210g 1EA",

      amount:0,

      price:1900,
      saleRate:0.2,

      imgUrl:"/images/hb2.jpg",
      addProduct:true
    },{

      id:7,

      name:"비비고 썰은배추김치 100g",

      amount:0,

      price:1800,
      saleRate:0.2,

      imgUrl:"/images/kc.jpg",
      addProduct:true

    },{

      id:8,

      name:"비비고 소고기장조림 125g",

      amount:0,

      price:3680,
      saleRate:0.2,


      imgUrl:"/images/jjr.jpg",
      addProduct:true

    }

    ],
    recipeId:-1,
    taggingProduct:[],
    addProduct:[90011,90012,90013]
  },


  {
      
    id:30010,
    category:CATEGORY_NAME["VEGETABLE"],
    name:"비비고 새우왕교자",

    imgUrl:"/images/shrimp.jpg",

    price:6000,

    descriptionImage:"/images/shrimp.jpg",
    saleRate:0.4,

    description:"비비고 고기 듬뿍 육개장에 볼매 야채(대파, 느타리버섯, 청양고추)를 준비합니다.",
    //"끓이기만 되는 비비고 육개장에 야채 1인분 세트(파, 양파, 버섯, 고추)를 넣어 푸짐한 한 끼를 해결할 수 있습니다.",

    ingredients:[{

      id:1,

      name:"비비고 새우왕교자",

      amount:1,

      price:6000,
      saleRate:0.1,

      imgUrl:"/images/shrimp.jpg",

    },{

      id:6,

      name:"햇반 210g 1EA",

      amount:0,

      price:1900,
      saleRate:0.2,

      imgUrl:"/images/hb2.jpg",
      addProduct:true
    },{

      id:7,

      name:"비비고 썰은배추김치 100g",

      amount:0,

      price:1800,
      saleRate:0.2,

      imgUrl:"/images/kc.jpg",
      addProduct:true

    },{

      id:8,

      name:"비비고 소고기장조림 125g",

      amount:0,

      price:3680,
      saleRate:0.2,


      imgUrl:"/images/jjr.jpg",
      addProduct:true

    }

    ],
    recipeId:-1,
    taggingProduct:[],
    addProduct:[90011,90012,90013]
  },{
      
    id:90011,
    category:CATEGORY_NAME["HMR"],
    name:"햇반 작은공기130g 1EA",
  
    imgUrl:"/images/shrimp.jpg",
  
    price:1300,
  
    descriptionImage:"/images/shrimp.jpg",
    saleRate:0.4,
  
    description:"비비고 고기 듬뿍 육개장에 볼매 야채(대파, 느타리버섯, 청양고추)를 준비합니다.",
    //"끓이기만 되는 비비고 육개장에 야채 1인분 세트(파, 양파, 버섯, 고추)를 넣어 푸짐한 한 끼를 해결할 수 있습니다.",
  
    ingredients:[{
  
      id:1,
  
      name:"햇반 작은공기130g 1EA",
  
      amount:1,
  
      price:1300,
      saleRate:0.1,
  
      imgUrl:"/images/shrimp.jpg",
  
    },{

      id:6,

      name:"햇반 210g 1EA",

      amount:0,

      price:1900,
      saleRate:0.2,

      imgUrl:"/images/hb2.jpg",
      addProduct:true
    },{

      id:7,

      name:"비비고 썰은배추김치 100g",

      amount:0,

      price:1800,
      saleRate:0.2,

      imgUrl:"/images/kc.jpg",
      addProduct:true

    },{

      id:8,

      name:"비비고 소고기장조림 125g",

      amount:0,

      price:3680,
      saleRate:0.2,


      imgUrl:"/images/jjr.jpg",
      addProduct:true

    }
  
    ],
    recipeId:-1,
    taggingProduct:[],
    addProduct:[90011,90012,90013]
  }
  ,{
      
    id:90012,
    category:CATEGORY_NAME["HMR"],
    name:"햇반 210g 1EA",
  
    imgUrl:"/images/shr0mp.jpg",
  
    price:1900,
  
    descriptionImage:"/images/hb2.jpg",
    saleRate:0.4,
  
    description:"비비고 고기 듬뿍 육개장에 볼매 야채(대파, 느타리버섯, 청양고추)를 준비합니다.",
    //"끓이기만 되는 비비고 육개장에 야채 1인분 세트(파, 양파, 버섯, 고추)를 넣어 푸짐한 한 끼를 해결할 수 있습니다.",
  
    ingredients:[{
  
      id:1,
  
      name:"햇반 210g 1EA",
  
      amount:0,
  
      price:1900,
      saleRate:0.1,
  
      imgUrl:"/images/hb2.jpg",
  
    },{

      id:6,

      name:"햇반 210g 1EA",

      amount:0,

      price:1900,
      saleRate:0.2,

      imgUrl:"/images/hb2.jpg",
      addProduct:true
    },{

      id:7,

      name:"비비고 썰은배추김치 100g",

      amount:0,

      price:1800,
      saleRate:0.2,

      imgUrl:"/images/kc.jpg",
      addProduct:true

    },{

      id:8,

      name:"비비고 소고기장조림 125g",

      amount:0,

      price:3680,
      saleRate:0.2,


      imgUrl:"/images/jjr.jpg",
      addProduct:true

    }
  
    ],
    recipeId:-1,
    taggingProduct:[],
    addProduct:[90011,90012,90013]
  }
  ,{
      
    id:90013,
    category:CATEGORY_NAME["HMR"],
    name:"햇반 큰공기 300g 1EA",
  
    imgUrl:"/images/shrimp.jpg",
  
    price:2700,
  
    descriptionImage:"/images/shrimp.jpg",
    saleRate:0.4,
  
    description:"비비고 고기 듬뿍 육개장에 볼매 야채(대파, 느타리버섯, 청양고추)를 준비합니다.",
    //"끓이기만 되는 비비고 육개장에 야채 1인분 세트(파, 양파, 버섯, 고추)를 넣어 푸짐한 한 끼를 해결할 수 있습니다.",
  
    ingredients:[{
  
      id:1,
  
      name:"햇반 큰공기 300g 1EA",
  
      amount:1,
  
      price:2700,
      saleRate:0.1,
  
      imgUrl:"/images/hb2.jpg",
  
    },{

      id:6,

      name:"햇반 210g 1EA",

      amount:0,

      price:1900,
      saleRate:0.2,

      imgUrl:"/images/hb2.jpg",
      addProduct:true
    },{

      id:7,

      name:"비비고 썰은배추김치 100g",

      amount:0,

      price:1800,
      saleRate:0.2,

      imgUrl:"/images/kc.jpg",
      addProduct:true

    },{

      id:8,

      name:"비비고 소고기장조림 125g",

      amount:0,

      price:3680,
      saleRate:0.2,


      imgUrl:"/images/jjr.jpg",
      addProduct:true

    }
  
    ],
    recipeId:-1,
    taggingProduct:[],
    addProduct:[90011,90012,90013]
  }



]
})
