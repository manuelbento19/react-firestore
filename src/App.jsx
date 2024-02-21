import { initializeApp } from "firebase/app";
import { collection,getDocs, getFirestore,addDoc, doc, deleteDoc } from "firebase/firestore";
import { useEffect } from "react";
import { firebaseConfig } from "./config/firebase";
import { useState } from "react";
import UsersTable from "./components/UsersTable";
import CreateUserFom from "./components/CreateUserFom";
import './App.scss'
import { createPortal } from "react-dom";

const app = initializeApp(firebaseConfig);

function App() {
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

  useEffect(()=>{
    getUsers()
  },[])


  return (
    <main id="main">
      <header>
        <h1>React FireStore - Users</h1>
      </header>
      <section id="main_section">
        <CreateUserFom createUser={createUser}/>
        <UsersTable database={database} getUsers={getUsers} users={users} deleteUser={deleteUser}/>
      </section>
    </main>
  )
}

export default App