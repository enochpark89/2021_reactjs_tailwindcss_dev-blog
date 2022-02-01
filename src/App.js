import React, {useEffect, useState} from 'react';
import ReactMarkdown from 'react-markdown'
import MarkdownPreview from '@uiw/react-markdown-preview';

import styled from 'styled-components';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
// import styles
import './App.css';
import 'github-markdown-css'

// import icons and logos
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library, icon } from '@fortawesome/fontawesome-svg-core'
import { faDesktop, faServer } from '@fortawesome/free-solid-svg-icons'

// import routes
import Home from './routes/Home';

  // front-end
  import Html from './routes/frontend/Html';
  import Css from './routes/frontend/Css';
  import JavaScript from './routes/frontend/JavaScript';
  import ReactPage from './routes/frontend/React';
  import Typescript from './routes/frontend/Typescript';

  // back-end
  import Python from './routes/backend/Python';

  // database
  import Sql from './routes/database/Sql';

const TeachIcon = styled(FontAwesomeIcon)`
margin: 3px 12px;
`;


function App() {
  const file_name = 'reactjs.md';
  const [markdown, setMarkdown] = useState('');


  return (
  <>
    <BrowserRouter>
      <div className="flex flex-col" >
        {/* Header Section */}
        <div className="py-3 pl-3 flex flex-row bg-white border-b-4 border-b-stone-800 text-2xl">
          <h1>Welcome to EnoDev</h1>
          <TeachIcon icon={faDesktop} />  
          <h1>Tech Knowledge Archive</h1>
          <TeachIcon icon={faServer} />
        </div>

        {/* Body Section */}
        <div className="flex flex-row">
          <div className="flex flex-col w-100 items-center basis-2/12 h-screen bg-white ">
            {/* Front-end */}
            <h2 className="bg-emerald-500 w-full p-3 text-xl text-center text-white	">Front-end</h2>
              <ul className="py-3 w-full">
                <li className="p-1">
                  <Link to="html">
                    <button className="h-10 w-full hover:bg-emerald-300">HTML</button>
                  </Link> 
                </li>
                <li className="p-1">
                  <Link to="css">
                    <button className="h-10 w-full hover:bg-emerald-300">CSS</button>
                  </Link>
                </li>
                <li className="p-1">
                  <Link to="javascript">
                    <button className="h-10 w-full hover:bg-emerald-300">JavaScript</button>
                  </Link>
                </li>
                <li className="p-1">
                  <Link to="react">
                    <button className="h-10 w-full hover:bg-emerald-300">ReactJS</button>
                  </Link>
                </li>
                <li className="p-1">
                  <Link to="typescript">
                    <button className="h-10 w-full hover:bg-emerald-300">Typescript</button>
                  </Link>                </li>
              </ul>
            
            {/* Back-end */}
            <h2 className="bg-emerald-500 w-full p-3 text-xl text-center text-white	">Back-end</h2>
              <ul className="py-3 w-full">
                <li className="p-1">
                  <Link to="python">
                    <button className="h-10 w-full hover:bg-emerald-300">Python</button>
                  </Link>
                </li>
                <li className="p-1">
                  <button className="h-10 w-full hover:bg-emerald-300">Ruby</button>
                </li>
                <li className="p-1">
                  <button className="h-10 w-full hover:bg-emerald-300">NodeJS</button>
                </li>
                <li className="p-1">
                  <button className="h-10 w-full hover:bg-emerald-300">NestJS</button>
                </li>
                <li className="p-1">
                  <button className="h-10 w-full hover:bg-emerald-300">GraphQL</button>
                </li>
              </ul>
            
            {/* DB */}
            <h2 className="bg-emerald-500 w-full p-3 text-xl text-center text-white	">Database </h2>
              <ul className="py-3 w-full">
                <li className="p-1">
                  <Link to="sql">
                    <button className="h-10 w-full hover:bg-emerald-300">SQL</button>
                  </Link>
                </li>
                <li className="p-1">
                  <button className="h-10 w-full hover:bg-emerald-300">mySQL</button>
                </li>
                <li className="p-1">
                  <button className="h-10 w-full hover:bg-emerald-300">noSQL</button>
                </li>
              </ul>
            
            {/* Phone App */}
            <h2 className="bg-emerald-500 w-full p-3 text-xl text-center text-white	">Phone App </h2>
              <ul className="py-3 w-full">
                <li className="p-1">
                  <button className="h-10 w-full hover:bg-emerald-300">React Native</button>
                </li>
              </ul>
           {/* System Admin */}
           <h2 className="bg-emerald-500 w-full p-3 text-xl text-center text-white	">System Admin.</h2>
              <ul className="py-3 w-full">
                <li className="p-1">
                  <button className="h-10 w-full hover:bg-emerald-300">Azure</button>
                </li>
                <li className="p-1">
                  <button className="h-10 w-full hover:bg-emerald-300">Network</button>
                </li>
                <li className="p-1">
                  <button className="h-10 w-full hover:bg-emerald-300">Cloud</button>
                </li>
              </ul>
          
          {/* DevOps */}
          <h2 className="bg-emerald-500 w-full p-3 text-xl text-center text-white	">DevOps</h2>
          </div>
          
        {/* Content Area */}
        <div className="p-5 basis-10/12 h-screen ">
          <Routes>
            {/* Front-end */}
            <Route path="/" element={<Home />} />
            <Route path="/html" element={<Html />}/>
            <Route path="/css" element={<Css />}/>
            <Route path="/javascript" element={<JavaScript />}/>
            <Route path="/react" element={<ReactPage />}/>
            <Route path="/typescript" element={<Typescript />}/>
            
            {/* Back-end */}
            <Route path="/python" element={<Python />} />

            {/* Database */}
            <Route path="/sql" element={<Sql />}/>

          </ Routes>
        </div>
      </div> 
    </div>
  </BrowserRouter>
</> 
  );
}

export default App;
