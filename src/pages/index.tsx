import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useRecoilState } from 'recoil'
import { Autoplay, Pagination } from 'swiper/modules';
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useProducts } from '@/hook/productHook'
import { useCurrentUser } from '@/hook/userHook'
import { IProductType } from '@/state/product'
import { useMiniCart } from '@/hook/miniCartHook'
import { css } from '@emotion/react'
import useUtilHook from '@/hook/utilHook'
import { useEffect, useState } from 'react'
import { useRecipeLayout } from '@/component/recipe'
import { useRecipe } from '@/hook/recipeHook'
import { IRecipe } from '@/state/recipe'
import styled from '@emotion/styled'

import { Swiper, SwiperSlide,  } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from "swiper/modules"
import { useCategory } from '@/hook/categoryHook'
import { CATEGORY_NAME, ICategory } from '@/state/category'
import { Product } from '@/component/product'
import { MainBanner } from '@/component/Main/MainBanner'
import { RecipeSVG } from '@/component/SVG/recipe'

const TextHero = styled.h2`font-size:18px; padding-bottom:10px; padding-left:20px;`
const CategorySection = styled.div`display:flex; width:calc(100% - 40px); 
overflow:hidden; overflow-x:scroll; padding:0px 0px;
margin: 30px auto; margin-top:0px;

`
const CategoryElement = styled.div`width:20%; display:inline-flex; flex-direction:column; align-items:center; justify-contents:center;
&:last-child{margin-right:0px;}
>div:nth-child(1){width:60px; height:80px;background-size:cover; }
`
const CategoryCircle = styled.div`width:50px; height:50px; border-radius:100%;background-size:cover `
const CategoryText = styled.div`text-align:center;margin:5px 0px;font-size:10px;`
const CategoryElementWrapper = styled.div`
  display:flex; flex-direction:column; align-items:center; justify-contents:center;
  > .svgWrapper { border-radius:15px; background-color:#F5F5F5; }
  > .svgWrapper > svg {width:35px; height:35px; padding:12.5px;}
`
export default function Home() {

  const {RecipeWrapper, Header,RecipeMainImage, RecipeTag,RecipeTagTitle,RecipeTagImages,RecipeTagImage, RecipeComment,RecipeCommentHeart,RecipeComments,RecipeDate,RecipeButtons} = useRecipeLayout();
  const router = useRouter();
  const {products,getProductPriceWithProductId, getProductSalePriceWithProductId} = useProducts();
  const {category,setCategory} = useCategory();
  const {currentUser, setCurrentUser} = useCurrentUser();
  const {miniCart, setMiniCart, addProductCartDirect} = useMiniCart();
  const {printPrice}=useUtilHook();
  const changeProduct = (productId:number) => {
    setCurrentUser({...currentUser, productId:productId,})
    router.push(`/product/${productId}`);
  }
  useEffect(()=>{
    setMiniCart({...miniCart, isButtonShow:false})
  },[]);
  
  const {recipe} = useRecipe();
  const {getProductWithProductId} = useProducts();
  const getProduct = getProductWithProductId;
  return (
    <>
      <Head>
        <title>TRYEAT - Try another one</title>
        <meta name="description" content="TRYEAT - create the value" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://www.cj.net/images/favicon.png"/>
        <meta name="og:type" property="og:type" content="website"></meta>
        <meta name="og:url" property="og:url" content="https://cjproto2-cfwr.vercel.app/"></meta>
        <meta name="og:image" property="og:image" content="/images/tryeat_logo.jpg"></meta>
      </Head>
      <main className={`${styles.Wrapper}`}>
      <RecipeWrapper style={{marginBottom:"0px"}}>
                    <Swiper
                      spaceBetween={0}
                      slidesPerView={1}
                      autoplay={{ delay: 3000 }}
                      navigation={true}
                      pagination={{
                        type: 'progressbar',
                      }}
                      modules={[Pagination,Navigation]}
                      >
                {recipe.recipes.map((innerRecipe:IRecipe)=>
                (
                <SwiperSlide style={{background:"white"}}>
                  <MainBanner innerRecipe={innerRecipe}/>
                </SwiperSlide>
                ))}
                </Swiper>
    </RecipeWrapper>
        <TextHero style={{marginTop:"40px",marginBottom:"10px"}}>카테고리</TextHero>
  <CategorySection>
    {category.map((categoryElement:ICategory)=>{
      return <CategoryElement onClick={()=>{
        router.push(`/category/${categoryElement.engName}`)
      }}>
        <CategoryElementWrapper>
          <div className='svgWrapper'>
            <RecipeSVG/>                
          </div>
          <CategoryText>{categoryElement.name}</CategoryText>
        </CategoryElementWrapper>
             
            </CategoryElement>
    })}

  </CategorySection>
        <TextHero>오늘의 특가</TextHero>
        <TextHero style={{fontSize:"14px",color:"rgb(153, 153, 153)"}}>TRYEAT이 최대 혜택으로 보장해요!</TextHero>
        <div className="Slide">
          <Swiper
          spaceBetween={0}
          slidesPerView={2.5}
          >
          {products.map((product:IProductType, idx:number)=>{
            if(idx !== -1 && product.category === CATEGORY_NAME["MAIN"]){
              return (
                <SwiperSlide>
                  <Product product={product}/>
                </SwiperSlide>)
            }
          })}
          </Swiper>
        </div>
        
      </main>
    </>
  )
}
