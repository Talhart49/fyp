import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Index = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    try {
      axios.get('http://localhost:8080/api/newCode/').then((res) => {
        setData(res.data.code);
        console.log(res.data.code);
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: data }} />
    </div>
  );
};

export default Index;
