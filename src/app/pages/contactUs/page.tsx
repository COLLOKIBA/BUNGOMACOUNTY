// ContactUs.tsx
import React from 'react';
import styles from './page.module.css';

const ContactUs: React.FC = () => {
  return (
    <div className={styles.contactUs}>
      <h1>Contact Us</h1>
      <div className={styles.contactInfo}>
        <p>Address: P.O BOX 437, BUNGOMA</p>
        <p>Phone:+254(055)30343</p>
        <p>Email:  info@bungoma.go.ke</p>
      </div>
      <form className={styles.contactForm}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Your Name" />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Your Email" />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" placeholder="Your Message" rows={4}></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactUs;
