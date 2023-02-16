import React, { useState, useEffect } from 'react';
import { TextField } from '@mui/material';

import { useSelector, useDispatch } from 'react-redux';

import { editNavbar } from '../../redux/FoodSite01_redux/FS1_Slice';

function Navbar() {
  const navElements = useSelector((state) => state.FS1.navbar);

  useEffect(() => {
    console.log(navElements);
  }, [navElements]);

  const dispatch = useDispatch();

  const [navElementsNew, setNavElementsNew] = useState(navElements);

  // const handleNavElementsChanges = (e) => {
  //   setNavElementsNew({ ...navElementsNew, [e.target.name]: e.target.value });

  //   dispatch({ navElementsNew });
  // };

  return (
    <div>
      {/* <div>
        <div dangerouslySetInnerHTML={{ __html: navbarCode }} />
      </div> */}

      <div>
        <h1
          style={{
            textAlign: 'center',
            borderBottom: '1px solid #000',
            fontSize: '1rem',
            fontWeight: 'bold',
            textTransform: 'uppercase',
          }}>
          Navbar Customization
        </h1>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1rem',
            marginTop: '2rem',
          }}>
          <h3>Nav Elements</h3>
          <form
            action=''
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              width: '50%',
              margin: '0 auto',
            }}>
            {Object.keys(navElements).map((key) => {
              return (
                <TextField
                  id='standard-basic'
                  label={key}
                  variant='standard'
                  name={key}
                  value={navElementsNew[key]}
                  onChange={(e) => {
                    setNavElementsNew({
                      ...navElementsNew,
                      [e.target.name]: e.target.value,
                    });
                  }}
                />
              );
            })}
            <button
              type='button'
              onClick={() => {
                dispatch(editNavbar(navElementsNew));
              }}>
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
