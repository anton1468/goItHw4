import React, { useEffect, useState} from 'react';
import {AddButton, Container, Heading1, PersonPhone, Text} from '../Styles'

const localStorageKey = 'phoneBook'

const Contacts = () => {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [contacts, setContacts] = useState([])


  const handleChangeName = (event) => {
    setName(event.target.value)
  }

  const handleChangeNumber = (event) => {
    setNumber(event.target.value)
  }

  const handleAddPerson = () => {
    const findExistingName =
      contacts.find((person) => person.name.toLowerCase() === name.toLowerCase())
    if (findExistingName) {
      return alert("Existing person")
    }
    setContacts([...contacts, {name, number}])

    localStorage.setItem(localStorageKey, JSON.stringify([...contacts, {name, number}]))
    setName('')
    setNumber('')
  }

  const handleFindPerson = (event) => {
    setFilter(event.target.value)
  }

  const handleDeletePerson = (name) => {
    const newContacts = contacts.filter((person) => person.name !== name)
    localStorage.setItem(localStorageKey, JSON.stringify(newContacts))
    setContacts(newContacts)
  }

  useEffect(() => {
    const phoneBookLS = localStorage.getItem(localStorageKey)
    setContacts(JSON.parse(phoneBookLS))
  },[])
  const filteredArray = contacts.filter((item) => {
    return item.name.toLowerCase().includes(filter.toLowerCase())
  })
  const isButtonVisible = name && number



    return (
      <Container>
        <Heading1>Phonebook</Heading1>
        <div>
          <Text>Name</Text>
          <input
            type="text"
            name="name"
            pattern="[a-zA-Z'-'\s]*"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={(event) => handleChangeName(event)}
            value={name}
          />
          <Text>Number</Text>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={(event) => handleChangeNumber(event)}
            value={number}
          />
          <AddButton onClick={handleAddPerson} disabled={!isButtonVisible}>Add contact</AddButton>
        </div>
        <Text>Find by name</Text>
        <input onChange={(event) => handleFindPerson(event)}/>
        <ul>
          {filteredArray.length > 0 && filteredArray.map((person, key) =>
            <PersonPhone key={key}>
              <Text>{person.name}: {person.number}</Text>
              <AddButton onClick={() => handleDeletePerson(person.name)}>Delete</AddButton>
            </PersonPhone>
          )}
        </ul>
      </Container>
    );
}

export default Contacts;
