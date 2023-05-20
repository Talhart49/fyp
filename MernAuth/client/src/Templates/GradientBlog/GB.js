import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const FS1 = (props) => {
  const finalCode = useSelector((state) => state.B02.finalCode);

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: finalCode }} />
    </div>
  );
};

export default FS1;
