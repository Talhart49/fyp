import './App.css';
import Output from './components/Output';
import Nav from './components/Nav';
import React from 'react';

function Navbar() {
  const data = {
    data: `
    <!DOCTYPE html>
  <html lang="en">

    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.css"
      integrity="sha512-kHUKImNBR9mcwQ1u4RILtsiJmC6u539bgkRapfGrbwXbkPxfapkzAXvdGnrTu3blGNXHPCX0klrlE7zAZhr+jA=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
      <title>Template</title>

      <style>
        ${Nav.finalCode.style}
        
        </style>
    </head>
    <body>
      ${Nav.html}
    </body>
  </html>
  `,
  };
  return data;
}

function App() {
  return (
    <div className='App'>
      <Output
        data={`
          ${Navbar().data}
      `}
      />
    </div>
  );
}

export default App;
