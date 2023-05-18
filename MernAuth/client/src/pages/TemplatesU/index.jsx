import React, { useEffect } from 'react';
import './index.css';
import Template from '../../parts/TemplateCard';
import axios from 'axios';

const Templates = [
  {
    id: 1,
    name: 'Futuristic Portfolio',
    category: 'Portfolio',
    image: 'https://i.ibb.co/N6j1wgN/Portfolio-Web.jpg',
    description:
      'A Frontend Developer Portolio, including details about me section, my skills, my projects and a contact form.',
    link: '/dashboard/Templates/PortfolioWeb',
  },
  {
    id: 2,
    name: 'FoodSite',
    category: 'eCommerce',
    image: 'https://i.ibb.co/qd9587J/FoodSite.jpg',
    description:
      'A Website for a Food Delivery Service, including a home section, a menu section, a contact section and a gallery section.',
    link: '/dashboard/Templates/FoodSite',
  },
  {
    id: 3,
    name: 'iBlog',
    category: 'Blog',
    image: 'https://i.ibb.co/p3n7JGX/iblog.jpg',
    description:
      'A blog site with various sections for the user to read and interact with.',
    link: '/dashboard/Templates/iBlog',
  },
];

function Index() {
  const [templates, setTemplates] = React.useState(Templates);

  useEffect(() => {}, []);

  return (
    <div>
      <div className='categories'>
        <h2 className='THeading'>Categories</h2>
        <ul>
          <li>
            <a
            
              href='#'
              onClick={() => {
                setTemplates(Templates);
              }}>
              All
            </a>
          </li>
          <li>
            <a
              href='#'
              onClick={() => {
                setTemplates(
                  Templates.filter(
                    (template) => template.category === 'Portfolio'
                  )
                );
              }}>
              Portfolio
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setTemplates(
                  Templates.filter(
                    (template) => template.category === 'eCommerce'
                  )
                );
              }}
              href='#'>
              eCommerce
            </a>
          </li>
          <li>
            <a
              href='#'
              onClick={() => {
                setTemplates(
                  Templates.filter((template) => template.category === 'Blog')
                );
              }}>
              Blog
            </a>
          </li>
        </ul>
      </div>
      <div className='templates'>
        {templates.map((template) => (
          <Template data={template} />
        ))}
      </div>
    </div>
  );
}

export default Index;
