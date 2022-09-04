import React from 'react';

const Output = ({ data }) => {
  return (
    <div className='output'>
      <textarea value={data} readOnly></textarea>
    </div>
  );
};

export default Output;
