import React from 'react'
import {Button,Flex,TextField} from '@radix-ui/themes';
import './Form.scss'
import { context } from '../context';

export default function CreateUserFom({close}) {
  const {createUser} = context();
  const onsubmit = async(event) => {
    event.preventDefault();
    const nameInput = event.target[0]
    const emailInput = event.target[1]

    if(!nameInput.value) return nameInput.focus()
    if(!emailInput.value) return emailInput.focus()

    await createUser(nameInput.value,emailInput.value)
    close(false)
  }

  const exitModal = () => {
    const inputs = []
    window.document.querySelectorAll('#modal input').forEach(item=>item.value && inputs.push(item))
    if(inputs.length==0)
    return close(false)
    
    if(confirm("Se você fechar agora, perderá quaisquer dados que estejam sendo inseridos. Tem certeza"))
    close(false)
  } 
  return (
    <div id='modal'>
      <div id='modal_shadow' onClick={exitModal}/>
      <form onSubmit={onsubmit}>
        <h1>Register</h1>
        <Flex direction="column">
          <label htmlFor="name">Name</label>
          <TextField.Root style={{padding: 4}}>
            <TextField.Input id='name'/>
          </TextField.Root>
        </Flex>
        <Flex direction="column">
          <label htmlFor="email">E-mail</label>
          <TextField.Root style={{padding: 4}}>
            <TextField.Input id='email'/>
          </TextField.Root>
        </Flex>
        <Button style={{padding: 20}}>Register</Button>
      </form>
    </div>
  )
}
