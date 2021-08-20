import React, { useState } from 'react';
import { Table, Button, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import '../App.css';

export default function Read(){

    const getData = () => {
        axios.get('https://61141e1fcba40600170c1e17.mockapi.io/birthdaysapi/birthday')
        .then((resp) => {  setBirthdays(resp.data); })
      
 }
 const [birthdays, setBirthdays] = useState(getData)
 const deleteData = (id) =>{
  axios.delete(`https://61141e1fcba40600170c1e17.mockapi.io/birthdaysapi/birthday/${id}`)
  .then(() => { getData()
  })
 }
 const setData = (id) => {
  axios.get(`https://61141e1fcba40600170c1e17.mockapi.io/birthdaysapi/birthday/${id}`)
  .then((resp) => {  
    let { name, surname, birthday } = resp.data;
localStorage.setItem('ID', id);
localStorage.setItem('name', name);
localStorage.setItem('surname', surname);
localStorage.setItem('birthday', birthday);
  })
 }
return (
    <Table padded>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>First Name</Table.HeaderCell>
        <Table.HeaderCell>Last name</Table.HeaderCell>
        <Table.HeaderCell>Birthday</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body >
{birthdays ? birthdays.map((bth) => (

      <Table.Row key={bth.id}>
        <Table.Cell>{bth.name}</Table.Cell>
        <Table.Cell>{bth.surname}</Table.Cell>
        <Table.Cell>
        {bth.birthday.split('T')[0]}
        </Table.Cell>
        <Table.Cell>
        <Button icon onClick={() => deleteData(bth.id)}>
    <Icon name='times' />
  </Button>
 <Link to="/update"><Button size="small" onClick={() => setData(bth.id)}>Update</Button></Link>
 </Table.Cell>
  </Table.Row>



))
:<h2>No data here...</h2>}
</Table.Body>

</Table>  

)

}