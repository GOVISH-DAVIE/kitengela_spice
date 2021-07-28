import { createContext } from "react";
import { Interface } from "readline";
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
const UserContext = createContext(defUser);
export default UserContext