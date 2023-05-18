import React from 'react';
import { useSelector } from 'react-redux';

const Index = (props) => {
  const data = useSelector((state) => state.Reccomend.code);
  console.log('dgd', data);

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: data }} />
    </div>
  );
};

export default Index;
