import React, { useState } from "react";
import { Button, Header, Icon, Form } from "semantic-ui-react";
import axios from "axios";
import createStyles from "./create.module.css";
import { Link } from "react-router-dom";
import "../App.css";

export default function Create() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [birthday, setBirthday] = useState("");
  const postData = () => {
    axios.post(
      "https://61141e1fcba40600170c1e17.mockapi.io/birthdaysapi/birthday",
      {
        id: Math.random() * 1000 + 1,
        name,
        surname,
        birthday,
      }
    );
  };
  return (
    <main class={createStyles.main}>
      <Form className={createStyles.myForm}>
        <Header as="h2" icon>
          Add new birthday <Icon name="birthday" />
        </Header>
        <Form.Field required>
          <label className={createStyles.myLabel}>First name</label>
          <input
            className={createStyles.myInput}
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder="First Name"
            minlength="2"
            pattern="^[A-Za-zÀ-ÿ ,.'-]+$"
          />
        </Form.Field>
        <Form.Field required>
          <label className={createStyles.myLabel}>Second name</label>
          <input
            className="myInput"
            type="text"
            onChange={(e) => setSurname(e.target.value)}
            placeholder="Second Name"
            pattern="^[A-Za-zÀ-ÿ ,.'-]+$"
          />
        </Form.Field>
        <Form.Field required>
          <label className="myLabel">Birthday date</label>
          <input
            className={createStyles.myInput}
            type="date"
            onChange={(e) => setBirthday(e.target.value)}
            placeholder="Birthday date"
          />
        </Form.Field>
        <div className={createStyles.buttonsContainer}>
        <Button
          className={createStyles.saveButton}
          disabled={name && surname && birthday ? false : true}
          onClick={() => postData()}
        >
          Save a birthday
        </Button>
        <Button className={createStyles.viewBtn}>
          <Link to="/read">View All</Link>
        </Button>
        </div>
      </Form>
    </main>
  );
}
