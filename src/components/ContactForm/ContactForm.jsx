import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { contactsSelectors, contactsOperations } from "../../redux/contacts";

import ButtonText from "../Button/Button";
import { Form, Label, InputName, Input } from "./ContactForm.styled";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const contact = { name, number };

  const contacts = useSelector(contactsSelectors.getItems);
  const dispatch = useDispatch();

  const handelChange = (e) => {
    const { name, value } = e.currentTarget;
    if (name === "name") {
      setName(value);
    }
    if (name === "number") {
      setNumber(value);
    }
  };

  const handelSubmit = (e) => {
    e.preventDefault();

    if (
      contacts.some(
        (contact) => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is alredy in the contacts list`);
      return;
    }

    dispatch(contactsOperations.addContact(contact));

    reset();
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  return (
    <Form onSubmit={handelSubmit}>
      <Label>
        <InputName>Name</InputName>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={name}
          onChange={handelChange}
        />
      </Label>

      <Label>
        <InputName>Number</InputName>
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          value={number}
          onChange={handelChange}
        />
      </Label>

      <ButtonText type="submit">Add Contact</ButtonText>
    </Form>
  );
};

export default ContactForm;
