import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: null,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    // fetch('http://localhost/users/3001', {
    //   method: 'POST',
    //   body: JSON.stringify(formData),
    //   headers: { ContentType: 'application/json' },
    // });
  };
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Contact Us</h1>
      <form className='form' onSubmit={handleSubmit}>
        <label htmlFor='firstName'>
          First Name
          <input
            type='text'
            value={formData.firstName}
            name='firstName'
            onChange={handleChange}
            placeholder='Enter your first name'
          ></input>
        </label>
        <label htmlFor='lastName'>
          Last Name
          <input
            type='text'
            value={formData.lastName}
            name='lastName'
            onChange={handleChange}
            placeholder='Enter your last name'
          ></input>
        </label>
        <label htmlFor='phoneNumber'>
          Phone Number
          <input
            type='tel'
            value={formData.phoneNumber}
            name='phoneNumber'
            onChange={handleChange}
            placeholder='Enter your phone number'
          ></input>
        </label>
        <button type='submit' className='submit'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
