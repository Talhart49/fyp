import React from 'react';

const Nav = ({ responsive, hover, LogoImg, LogoName }) => {
  const [finalCode, setFinalCode] = React.useState({});
  const code = {
    html: `
          <nav class="navbar">
          <div class="navbar-brand">
        
          <div>
            ${
              LogoImg
                ? `            <img src="${LogoImg}" alt="Logo Image">
`
                : `          <h2 class="navbar__logo">${LogoName}</h2>
                `
            }

          </div>
        </div>
  
        <ul class="navbar__ul" id="mylinks">
          <li class="navbar__ul-li">
            <a href="index" class="navbar__ul-li-a">Home</a>
          </li>
          <li class="navbar__ul-li">
            <a href="about.html" class="navbar__ul-li-a">About</a>
          </li>
          <li class="navbar__ul-li">
            <a href="contact.html" class="navbar__ul-li-a">Contact</a>
          </li>
        </ul>
        <a
          href="javascript:void(0);"
          class="navbar__icon-hamburger"
          id="navbar__icon-hamburger"
          onclick="myFunction()"
        >
          <i class="fa fa-bars"></i>
        </a>
        <a
          href="javascript:void(0);"
          class="navbar__icon-times"
          id="navbar__icon-times"
          onclick="myFunction2()"
        >
          <i class="fa fa-times"></i>
        </a>
      </nav>
          `,
    style: `
      .navbar {
          width: 100%;
          background-color: #f5f5f5;
          border-bottom: 1px solid #e5e5e5;
          padding: 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 1;
  
          box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
        }
        .navbar__logo {
          font-size: 2rem;
          font-weight: bold;
          margin: 0;
          text-transform: uppercase;
          margin-left: 2rem;
        }
        .navbar__ul {
          list-style-type: none;
          padding: 0;
          margin: 0;
          margin-right: 6rem;
        }
        .navbar__ul-li {
          display: inline;
          padding: 0 0.5rem;
        }
        .navbar__ul-li-a {
          text-decoration: none;
          color: #0d0d0d;
          font-size: 1.2rem;
          font-weight: 500;
        }
  
        .navbar__icon-hamburger {
          font-size: 1.5rem;
          color: #0d0d0d;
          overflow: hidden;
          margin-right: 2rem;
          display: none;
        }
        .navbar__icon-times {
          font-size: 1.5rem;
          color: #0d0d0d;
          overflow: hidden;
          margin-right: 2rem;
          display: none;
        }
        /* Style the hamburger menu */
  
        
      `,
    hover: `
      .navbar__ul-li-a:hover {
          color: #d67979;
          text-decoration: underline;
        }
        .navbar__ul-li-a:active {
          color: #d67979;
        }
        .navbar__logo:hover {
          transform: scale(1.05);
          color: #d65858;
          cursor: none;
        }
      `,
    responsive: `
      <script>
      function myFunction() {
        var x = document.getElementById('mylinks');
        x.style.display = 'block';
        var icon = document.getElementById('navbar__icon-hamburger');
        icon.style.display = 'none';
  
        var y = document.getElementById('navbar__icon-times');
        y.style.display = 'block';
      }
      function myFunction2() {
        var x = document.getElementById('mylinks');
        x.style.display = 'none';
        var icon = document.getElementById('navbar__icon-hamburger');
        icon.style.display = 'block';
        var y = document.getElementById('navbar__icon-times');
        y.style.display = 'none';
      }
  
      function defaultDisplay() {
        if (window.innerWidth > 720) {
          document.getElementById('mylinks').style.display = 'block';
          document.getElementById('navbar__icon-hamburger').style.display =
            'none';
          document.getElementById('navbar__icon-times').style.display = 'none';
        } else {
          document.getElementById('mylinks').style.display = 'none';
          document.getElementById('navbar__icon-hamburger').style.display =
            'block';
          document.getElementById('navbar__icon-times').style.display = 'none';
        }
      }
      window.addEventListener('resize', defaultDisplay);
    </script>
      `,
  };

  setFinalCode({
    html: responsive ? code.html + code.responsive : code.html,
    style: hover ? code.style + code.hover : code.style,
  });
};

export default Nav;

