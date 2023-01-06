import React, {useState, useEffect} from 'react';
import {v4 as uuid} from "uuid";
import Header from "./Header"
import './App.css'
import AddContact from "./AddContact"
import ContactList from "./ContactList"


function App() {
  
  const LOCAL_STORAGE_KEY = "contacts";
  
  
  // useState Hook with getItem from LocalStorage
  const [contacts, setContacts] = useState(

    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
    );  
    

    // useEffect Hook to setItem on localStorage
      useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    
      }, [contacts]);
  
    
  const addContactHandler = (contact) => {  
    setContacts([...contacts,{id: uuid(), ...contact }])
  
  }

  const removeContactHandler = (id) => {

    const newContactList = contacts.filter((contact) => {

      return contact.id !== id;
    })

    setContacts(newContactList);
  }


  return (

    <div className='ui container'>

      <Header />

      <AddContact addContactHandler={addContactHandler}/>

      <ContactList contacts={contacts} getContactId={removeContactHandler}/>
      
    </div>
  );
}

export default App;
