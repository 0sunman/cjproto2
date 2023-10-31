import { useComment } from "@/hook/commentHook";
import { useUsers } from "@/hook/userListHook";
import { IComment } from "@/state/comment";
import styled from "@emotion/styled"

import { Swiper, SwiperSlide,  } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

const Comments = styled.div`margin-top:44px;display:flex; flex-direction:column; width:100%;
`;
const CommentWrapper = styled.div`border-bottom:1px solid #e8e8e8; padding-bottom:20px`;
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
const CommentHeader = styled.div`display:flex; flex-direction:row; justify-content:center; align-items:center;margin:10px 0px;`;
const UserImage = styled.img`margin-left:5px; width:50px; height:50px; border-radius:50%;`;
const TextArea = styled.div`margin-left:10px;`;
const UserName = styled.span`font-weight:bold; padding-right:10px;`;
const CommentText = styled.span`line-height:22px;`;
const CommentContent = styled.div`padding: 10px`;
const CommentImageArea = styled.div`
img{width:100%;}
`;
const CommentDate = styled.div`
margin-top:10px;
span:first-child{padding-right:20px; color:#a8a8a8}
span:last-child{font-weight:bold}
`;
const CommentHeart = styled.div`display:flex; justify-content:center; align-items:top; padding-top:35px; height:20px;
>span{font-size:18px;padding-right:10px}
`;
export default function Comment(){
    const {comments, setComments} = useComment();
    const {users, setUsers, getUser} = useUsers();

    return <>
    <Comments>
        {comments.map((comment:IComment)=>{
        const {imgUrl:UserImageURL,id:userId} = getUser(comment.userId)
        
        return <CommentWrapper>
            <CommentColumnText>
                <CommentContent>
                    <CommentHeader>
                        <UserImage src={UserImageURL}></UserImage>
                        <TextArea>
                            <UserName>{userId}</UserName>
                            <CommentText>{comment.texts}</CommentText>
                        </TextArea>
                    </CommentHeader>
                    <CommentDate>
                        <span>{comment.createAt}</span> 
                    <span>좋아요 {1000}개</span>
                    </CommentDate>
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
            >{comment.imgUrl.map((pictureUrl:string)=>(<SwiperSlide><img src={pictureUrl}></img></SwiperSlide>))}</Swiper>
                
            </CommentImageArea>
        </CommentColumnSlider>
        </CommentWrapper>})}
    </Comments>
    </>
}
