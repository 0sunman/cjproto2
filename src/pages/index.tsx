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

const inter = Inter({ subsets: ['latin'] })
const MainRecipe = styled.div`height:500px;overflow:hidden;width:100%;display:flex;align-items:center;justify-content:center`
const TextHero = styled.h2`font-size:32px; font-weight:bold; padding-bottom:10px; padding-left:10px;`
const CategorySection = styled.div`display:flex;width:100%;overflow:hidden;overflow-x:scroll;padding:20px 0px;
background-color: #f8f8f8;
margin: 30px 0px;
margin-top:0px;

`
const CategoryElement = styled.div`margin:0px 10px;
>div:nth-child(1){width:75px; height:75px; border-radius:100%;background-size:cover}
`
const CategoryCircle = styled.div`width:75px; height:75px; border-radius:100%;background-size:cover `
const CategoryText = styled.div`text-align:center;margin:10px 0px;font-size:12px;`
const LongButton = styled.div`display:flex; align-items:center;
width:100%;height:55px; background-color:#f8f8f8; border-top:1px solid #efefef;border-bottom:1px solid #efefef;
>span:nth-child(1){margin-right:auto;padding-left:20px;font-size:14px}
>span:nth-child(2){margin-left:auto;padding-right:10px;}
&:active{color:white;background:var(--TRYEAT-Orange)}
`
export default function Home() {

  const {RecipeWrapper, Header,RecipeMainImage, RecipeTag,RecipeTagTitle,RecipeTagImages,RecipeTagImage, RecipeComment,RecipeCommentHeart,RecipeComments,RecipeDate,RecipeButtons} = useRecipeLayout();
  const router = useRouter();
  const {products} = useProducts();
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
                          <Header style={{paddingTop:"5px", position:"absolute", top:"10px",color:"white"}}>
                              <img src={innerRecipe.companyImageURL}  style={{width:"40px", height:"40px"}}/>
                              <span>{innerRecipe.name}</span>
                              <span>
                                  
                              </span>
                          </Header>
                          <MainRecipe>
                              <MainRecipe className='skeleton-item' style={{width:"100%",height:"700px",overflow:"hidden",display:"flex",alignItems:"center", justifyContent:"center"}} onClick={()=>{
                                      router.push(`/product/${innerRecipe.productId}`);
                              }}>
                              {
                                innerRecipe.imgUrl.indexOf("www.") > 1 ? 
                                  <img src={innerRecipe.imgUrl} style={{"width":"100%","height":"auto"}} alt={innerRecipe.description}/>
                                :
                                innerRecipe.id === 1 ? <video src="./mov/5.mp4" style={{width:"100%",height:"auto"}} muted autoPlay loop playsInline></video> 
                                : <Image  src={innerRecipe.imgUrl} width={1200} height={1670} style={{"width":"100%","height":"auto"}} alt={innerRecipe.description}/>
                              }
                              </MainRecipe>
                          </MainRecipe>
                          <LongButton onClick={()=>{ addProductCartDirect(innerRecipe.productId)}}>
                            <span>장바구니 바로담기</span>
                            <span className="material-symbols-outlined">
                              chevron_right
                            </span>
                          </LongButton>
                          <RecipeTag style={{marginBottom:"0px"}}>
                              <RecipeTagTitle>
                                  <span>#태그상품</span>
                              </RecipeTagTitle>
                              <RecipeTagImages>
                              {getProduct(innerRecipe.productId).taggingProduct?.map((productId:number)=>{
                                  const product = getProduct(productId);
                                  return (<RecipeTagImage src={product.imgUrl} onClick={()=>{
                                      router.push(`/product/${productId}`);
                                  }}/>)
                              })}
                              </RecipeTagImages>
                          </RecipeTag>
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
              <div style={{backgroundImage:`url(${categoryElement.imgUrl})`}}></div>
              <CategoryText>{categoryElement.name}</CategoryText>
            </CategoryElement>
    })}

  </CategorySection>
        <TextHero>오늘의 특가</TextHero>
        <div className="Slide">
          <Swiper
          spaceBetween={0}
          slidesPerView={2.5}
          >
          {products.map((product:IProductType, idx:number)=>{
            if(idx === -1){
              return (<></>)
            }else
            return (

            <SwiperSlide>
              <Product product={product}/>
            </SwiperSlide>
          )
          })}
          </Swiper>
        </div>
        
      </main>
    </>
  )
}
