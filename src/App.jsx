import { useState } from "react";
import UsersTable from "./components/UsersTable";
import CreateUserFom from "./components/CreateUserFom";
import './App.scss'
import { Button, Container } from "@radix-ui/themes";

function App() {
  const [visibleModal,setModalVisible] = useState(false)
  
  return (
    <Container>
      <header>
        <h1>React FireStore - Users</h1>
      </header>
      <section id="main_section">
        <nav>
          <Button onClick={()=>setModalVisible(true)}>Register</Button>
        </nav>
        {visibleModal && <CreateUserFom close={setModalVisible}/>}
        <UsersTable/>
      </section>
    </Container>
  )
}

export default App