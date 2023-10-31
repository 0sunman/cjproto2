export default function useUtilHook() {
    const printPrice = (price:number)=>{
        return String(price).split("").reverse().reduce((a:Array<string>,v:string,idx:number)=>{
            if(idx !== 0 && 0 == (idx % 3)){
                a.unshift(",");
            }
                a.unshift(v);
                return a;
        },[]).join("")
    }

    return { printPrice }
}