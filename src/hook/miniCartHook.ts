import { getMiniCartButtonShow, getMiniCartMenuShow, minicartState } from "@/state/minicart"
import { useRecoilState, useRecoilValue } from "recoil"
import { useCurrentUser } from "./userHook";


export const useMiniCart = () => {
    const [miniCart, setMiniCart] = useRecoilState(minicartState);
    const isMiniCartButtonShow = useRecoilValue(getMiniCartButtonShow);
    const isMiniCartMenuShow = useRecoilValue(getMiniCartMenuShow);
    const setMiniCartMenu = (onoff:boolean) => { setMiniCart({...miniCart, isMenuShow:onoff}) }
    const setMiniCartButton = (onoff:boolean) => { setMiniCart({...miniCart, isMenuShow:onoff})}
    
    const {setProductId} = useCurrentUser();

    const addProductCartDirect = (id:number) => {
        setProductId(id);
        setMiniCart({...miniCart, isButtonShow:true, isMenuShow:true})
      }


    return {miniCart, setMiniCart,isMiniCartButtonShow,isMiniCartMenuShow, setMiniCartMenu, setMiniCartButton, addProductCartDirect}    
}