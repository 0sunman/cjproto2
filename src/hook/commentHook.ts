import { commentState } from "@/state/comment"
import { useRecoilState } from "recoil"


export const useComment = () => {
    const [comments,setComments] = useRecoilState(commentState);
    return {comments,setComments}
}