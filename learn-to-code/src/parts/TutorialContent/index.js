import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';

const TutorialContent = () => {
  const [data, setData] = useState({});

  let title = window.location.href.split('/')[4];
  console.log(title);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/gethtmlschemas/${title}`)
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      });
  }, []);

  return (
    <div className='main-container'>
      <div className='main-content' key={data._id}>
        <h2>{data.title}</h2>
        <p>{data.content}</p>
        <table>
          <tr>
            <th>Tag</th>
            <th>Description</th>
          </tr>
          <th>
            <td>{data.attributeNames}</td>
          </th>
          <th>
            <td>{data.attributeExplanation}</td>
          </th>
        </table>

        <h3>Example</h3>
        <textarea name='description' rows='10' col='50'>
          {data.example}
        </textarea>
      </div>
    </div>
  );
};

export default TutorialContent;
