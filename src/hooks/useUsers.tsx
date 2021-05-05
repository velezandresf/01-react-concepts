import { useState, useRef, useEffect } from "react";
import { reqresApi } from "../api/reqRes";
import { User, ReqResList } from "../interfaces/reqRes";

export const useUsers = () => {
    const [users, setUsers] = useState<User[]>([]);
    
    const pageRef = useRef(1);

    useEffect(() => {
        loadUsers();
    }, [])

    const loadUsers = async() => {
        const resp = await reqresApi.get<ReqResList>('/users', {
            params: {
                page: pageRef.current
            }
        });

        if(resp.data.data.length > 0) {
            setUsers(resp.data.data);
        }
        else{
            alert("No more users");
            pageRef.current --;
        }
    }

    const nextPage = () => {
            pageRef.current ++;
            console.log(pageRef.current)
            loadUsers();
    }

    const beforePage = () => {
        if ( pageRef.current > 1 ){
            pageRef.current --;
            loadUsers();
        }
    }
    return {users, nextPage, beforePage}
}
