import React from 'react'
import {Button,Flex,TextField} from '@radix-ui/themes';
import './Form.scss'

export default function CreateUserFom({createUser}) {
    
    const onsubmit = async(event) => {
        event.preventDefault();
        const nameInput = event.target[0]
        const emailInput = event.target[1]
    
        if(!nameInput.value) return nameInput.focus()
        if(!emailInput.value) return emailInput.focus()
    
        await createUser(nameInput.value,emailInput.value)
    }
    return (
    <form id='form' className='' onSubmit={onsubmit}>
        <Flex direction="column">
          <label htmlFor="name">Name</label>
          <TextField.Root>
            <TextField.Input id='name'/>
          </TextField.Root>
        </Flex>
        <Flex direction="column">
          <label htmlFor="email">E-mail</label>
          <TextField.Root>
            <TextField.Input id='email'/>
          </TextField.Root>
        </Flex>
        <Button>Register</Button>
    </form>
  )
}
