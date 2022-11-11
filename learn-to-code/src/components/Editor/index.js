import React, { useRef, useEffect, useState } from 'react';
import './index.css';
import axios from 'axios';

function Editor() {
  let title = window.location.href.split('/')[4];
  const [data, setData] = useState({});

  const btnRef = useRef();
  const iframeRef = useRef();
  const firstRef = useRef();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/gethtmlschemas/${title}`)
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      });

    const element = btnRef.current;
    element.addEventListener('click', () => {
      const html = firstRef.current.textContent;
      iframeRef.current.srcdoc = html;
    });

    firstRef.current.addEventListener('keyup', () => {
      const html = firstRef.current.textContent;
      iframeRef.current.srcdoc = html;
    });

    firstRef.current.addEventListener('paste', () => {
      const html = firstRef.current.textContent;
      iframeRef.current.srcdoc = html;
    });
  }, []);

  return (
    <>
      <div class='main-editor'>
        <div class='editor-first' ref={firstRef} contentEditable='true'>
          {data.example ? (
            data.example.split(',').map((ex) => {
              return <p>{ex}</p>;
            })
          ) : (
            <p>There is no example for this tag</p>
          )}
        </div>
        <iframe class='editor-second' ref={iframeRef}></iframe>
      </div>
      <button class='editor-btn' ref={btnRef}>
        Run
      </button>
    </>
  );
}

export default Editor;
