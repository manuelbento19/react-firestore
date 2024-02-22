import { useContext } from "react";
import { createContext } from "react";
import {initializeApp} from 'firebase/app'
import { firebaseConfig } from "../config/firebase";
import { collection, getFirestore ,getDocs,doc,addDoc,deleteDoc} from "firebase/firestore";
import { useState } from "react";

const Context = createContext({
    users: [],
    getUsers: async() => {},
    createUser: async() => {},
    deleteUser: async() => {},
})
const app = initializeApp(firebaseConfig)

export const ContextProvider = ({children}) => {
    const [users,setUsers] = useState([])
    const database = getFirestore(app)
    const usersCollectionRef = collection(database,"users")

    const getUsers = async() => {
        const {docs} = await getDocs(usersCollectionRef);
        const result = docs.map((item)=>({...item.data(),id:item.id}));
        setUsers(result)
    }
    const createUser = async(name,email) => {
        await addDoc(usersCollectionRef,{name,email})
        await getUsers()
    }
    const deleteUser = async(id) => {
        const userDoc = doc(database,"users",id)
        await deleteDoc(userDoc);
        await getUsers()
    }
    
    return(
        <Context.Provider value={{
            users,
            getUsers,
            createUser,
            deleteUser
        }}>
            {children}
        </Context.Provider>
    )
}

export const context = () => useContext(Context)