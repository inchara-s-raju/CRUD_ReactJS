import React, { useEffect, useState } from 'react';

const About = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const res = await fetch('https://api.github.com/users/inchara-s-raju');
    const d = await res.json();
    setData(d);
    console.log(d);
  };
  return (
    <div className='about-page'>
      <img src={data.avatar_url} alt='profile'></img>
      <div className='details'>
        <h2>Hey! I am Inchara</h2>
        <p style={{ fontStyle: 'italic' }}>{data.bio}</p>
        <br />
        <p>
          Id mollit Lorem non laborum mollit in sint nisi duis. Aute et laboris
          velit tempor consequat incididunt. Quis occaecat adipisicing velit
          Lorem anim incididunt labore elit ipsum. Nulla sunt occaecat officia
          ea excepteur est. Sint excepteur excepteur ea mollit.
        </p>
        <p>
          Id mollit Lorem non laborum mollit in sint nisi duis. Aute et laboris
          velit tempor consequat incididunt. Quis occaecat adipisicing velit
          Lorem anim incididunt labore elit ipsum. Nulla sunt occaecat officia
          ea excepteur est. Sint excepteur excepteur ea mollit.
        </p>
      </div>
    </div>
  );
};

export default About;
