import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import AddHTML from './components/AddHTML';
import LearnToCode from './components/LearnToCode';
import LearnHTML from './components/LearnHTML';
import TutorialContent from './parts/TutorialContent';
import Editor from './components/Editor';


const router = createBrowserRouter([
  {
    path: '/',
    element: <LearnToCode />,
  },
  {
    path: '/html',
    element: <LearnHTML />,
    children: [
      {
        path: ':title',
        element: <TutorialContent />,
      },
      {
        path: ':title/try',
        element: <Editor />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
