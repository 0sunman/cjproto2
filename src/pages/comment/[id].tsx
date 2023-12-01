import { useComment } from "@/hook/commentHook";
import { useUsers } from "@/hook/userListHook";
import { IComment } from "@/state/comment";
import styled from "@emotion/styled"

import { Swiper, SwiperSlide,  } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import { useRouter } from "next/router";
import { useState } from "react";

const Comments = styled.div`margin-top:44px;display:flex; flex-direction:column; width:100%;
`;
//border-bottom:1px solid #e8e8e8; 

const CommentWrapper = styled.div`
padding-bottom:20px
&:last-child{border-bottom:0px};
&:nth-child(n+2){margin-top:20px}
`;
const CommentColumnText = styled.div`
display:flex; width:100%; background-color:#ffffff;
overflow:hidden;
flex-direction:row; 
padding-bottom:20px;
> div:nth-child(1){width:90%}
> div:nth-child(2){width:10%}
`;
const CommentColumnSlider = styled.div`
width:100%;
overflow:hidden;
`;
const CommentHeader = styled.div`display:flex; flex-direction:row; justify-content:center; align-items:start;margin:0px 0px;
>img{margin-left:5px; width:50px; height:50px; border-radius:50%;}`;
const UserImage = styled.img``;
const TextArea = styled.div`margin-left:10px;
`;
const UserName = styled.span`font-weight:bold; padding-right:10px;`;
const CommentText = styled.span`line-height:22px;`;
const CommentContent = styled.div`padding: 10px`;
const CommentImageArea = styled.div`
img{width:100%;}
`;
const CommentDate = styled.div`
display:flex; align-items:end; justify-contents:end; width:100%;
margin-top:10px;    font-size: 14px;
span:first-child{padding-right:20px; color:#a8a8a8}
span:last-child{font-weight:bold;}
`;
const CommentHeart = styled.div`display:flex; justify-content:center; align-items:top; padding-top:35px; height:20px;
>span{font-size:18px;padding-right:10px}
`;
const ImagePopupWrapper = styled.div`
position:fixed; width:100%; height:100%; background:rgba(0,0,0,.3);
display:flex; flex-direction:column; justify-content:center; align-items:center;
z-index:999999;
top:0;left:0;
`
const ImageArea = styled.img`
    width:90%;
    height:auto;
`

export default function Comment(){
    const router = useRouter();
    const {comments, setComments} = useComment();
    const {users, setUsers, getUser} = useUsers();
    const query = String(router.query.id);
    const [imageUrl, setImageUrl] = useState<string>("")
    const [isImagePopup, setIsImagePopup] = useState<boolean>(false)
    console.log(query)

    return <>
    <Comments>
        {comments.map((comment:IComment, idx:number)=>{
            if(query !== String(comment.productId)) return <></>
        const {imgUrl:UserImageURL,id:userId} = getUser(comment.userId)
        
        return <CommentWrapper key={idx}>
            <CommentColumnText>
                <CommentContent>
                    <CommentHeader>
                        <img src={UserImageURL}></img>
                        <TextArea>
                            <UserName>{userId}</UserName>
                            <CommentText>{comment.texts}</CommentText>
                            <CommentDate>
                                <span>{comment.createAt}</span> 
                                <span>좋아요 {Math.floor(Math.random()*100)}</span>
                            </CommentDate>
                        </TextArea>
                    </CommentHeader>
                    
                </CommentContent>
                <CommentHeart><span className="material-symbols-outlined">
                            favorite
                        </span></CommentHeart>
        </CommentColumnText>
        <CommentColumnSlider>
                <CommentImageArea>
            
            <Swiper
            spaceBetween={"10px"}
            slidesPerView={2.5}
            autoplay={{ delay: 2000 }}
            modules={[Autoplay]}
            >{comment.imgUrl.map((pictureUrl:string)=>(<SwiperSlide onClick={()=>{
                setIsImagePopup(true);
                setImageUrl(pictureUrl)
            }}><img src={pictureUrl}></img></SwiperSlide>))}</Swiper>
                
            </CommentImageArea>
        </CommentColumnSlider>
        <ImagePopupWrapper style={{display:(isImagePopup)? "flex" : "none"}} onClick={()=>{
            setIsImagePopup(false);
        }}>
            <ImageArea src={imageUrl}></ImageArea>
        </ImagePopupWrapper>
        </CommentWrapper>})}
    </Comments>
    </>
}
