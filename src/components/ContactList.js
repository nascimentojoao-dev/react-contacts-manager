import React from 'react';
import ContactCard from './ContactCard.js'



const ContactList = (props) => {

  const removeContactHandler = (id) => {
    props.getContactId(id);
  };

  const renderContactList = props.contacts.map( (contact) => {
    return (
      <ContactCard 
      contact={contact}
      clickHandler={removeContactHandler}
      key={contact.id}
      />
    )
  })

  return (
  <>
    <div className='ui celled list'>{renderContactList}</div>
  </>
  )
}

export default ContactList;