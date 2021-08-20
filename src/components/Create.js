import React, { useState } from 'react';
import { Button, Header, Icon, Form } from 'semantic-ui-react'
import axios from 'axios'

import '../App.css';

export default function Create(){
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [birthday, setBirthday] = useState('');
    const postData = () => {
        axios.post('https://61141e1fcba40600170c1e17.mockapi.io/birthdaysapi/birthday', {
            id: Math.random()*1000 + 1,
            name, 
            surname,
            birthday
        })
    }
    return(
        <main>
  
            <Form className="create-form myForm">
            <Header as='h2' icon>
  
  Add new birthday   <Icon name='birthday' />
</Header>
                <Form.Field required>
                    <label className="myLabel">First name</label>
                    <input className="myInput" type="text" onChange={(e) => setName(e.target.value)} placeholder="First Name" minlength="2" pattern="^[A-Za-zÀ-ÿ ,.'-]+$" />
                </Form.Field>
                <Form.Field required>
                    <label className="myLabel">Second name</label>
                    <input className="myInput"type="text" onChange={(e) => setSurname(e.target.value)} placeholder="Second Name" pattern="^[A-Za-zÀ-ÿ ,.'-]+$" />
                </Form.Field>
                <Form.Field required>
                    <label className="myLabel">Birthday date</label>
                    <input className="myInput"type="date" onChange={(e) => setBirthday(e.target.value)} placeholder="Firts Name" />
                </Form.Field>
                <Button className="myInput" disabled={name&&surname&&birthday?false:true} onClick={() => postData()}>Save a birthday</Button>
            </Form>
            </main>
    )
}