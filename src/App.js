import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library, icon } from '@fortawesome/fontawesome-svg-core'
import { faDesktop, faServer } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components';

const TeachIcon = styled(FontAwesomeIcon)`
margin: 3px 12px;
`;


function App() {

  const test = () => {
    console.log('test');
  }

  return (
    <>
      <div className="flex flex-col" >
        <div className="pl-3 flex flex-row bg-white border-b-4 border-b-stone-800 text-2xl">

          <h1>Welcome to EnoDev</h1>
          <TeachIcon icon={faDesktop} />
          
          <h1>Tech Knowledge Archive</h1>
          <TeachIcon icon={faServer} />
        </div>
        <div className="flex flex-row">
          <div className="flex flex-col items-center basis-1/4 h-screen bg-white border-r-4 border-stone-800">
            <h2 className="bg-green-300 w-full p-3 text-center">Front-End</h2>
            <ul className="py-3">
              <li className="p-1">
                <button className="h-10 w-48 rounded-3xl hover:bg-green-200">HTML</button>
              </li>
              <li className="p-1">
                <button className="h-10 w-48 rounded-3xl hover:bg-green-200">CSS</button>
              </li>
              <li className="p-1">
                <button className="h-10 w-48 rounded-3xl hover:bg-green-200">JavaScript</button>
              </li>
              <li className="p-1">
                <button className="h-10 w-48 rounded-3xl hover:bg-green-200">ReactJS</button>
              </li>
            </ul>
            <h2 className="bg-green-300 w-full p-3 text-center">Back-End</h2>
            <h3>No-Code Tools</h3>
            <h3>DevOps</h3>
            <h3>Sys. Admin.</h3>
          </div>
          <div className="basis-3/4 h-screen bg-green-100">
            Content
          </div>
        </div>
      </div>
    </> 
  );
}

export default App;
