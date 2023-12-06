import styled from "@emotion/styled"

const RecipeWrapper = styled.div`
    margin:44px 0px;
    padding:0px 0px; 
    width:100%;
    > ul { display:flex; flex-direction:column; width:100%;}
`
const Header = styled.div`
    display:flex;
    width:100%;  justify-content:center; align-items:center;
    > img {width:35px; height:35px; border-radius:50%; margin-left:10px;}
    > span:nth-child(2){margin-left:10px; font-size:12px; font-weight:normal}
    > span:nth-child(3),svg:nth-child(3){margin-left:auto; margin-right:3px;}
`
const RecipeMainImage = styled.img`
    width:100%;
`
const RecipeTag = styled.div`
    display:flex; justify-content:start; align-items:center; width:100%; padding:10px 0px; margin-bottom:5px;
    > div:nth-child(1) { width: 20%; padding-left:10px; text-align:center; font-size:13px;}
    > div:nth-child(2) { width: 80%; text-align:right; padding-right:10px}
    > div:nth-child(2) > img { width:45px; height:45px; margin-right:5px;}
`
const RecipeTagTitle = styled.div`text-align:left !important; padding-left:15px !important;`
const RecipeTagImages = styled.div``
const RecipeTagImage = styled.img``
const RecipeTagVideo = styled.video`width:100%;`

const RecipeComment = styled.div``
const RecipeCommentHeart = styled.div`font-size:12px; padding:5px 15px; padding-bottom:10px;`
const RecipeComments = styled.div`font-size:12px; color:#a8a8a8; padding:0px 15px; padding-bottom:10px;`
const RecipeDate = styled.div`font-size:11px; color:#a8a8a8; padding:0px 15px; padding-bottom:40px;`

const RecipeButtons = styled.div`
    display:flex;
    > svg:first-child{padding-left:15px; }
    > svg {font-size:28px; padding:5px; padding-top:0px}
    > svg:last-child{margin-left:auto;padding-right:15px; }
`

export const useRecipeLayout = () => {
    return {RecipeWrapper, Header,RecipeMainImage,RecipeTagVideo, RecipeTag,RecipeTagTitle,RecipeTagImages,RecipeTagImage, RecipeComment,RecipeCommentHeart,RecipeComments,RecipeDate,RecipeButtons}
}