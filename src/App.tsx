import React, { useState } from "react";
import logo from "./logo.svg";
import "./index.css";
import { IconButton } from "./components/IconButton";
import { ArrowIcon } from "./shared/icons/ArrowIcon";
import { ClipboardIcon } from "./shared/icons/ClipboardIcon";
type Tab = {
  label: string;
  value: string;
};
const tabs = [
  {
    label: 'A-Z',
    value: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  },
  {
    label: 'a-z',
    value: 'abcdefghijklmnopqrstuvwxyz'
  },
  {
    label: '0-9',
    value: '0123456789'
  },
  {
    label: '!@#$%',
    value: '!@#$%'
  }
];

const App = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(2);
  const [activetabs, setActiveTabs] = useState(tabs.slice(0, 2).map((tab) => tab.value));

  const copyPassword = () => {
    navigator.clipboard.writeText(password);
  };
  const generatePassword = () => {
    const chars = activetabs.join('');

    let pass = '';

    for(let i=0; i<length;i++){
      pass+= chars[Math.floor(Math.random()*chars.length)]
    }
    setPassword(pass)
  };

  const handleSubmit = (tab:Tab) => {
    if (activetabs.includes(tab.value)) {
      setActiveTabs((prev) => prev.filter(t => t !== tab.value));
    } else {
      setActiveTabs((prev) => [...prev, tab.value]);
    }
  };


  
  return (
    <div className="flex min-h-screen items-center justify-center text-white">
      <div className="bg-gray-700 p-4 rounded-xl min-w-96">
        <div className="flex justify-between items-center bg-gray-600 shadow-md border border-gray-500 relative px-3 py-3 rounded-xl text-center">
          <IconButton className="" onClick={generatePassword}>
            <ArrowIcon className="w-5" />
          </IconButton>

          <span className="h-6">{password}</span>

          <IconButton className="" onClick={copyPassword}>
            <ClipboardIcon className="w-5" />
          </IconButton>
        </div>
        <div className="flex mt-2 gap-1">
          <div className="w-full h-1.5 rounded-full bg-gray-500"></div>
          <div className="w-full h-1.5 rounded-full bg-gray-500"></div>
          <div className="w-full h-1.5 rounded-full bg-gray-500"></div>
          <div className="w-full h-1.5 rounded-full bg-gray-500"></div>
        </div>

        <div className="bg-gray-600 border-gray-600 flex justify-between mt-2 gap-3 p-3 rounded-xl">
          <h2 className="pl-2.5 font-bold text-lg">Length</h2>
          <span className="text-2xl font-medium ml-auto pr-2">{length}</span>
          <button onClick={() => setLength(prev => prev=== 1 ? prev : prev - 1)}className="bg-gray-500 active:scale-95 transition w-9 h-9 rounded-full">-</button>
          <button onClick={() => setLength(prev => prev + 1)}className="bg-gray-500 active:scale-95 transition w-9 h-9 rounded-full">+</button>
        </div>

        <div className="flex mt-3 border border-gray-500 rounded-xl shadow-md rounded=xl overflow-hidden">
          {
            tabs.map((tab, index) => (
              <button
                onClick={() => handleSubmit(tab)}
                className={`bg-gray-600 text-mb font-bold flex-1 items-center py-2 ${activetabs.includes(tab.value) ? 'bg-gray-500' : 'bg-gray-600'}`}
                key={index}
              >
                {tab.label}
              </button>
            ))
          }
        </div>

      </div>
    </div>
  );
};

export default App;
