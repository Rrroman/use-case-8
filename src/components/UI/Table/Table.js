import React from 'react';
import { useSelector } from 'react-redux';
import classes from './table.module.css';

export default function Table() {
  const messages = useSelector((state) => state.messages.messages);

  if (!messages.length) {
    return <h2>No massages saved.</h2>;
  }

  return (
    <table className={classes.table}>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Second Name</th>
          <th>Email</th>
          <th>Message</th>
        </tr>
      </thead>
      <tbody>
        {messages.map((message) => (
          <tr key={message.id}>
            <td>{message.firstName}</td>
            <td>{message.secondName}</td>
            <td>{message.email}</td>
            <td>{message.message}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
