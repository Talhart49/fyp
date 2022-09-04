import React, { useState } from 'react';
import axios from 'axios';
import './index.css';

const AddHTML = () => {
  const [data, setData] = useState({
    title: '',
    content: '',
    attributeNames: '',
    attributeExplanation: '',
    example: '',
  });

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = 'http://localhost:8080/api/addhtmlschemas';
      const { data: res } = await axios.post(url, data);
      console.log(res.message);
      setData({
        title: '',
        content: '',
        attributeNames: '',
        attributeExplanation: '',
        example: '',
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='container'>
      <h1>Add HTML</h1>
      <form onSubmit={handleSubmit}>
        <div className='pairs'>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            name='title'
            id='title'
            onChange={handleChange}
            value={data.title}
            required
          />
        </div>

        <div className='pairs'>
          <label htmlFor='content'>Content</label>
          <textarea
            name='content'
            id='content'
            cols='30'
            rows='10'
            onChange={handleChange}
            value={data.content}
            required></textarea>
        </div>

        <div className='pairs'>
          <label htmlFor='attributeNames'>Attribute Names</label>
          <input
            type='text'
            name='attributeNames'
            id='attributeNames'
            onChange={handleChange}
            value={data.attributeNames}
            required
          />
        </div>

        <div className='pairs'>
          <label htmlFor='attributeExplanation'>Attribute Explanations</label>
          <textarea
            cols='30'
            rows='10'
            type='text'
            name='attributeExplanation'
            id='attributeExplanation'
            onChange={handleChange}
            value={data.attributeExplanation}
            required
          />
        </div>

        <div className='pairs'>
          <label htmlFor='example'>Example</label>
          <textarea
            name='example'
            id='example'
            cols='30'
            rows='10'
            onChange={handleChange}
            value={data.example}
            required></textarea>
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default AddHTML;
