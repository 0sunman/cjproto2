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
  default:[
    
    {
      id:1,
      productId:1,
      userId:"minikini_k2",
      texts:"비비고 육개장과 못난이 채소만 있으면 쉬우면서도 맛있는 한끼 완성 ❤️❤️ 남편 아침 밥상 꼭 차려주고 싶어서 주문한 #일상점심세트 건더기 실한 거 보이시나요? 남편이 입맛없다하면 육개장 대접하면 없던 입맛도 되살아나네요 😆",
      createAt:"2023-11-19 14:30:23",
      imgUrl:[
        "/new/6/2-1.png",
        "/new/6/2-2.png",
        "/new/6/2-3.png",
        "/new/6/2-4.png",
      ],
      recipeId:1
    },{
      id:2,
      productId:2,
      userId:"0sunman",
      texts:"와! 대박!! 🥟🥟🥟 비비고 새우교자가 계란찜이랑 이렇게 잘 어울리는지 몰랐어요! 😋 완전 간단하게 계란찜이 만들어져서 완전 Surprise!! 😆 저녁 차려먹기 귀찮았는데 뚝딱 만들어먹으니 너무 편하네요 👍",
      createAt:"2023-11-21 21:15:34",
      imgUrl:[
        "/new/2/1-1.png",
        "/new/2/1-2.png",
        "/new/2/1-3.png",
        "/new/2/1-4.png",
      ],
      recipeId:1
    }
    ,{
    id:3,
    productId:1,
    userId:"d.eunjee",
    texts:"최애 CJ비비고 고기 듬뿍 육개장국 🍜🍜🍜 에 못난이 숙주랑 각종 채소 🥗🍄🌶️ 까지 추가해서 먹으면 그야말로 최애 밥 😆",
    createAt:"2023-12-01 05:44:23",

    imgUrl:[
      "/new/6/1-1.png",
      "/new/6/1-2.png",
      "/new/6/1-3.png",
      "/new/6/1-4.png",
    ],
    recipeId:1
  },{
    id:4,
    productId:2,
    userId:"joo020202",
    texts:"아주 기본에 충실하지만 🦐🦐🦐 새우가 톡 튀는 느낌의 계란찜🥚🍳🥚🍳입니다~ 갑자기 본가가 그리워지는 느낌이네요 😳😳😳",
    createAt:"2023-12-02 23:11:34",
    imgUrl:[
      "/new/2/2-1.png",
      "/new/2/2-2.png",
      "/new/2/2-3.png",
      "/new/2/2-4.png",
    ],
    recipeId:1
  }
]
})


