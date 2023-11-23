export default function useUtilHook() {
    const printPrice = (price:number)=>{
        const test = Math.floor(price)
        return String(test).split("").reverse().reduce((a:Array<string>,v:string,idx:number)=>{
            if(idx !== 0 && 0 == (idx % 3)){
                a.unshift(",");
            }
                a.unshift(v);
                return a;
        },[]).join("")
    }

    return { printPrice }
}