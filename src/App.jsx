import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { tab } from '@testing-library/user-event/dist/tab';

function App() {

  const [tabs, setTabs] = useState([{ label: "Tab 1", content: "Tab 1 content here" }, { label: "Tab 2", content: "Tab 2 content here" }, { label: "Tab 3", content: "Tab 3 content here" }]);

  //       destructure (line 36)
  //            |     method used to set new state (line 19)
  //            |               |            default state (line 13)
  const [displayContent, setDisplayContent] = useState() //anything that is dynamic needs a state variable to alter. 
  //      destructure   method used to set new state 

  const selectTabButton = (singletabvariable) => {
    console.log(singletabvariable.content)
    setDisplayContent(singletabvariable.content)
  }

  return (
    <div className="App">
      {
        tabs.map((singletab, index) => {
          return (
            <div className="tabdiv" key={index}>
              <button onClick={() => selectTabButton(singletab)} className='tablabel'>{singletab.label}</button>
              {/* <p>{JSON.stringify(singletab)} </p> */}
              {/* <p>{displayContent}</p> */}
            </div>
          )
        })
      }
      <hr />
      {displayContent}
    </div>
  );
}

export default App;
