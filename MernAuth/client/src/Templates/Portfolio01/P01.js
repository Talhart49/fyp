import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const FS1 = (props) => {
  const finalCode = useSelector((state) => state.P01.finalCode);

  return (
    <div>
      <div id='preview' dangerouslySetInnerHTML={{ __html: finalCode }} />
    </div>
  );
};

export default FS1;
