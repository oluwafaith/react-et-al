import React from 'react';
//import logo from './logo.svg';
import './App.css';

function ContactCard(props) {
    const styles = {
        width:"350px",
        height:"250px"
    }
    return (
        <div className="contacts">
    <div className="contactCard">
    <img src={props.contact.imageUrl} style={styles} />
    <h3>{props.contact.name}</h3>
    <p>Phone: {props.contact.phone}</p>
    <p>Email: {props.contact.email}</p>
    </div>
    </div>
  );
}

export default ContactCard;
