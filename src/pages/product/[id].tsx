import { useProducts } from '@/hook/productHook';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import { useEffect, useState } from 'react';
import { getRecipeWithProductId } from '@/state/recipe';
import { useRecipe } from '@/hook/recipeHook';
import { useCurrentUser } from '@/hook/userHook';
import useUtilHook from '@/hook/utilHook';
import { useMiniCart } from "@/hook/miniCartHook"
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadarController, RadialLinearScale, LineController, LineElement, PointElement, LinearScale, Title } from 'chart.js';

ChartJS.register(RadarController, RadialLinearScale, LineController, LineElement, PointElement, LinearScale, Title);

import type { ChartOptions } from 'chart.js';

const chartOptions: ChartOptions<'radar'> & ChartOptions = {
    elements: {
      //데이터 속성.
      line: {
        borderWidth: 2,
        borderColor: "#ff6600",
      },
      //데이터 꼭짓점.
      point: {
        backgroundColor:"#ff6600",
      }
    },
    scales: {
      r: {
        ticks: {
          stepSize: 2.5,
          display: false,
        },
        grid: {
          color: "#ff6600",
        },
        //라벨 속성 지정.
        pointLabels: {
          font: {
            size: 12,
            weight: '700',
            family: 'Pretendard',
          },
          color: "#000000",
        },
        angleLines: {
          display: false,
        },
        suggestedMin: 0,
        suggestedMax: 5,
      },
    },
    //위에 생기는 데이터 속성 label 타이틀을 지워줍니다.
    plugins: {
      legend: {
        display: false,
      },
    },
    //기본 값은 가운데에서 펴져나가는 애니메이션 형태입니다.
    animation: {
      duration: 0,
    },
  };
  const chartData = {
    labels: ['열량', '단백질', '나트륨', '지방', '탄수화물'],
    datasets: [
      {
        label: '팀 점수',
        data: [3,3,4,2,4],
        backgroundColor: '#ff6600',
      },
    ],
  };
export default function Product(){
    const router = useRouter();
    const id = router.query.id !== undefined ? Number(router.query.id) : 1;
    const {products, setProducts,getProductPriceWithProductId, getProductSalePriceWithProductId, getSaleRate} = useProducts();
    const {currentUser, setCurrentUser, setProductId, setRecipeId, setIngredientId} = useCurrentUser();
    const {miniCart, setMiniCart} = useMiniCart();
    const {printPrice}=useUtilHook();
    //index
    
    const currentRecipe = useRecoilValue(getRecipeWithProductId)

        
    const product = products.filter((data:any, idx:number)=>{
        return data.id === Number(id)
    })[0];
    

    useEffect(()=>{
        setCurrentUser({...currentUser, productId:id});
        setMiniCart({...miniCart, isButtonShow:true})
        return () => {
            setMiniCart({...miniCart, isButtonShow:false})
        }
    },[])
    const [price, setPrice] = useState(getProductPriceWithProductId(product.id));
    const [salePrice, setSalePrice] = useState(getProductSalePriceWithProductId(product.id));

    return(<>
    {product && <div className="Product">
      <div className='skeleton-item' style={{ height:"430px", display:"flex", width:"100%",overflow:"hidden",alignItems:"center", justifyContent:"center"}}>
        <img src={product.imgUrl} style={{width:"100%",height:"auto"}}/>
      </div>
        <div className='wrapper'>
            <p>{product.name}</p>
            <p>
                <span>{getSaleRate(price!,salePrice!)}%</span>
                <span>{printPrice(salePrice!)}원</span> 
            </p>
            <p className="product-description">
                {product.description}
                
            </p>
            <p className="recipe-title">
                영양성분
            </p>
            <hr></hr>
            <div style={{background:"#e8e8e8",width:"95%",margin:"0 auto",borderRadius:"10px"}}>
            <Radar data={chartData} options={chartOptions} />
            </div>
            {product.descriptionImage && (<>
            <p className="recipe-title">
                상세설명
            </p>
            <hr></hr>
            <p className='skeleton-item product-description' style={{ minHeight:"300px", display:"flex", width:"100%",overflow:"hidden",alignItems:"center", justifyContent:"center", paddingBottom:"0px",marginBottom:"40px"}}>
                <img src={product.descriptionImage} style={{"width":"100%","height":"auto"}}/>
                
            </p>
            </>)}
            {product.recipeId && product.recipeId > -1 && (<><p className="recipe-title">
                레시피
            </p>
            <hr></hr></>)}
            <ul className="recipe">
            {product.recipeId && product.recipeId > -1 && currentRecipe && currentRecipe.step.map((recipeData,idx)=>{
                return (
                    <li key={idx}>
                        <div className='skeleton-item product-description' style={{ minHeight:"200px", display:"flex", width:"100%",overflow:"hidden",alignItems:"center", justifyContent:"center",padding:0}}>
                            <img src={recipeData.imgUrl}/>
                            <span style={{zIndex:"20"}}>{idx+1}</span>
                        </div>
                        <p>{recipeData.description}</p>
                    </li>
                )
            })}
            </ul>
            {/* <img src="/images/contents.webp" style={{marginTop:'50px'}}/> */}
        </div>
        
    </div>}
    </>)
}