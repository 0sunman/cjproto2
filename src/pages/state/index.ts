import {atom,selector} from 'recoil';

export interface IProductType{
    id:number;
    price:number;
    name:string;
    description:string;
    imgUrl:string;
    saleRate:number;
    ingredients:IIngredient[];
    recipe?:any[]
}

export interface IProducts{
    option:boolean,
    list:IProductType[]
}
export interface IIngredient{
  id:number,
  name:string,
  price:number;
  amount:number;
  imgUrl:string;
}



/*


              recipeName:"똥냥궁 육개장 세트 670g",
              recipeName:"차돌 육개장 칼국수 세트 870g",
              recipeName:"김치 육개장 만두 전골 세트 870g",
              recipeName:"왕교자 가스파쵸 세트 530g",
              recipeName:"왕교자 가스파쵸 세트 530g",
              recipeName:"얼큰 연어 육개장 530g",
              recipeName:"오징어 얼큰 육개장 680g",

*/



export const productState = atom<IProducts>({
    key:'contentAtom',
    default:{
        option:false,
        list:
//https://www.cjthemarket.com/pc/play/recipeView?category=recipeCode&rSeq=0000002318 (id:1)
        //https://www.cjthemarket.com/pc/play/recipeView?category=recipeCode&rSeq=0000001741 (id:2)
        
        //https://www.cjthemarket.com/pc/play/recipeView?category=recipeCode&rSeq=0000001744 (id:3)
        
        //https://www.cjthemarket.com/pc/play/recipeView?category=recipeCode&rSeq=0000002238 (id:4)
        
        //https://www.cjthemarket.com/pc/play/recipeView?category=cjBrndCd&rSeq=0000001737 (id:5)
        
                  [{
        
                    id:1,
        
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
        
                      name:"느타리버섯 15g",
        
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
                  recipe:[
                    {imgUrl:"https://www.cj.co.kr/images/cjrecipe/0000002318/c4/c4_0000010725.jpg",description:"각각의 재료를 준비한다."},
                    {imgUrl:"https://www.cj.co.kr/images/cjrecipe/0000002318/c4/c4_0000010726.jpg",description:"대파, 청양고추, 홍고추는 어슷썰고, 양파는 0.5cm 두께로 슬라이스, 느타리버섯은 잘게 찢는다."},
                    {imgUrl:"https://www.cj.co.kr/images/cjrecipe/0000002318/c4/c4_0000010727.jpg",description:"냄비에 육개장과 물을 넣고 끓인다."},
                    {imgUrl:"https://www.cj.co.kr/images/cjrecipe/0000002318/c4/c4_0000010728.jpg",description:"양파, 대파, 느타리버섯, 수교자를 넣고 끓인다."},
                    {imgUrl:"https://www.cj.co.kr/images/cjrecipe/0000002318/c4/c4_0000010729.jpg",description:"다진 마늘, 청양고추, 홍고추, 소금을 넣어 한소끔 끓여낸다."},
                  ]
        
                  },
        
         
        
                  {
                    id:2,
                    name:"비비고 얼큰 육개장 버섯 전골 세트",
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
                  recipe:[
                    {imgUrl:"https://www.cj.co.kr/images/cjrecipe/0000001741/c4/c4_0000007772.jpg",description:"느타리버섯과 팽이버섯은 밑둥을 제거하여 큼직하게 자르고, 새송이버섯과 표고버섯은 납작하게 썰어 놓는다."},
                    {imgUrl:"https://www.cj.co.kr/images/cjrecipe/0000001741/c4/c4_0000007773.jpg",description:"양파는 채썰고, 대파는 어슷썰고, 두부는 도톰하게 썰고, 전골냄비에 양파를 넓게 깔고 버섯과 두부를 둘러 담아놓는다."},
                    {imgUrl:"https://www.cj.co.kr/images/cjrecipe/0000001741/c4/c4_0000007774.jpg",description:"물 2 ½컵과 다담 부대찌개양념을 넣고 중간 불로 끓인다."},
                    {imgUrl:"https://www.cj.co.kr/images/cjrecipe/0000001741/c4/c4_0000007775.jpg",description:"버섯의 숨이 죽기 시작하면 대파를 넣고 한 번 더 끓인 뒤 쑥갓을 얹어 마무리한다. 버섯을 건져 먹은 뒤 남은 국물에 사리를 넣어 먹으면 맛있다."},
                  ]
                  },
        
         
        
                 
        
                  {
        
                    id:3,
                    name:"육개장 순두부 찌개 세트",
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
                  
                  recipe:[
                    {imgUrl:"https://www.cj.co.kr/images/cjrecipe/0000001744/c4/c4_0000007783.jpg",description:"양파는 채썰고, 표고버섯은 밑동을 제거한 뒤 채 썰고, 대파와 고추는 어슷 썬다. 칵테일 새우는 깨끗한 물에 헹궈 체에 받쳐 물기를 제거한다."},
                    {imgUrl:"https://www.cj.co.kr/images/cjrecipe/0000001744/c4/c4_0000007784.jpg",description:"냄비에 물 3컵을 붓고, 다담 청국장찌개양념과 양파를 넣어 양파가 투명해 질때까지 센불에서 끓인다. 중불로 줄이고 칵테일 새우와 순두부를 넣고 살살 저어가며 끓인다."},
                    {imgUrl:"https://www.cj.co.kr/images/cjrecipe/0000001744/c4/c4_0000007785.jpg",description:"버섯과 고추, 대파를 넣고 한 소금 더 끓여서 마무리 한다."},
                  ]
        
                  },
        
         
        
         
        
                 
        
                  {
        
                    id:4,
        
                    name:"육개장 칼국수&부추 겉절이 세트",
        
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
                  
                  recipe:[
                    {imgUrl:"https://www.cj.co.kr/images/cjrecipe/0000002238/c4/c4_0000010258.jpg",description:"각각의 재료를 준비한다."},
                    {imgUrl:"https://www.cj.co.kr/images/cjrecipe/0000002238/c4/c4_0000010259.jpg",description:"대파는 5cm 길이로 잘라 세로로 반 가르고, 부추는 5~6cm 길이로 자른다. 양파는 슬라이스하여 얼음물에 10분 담근 후 체에 밭쳐 물기 제거한다."},
                    {imgUrl:"https://www.cj.co.kr/images/cjrecipe/0000002238/c4/c4_0000010260.jpg",description:"볼에 분량의 [겉절이양념]을 넣고 섞는다."},
                    {imgUrl:"https://www.cj.co.kr/images/cjrecipe/0000002238/c4/c4_0000010261.jpg",description:"끓는 물에 생칼국수를 삶아 찬물에 헹군 후 체에 밭쳐 물기를 제거한다."},
                    {imgUrl:"https://www.cj.co.kr/images/cjrecipe/0000002238/c4/c4_0000010262.jpg",description:"볼에 부추, 양파, [겉절이양념]을 넣고 골고루 버무린다."},
                    {imgUrl:"https://www.cj.co.kr/images/cjrecipe/0000002238/c4/c4_0000010263.jpg",description:"냄비에 육개장과 대파를 넣고 한소끔 끓인 후 생칼국수를 넣고 1분 더 끓인다. 고추기름을 뿌리고 5를 곁들여낸다."},
                  ]
        
        
                  },
        
         
        
         
        
                 
        
                  {
        
                    id:5,
        
                    name:"육개장 누룽지죽 세트",
        
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
                  
                  recipe:[
                    {imgUrl:"https://www.cj.co.kr/images/cjrecipe/0000001737/c4/c4_0000007757.jpg",description:"표고버섯은 밑동을 뗀 뒤 작게 다지고, 감자는 껍질을 벗겨 버섯과 비슷한 크기로 다진다."},
                    {imgUrl:"https://www.cj.co.kr/images/cjrecipe/0000001737/c4/c4_0000007758.jpg",description:"냄비에 물 5컵과 다담 냉이된장찌개양념을 넣어 잘 섞는다."},
                    {imgUrl:"https://www.cj.co.kr/images/cjrecipe/0000001737/c4/c4_0000007759.jpg",description:"2의 냄비에 누룽지를 넣고 센 불에서 끓이다 물이 끓어오르면 중약 불로 줄인 뒤 감자를 넣어 누룽지가 부드럽게 풀릴 때까지 끓인다. 이 때 누룽지와 감자가 바닥에 눌어붙지 않도록 중간중간 저어준다."},
                    {imgUrl:"https://www.cj.co.kr/images/cjrecipe/0000001737/c4/c4_0000007760.jpg",description:"누룽지가 부드러워지고 죽이 끓어오르면 표고버섯을 넣어 센 불에서 한 소끔 더 끓여 마무리한다."},
                    {imgUrl:"https://www.cj.co.kr/images/cjrecipe/0000001737/c4/c4_0000007761.jpg",description:"된장 누룽지죽을 그릇에 담아낸다."},
                  ]
        
                  },
        
               
        
                ]
    }
})
export interface IIngredientQuery{
  productIndex:number, 
  ingredientIndex:number, 
  name:any, 
  value:any
}
