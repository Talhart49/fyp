import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';

const TutorialContent = () => {
  const [data, setData] = useState([]);
  let attr;

  useEffect(() => {
    axios.get('http://localhost:8080/api/gethtmlschemas').then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div className='main-container'>
      {data.map((item) => (
        <div className='main-content' key={item._id}>
          <h2>{item.title}</h2>
          <p>{item.content}</p>
          <table>
            <tr>
              <th>Tag</th>
              <th>Description</th>
            </tr>
            <th>
              <td>{item.attributeNames}</td>
            </th>
            <th>
              <td>{item.attributeExplanation}</td>
            </th>
          </table>

          <h3>Example</h3>
          <textarea name='description' rows='10' col='50'>
            {item.example}
          </textarea>
        </div>
      ))}
    </div>
  );
};

export default TutorialContent;
