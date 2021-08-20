import React, { useState, useEffect } from 'react';
import { Header, Button, Form, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import '../App.css';

export default function Update(){
    const [name, setName] = useState(localStorage.getItem('name'));
    const [secondName, setSecondName] = useState(localStorage.getItem('surname'));
    const [birthday, setBirthday] = useState(localStorage.getItem('birthday'));
    const [birthdays, setBirthdays] = useState([])
    useEffect(()=> {
        axios.get('https://61141e1fcba40600170c1e17.mockapi.io/birthdaysapi/birthday')
        .then(response => {
            setBirthdays(response.data);
        })
       
    }, [])
    const putData = () => {
        
        console.log(secondName)
        //data = JSON.parse(data.results)
   
        let id = localStorage.getItem('ID')
        console.log(name + ' '+ secondName)
        birthdays.filter((b) => b.id === id )
        console.log(birthdays)
      
  
        axios.put(`https://61141e1fcba40600170c1e17.mockapi.io/birthdaysapi/birthday/${id}`, {id: id, name: name, surname: secondName, birthday: birthday});
        console.log(id)
    }
    return(
        <main>
        <Header as="h2">Update operation</Header>
        <Form className="create-form myForm">
        <Form.Field required>
            <label className="myLabel">First name</label>
            <input className="myInput" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="First Name" minlength="2" pattern="^[A-Za-zÀ-ÿ ,.'-]+$" />
        </Form.Field>
        <Form.Field required>
            <label className="myLabel">Last name</label>
            <input className="myInput" type="text"  value={secondName} onChange={(e) => setSecondName(e.target.value)} placeholder="Last Name" minlength="2" pattern="^[A-Za-zÀ-ÿ ,.'-]+$" />
        </Form.Field>
        <Form.Field required>
                    <label className="myLabel">Updated birthday</label>
                    <input className="myInput"type="date"  value={birthday} onChange={(e) => setBirthday(e.target.value)} placeholder="Firts Name" />
                </Form.Field>
                <Link to="/read">
                <Button className="myButton" disabled={name&&secondName&&birthday?false:true} onClick={() => putData()}>Update the data</Button>
                </Link>
        </Form>
        </main>
    )
}