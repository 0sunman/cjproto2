import { IUser, userListState } from "@/state/userList";
import { useRecoilState } from "recoil"


export const useUsers = () => {
    const [users,setUsers] = useRecoilState(userListState);
    const getUser = (id:string)=>users.filter((user:IUser)=> (user.id === id))[0]
    return {users,setUsers,getUser}
}