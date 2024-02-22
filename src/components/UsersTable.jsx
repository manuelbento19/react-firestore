import React from 'react';
import {Table,Button} from '@radix-ui/themes';
import { context } from '../context';
import { useEffect } from 'react';
 
const columns = ["#","Name","E-mail",""]

export default function UsersTable() {
  const {users,getUsers,deleteUser} = context();

  useEffect(()=>{
    getUsers()
  },[]);  

  return (
    <Table.Root variant='surface'>
      <Table.Header>
        <Table.Row>
          {columns.map((item,index)=><Table.RowHeaderCell key={index}>{item}</Table.RowHeaderCell>)}
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {users && users.length>0 && users.map((item,index)=>(
          <Table.Row key={item.id}>
            <Table.Cell>{index+1}</Table.Cell>
            <Table.Cell>{item.name}</Table.Cell>
            <Table.Cell>{item.email}</Table.Cell>
            <Table.Cell><Button onClick={()=>deleteUser(item.id)}>Remove</Button></Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  )
}
