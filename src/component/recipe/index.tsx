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
    > img {width:50px; height:50px; border-radius:50%; margin-left:10px;}
    > span:nth-child(2){margin-left:10px; font-size:14px}
    > span:nth-child(3){margin-left:auto; margin-right:10px;}
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
const RecipeTagTitle = styled.div``
const RecipeTagImages = styled.div``
const RecipeTagImage = styled.img``
const RecipeTagVideo = styled.video`width:100%;`

const RecipeComment = styled.div``
const RecipeCommentHeart = styled.div`font-size:14px; font-weight:bold; padding:5px 15px; padding-bottom:10px;`
const RecipeComments = styled.div`font-size:14px; color:#a8a8a8; padding:0px 15px; padding-bottom:10px;`
const RecipeDate = styled.div`font-size:11px; color:#a8a8a8; padding:0px 15px; padding-bottom:40px;`

const RecipeButtons = styled.div`
    display:flex;
    > span:first-child{padding-left:15px; }
    > span {font-size:28px; padding:5px; padding-top:0px}
    > span:last-child{margin-left:auto;padding-right:15px; }
`

export const useRecipeLayout = () => {
    return {RecipeWrapper, Header,RecipeMainImage,RecipeTagVideo, RecipeTag,RecipeTagTitle,RecipeTagImages,RecipeTagImage, RecipeComment,RecipeCommentHeart,RecipeComments,RecipeDate,RecipeButtons}
}