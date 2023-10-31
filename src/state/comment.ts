import { atom } from "recoil";

export interface IComment{
    id:number;
    userId:string;
    texts:string;
    createAt:string;
    imgUrl:string[];
    recipeId?:number;
    productId:number;
}

export const commentState = atom<IComment[]>({
  key:"recipeState",
  default:[{
    id:1,
    productId:1,
    userId:"goodman1",
    texts:"맛있는 육개장을 먹는 순간 행복을 느껴요.",
    createAt:"2021-04-19 00:00:00",
    imgUrl:[
      "https://www.cj.co.kr/images/theKitchen/PHON/0000001741/0000006541/0000001741.jpg",
        "https://www.cj.co.kr/images/theKitchen/PHON/0000001744/0000006562/0000001744.jpg",
      "https://www.cj.co.kr/images/theKitchen/PHON/0000002238/0000009166/0000002238.jpg",
    "https://www.cj.co.kr/images/theKitchen/PHON/0000001737/0000006514/0000001737.jpg",
      "https://img.cjthemarket.com/images/file/product/843/20220510174529772.jpg?SF=webp&RS=299x299",
  ],
    recipeId:1
  },{
    id:2,
    productId:1,
    userId:"nicegirl",
    texts:"육개장은 제 최애 음식 중 하나에요. 정말 감동적이에요.",
    createAt:"2021-04-19 00:00:00",
    imgUrl:[
      "https://www.cj.co.kr/images/theKitchen/PHON/0000001741/0000006541/0000001741.jpg",
      "https://www.cj.co.kr/images/theKitchen/PHON/0000001744/0000006562/0000001744.jpg",
        "https://www.cj.co.kr/images/theKitchen/PHON/0000002238/0000009166/0000002238.jpg",
      "https://img.cjthemarket.com/images/file/product/843/20220510174529772.jpg?SF=webp&RS=299x299",
    "https://www.cj.co.kr/images/theKitchen/PHON/0000001737/0000006514/0000001737.jpg"],
    recipeId:1
  },{
    id:3,
    productId:1,
    userId:"sarah_wilson",
    texts:"육개장의 감칠맛은 신비로워요. 항상 기분 좋아집니다.",
    createAt:"2021-04-19 00:00:00",
    imgUrl:[
      "https://www.cj.co.kr/images/theKitchen/PHON/0000002238/0000009166/0000002238.jpg",
      "https://www.cj.co.kr/images/theKitchen/PHON/0000001737/0000006514/0000001737.jpg",
      "https://img.cjthemarket.com/images/file/product/843/20220510174529772.jpg?SF=webp&RS=299x299",
    "https://www.cj.co.kr/images/theKitchen/PHON/0000001741/0000006541/0000001741.jpg",
    "https://www.cj.co.kr/images/theKitchen/PHON/0000001744/0000006562/0000001744.jpg"],
    recipeId:1
  },{
    id:4,
    productId:1,
    userId:"goodman1",
    texts:"육개장은 제 심장을 뛰게 만들어요. 사랑합니다.",
    createAt:"2021-04-19 00:00:00",
    imgUrl:[
      "https://img.cjthemarket.com/images/file/product/843/20220510174529772.jpg?SF=webp&RS=299x299",
      "https://www.cj.co.kr/images/theKitchen/PHON/0000001741/0000006541/0000001741.jpg",
      "https://www.cj.co.kr/images/theKitchen/PHON/0000001744/0000006562/0000001744.jpg",
    "https://www.cj.co.kr/images/theKitchen/PHON/0000002238/0000009166/0000002238.jpg",
    "https://www.cj.co.kr/images/theKitchen/PHON/0000001737/0000006514/0000001737.jpg"],
    recipeId:1
  },{
    id:5,
    productId:1,
    userId:"nicegirl",
    texts:"육개장은 정말 환상적이에요. 꼭 한 번 맛보세요.",
    createAt:"2021-04-19 00:00:00",
    imgUrl:[
      "https://www.cj.co.kr/images/theKitchen/PHON/0000002238/0000009166/0000002238.jpg",
      "https://img.cjthemarket.com/images/file/product/843/20220510174529772.jpg?SF=webp&RS=299x299",
    "https://www.cj.co.kr/images/theKitchen/PHON/0000001741/0000006541/0000001741.jpg",
    "https://www.cj.co.kr/images/theKitchen/PHON/0000001744/0000006562/0000001744.jpg",
    "https://www.cj.co.kr/images/theKitchen/PHON/0000001737/0000006514/0000001737.jpg"],
    recipeId:1
  },{
    id:6,
    productId:1,
    userId:"goodman1",
    texts:"육개장은 제 인생 음식 중 최고에요. 매일 먹고 싶어요.",
    createAt:"2021-04-19 00:00:00",
    imgUrl:[
      "https://www.cj.co.kr/images/theKitchen/PHON/0000002238/0000009166/0000002238.jpg",
      "https://www.cj.co.kr/images/theKitchen/PHON/0000001737/0000006514/0000001737.jpg",
      "https://img.cjthemarket.com/images/file/product/843/20220510174529772.jpg?SF=webp&RS=299x299",
    "https://www.cj.co.kr/images/theKitchen/PHON/0000001741/0000006541/0000001741.jpg",
    "https://www.cj.co.kr/images/theKitchen/PHON/0000001744/0000006562/0000001744.jpg",],
    recipeId:1
  },{
    id:7,
    productId:1,
    userId:"michael_davis",
    texts:"육개장은 먹을 때마다 감동을 줘요. 그 맛을 잊을 수 없어요.",
    createAt:"2021-04-19 00:00:00",
    imgUrl:[
      "https://www.cj.co.kr/images/theKitchen/PHON/0000001737/0000006514/0000001737.jpg",
      "https://img.cjthemarket.com/images/file/product/843/20220510174529772.jpg?SF=webp&RS=299x299",
    "https://www.cj.co.kr/images/theKitchen/PHON/0000001741/0000006541/0000001741.jpg",
    "https://www.cj.co.kr/images/theKitchen/PHON/0000001744/0000006562/0000001744.jpg",
    "https://www.cj.co.kr/images/theKitchen/PHON/0000002238/0000009166/0000002238.jpg"],
    recipeId:1
  },{
    id:8,
    productId:1,
    userId:"nicegirl",
    texts:"육개장은 제 입맛을 완벽하게 만족시켜요. 최고에요.",
    createAt:"2021-04-19 00:00:00",
    imgUrl:[
      "https://www.cj.co.kr/images/theKitchen/PHON/0000002238/0000009166/0000002238.jpg",
      "https://img.cjthemarket.com/images/file/product/843/20220510174529772.jpg?SF=webp&RS=299x299",
    "https://www.cj.co.kr/images/theKitchen/PHON/0000001741/0000006541/0000001741.jpg",
    "https://www.cj.co.kr/images/theKitchen/PHON/0000001744/0000006562/0000001744.jpg",
    "https://www.cj.co.kr/images/theKitchen/PHON/0000001737/0000006514/0000001737.jpg"],
    recipeId:1
  },{
    id:9,
    productId:1,
    userId:"david_brown",
    texts:"맛있는 육개장을 먹으면 스트레스가 사라져요. 찐 힐링 음식이에요.",
    createAt:"2021-04-19 00:00:00",
    imgUrl:[
      "https://www.cj.co.kr/images/theKitchen/PHON/0000002238/0000009166/0000002238.jpg",
      "https://www.cj.co.kr/images/theKitchen/PHON/0000001737/0000006514/0000001737.jpg",
      "https://img.cjthemarket.com/images/file/product/843/20220510174529772.jpg?SF=webp&RS=299x299",
    "https://www.cj.co.kr/images/theKitchen/PHON/0000001741/0000006541/0000001741.jpg",
    "https://www.cj.co.kr/images/theKitchen/PHON/0000001744/0000006562/0000001744.jpg",],
    recipeId:1
  },{
    id:10,
    productId:1,
    userId:"sarah_wilson",
    texts:"육개장은 정말 즐겁게 먹을 수 있는 최고의 음식이에요.",
    createAt:"2021-04-19 00:00:00",
    imgUrl:[
      "https://www.cj.co.kr/images/theKitchen/PHON/0000001741/0000006541/0000001741.jpg",
      "https://www.cj.co.kr/images/theKitchen/PHON/0000001744/0000006562/0000001744.jpg",
      "https://www.cj.co.kr/images/theKitchen/PHON/0000002238/0000009166/0000002238.jpg",
      "https://img.cjthemarket.com/images/file/product/843/20220510174529772.jpg?SF=webp&RS=299x299",
    "https://www.cj.co.kr/images/theKitchen/PHON/0000001737/0000006514/0000001737.jpg"],
    recipeId:1
  },
]
})


