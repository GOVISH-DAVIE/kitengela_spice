import { createContext } from "react"; 
export interface UserContextInterface {
    user: {
        name: string,
        tel: string,
        email: string,
        updated_at: string,
        created_at: string,
        id: string
    } | null
    token: string | null
}

export let defUser: UserContextInterface = {
    user: null,
    token: null
}
const UserContext = createContext({
    value: defUser,
    updateUser: (e: UserContextInterface) => { }
});
export default UserContext