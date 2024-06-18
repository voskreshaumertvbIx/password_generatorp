import React, { useState } from "react";
import logo from "./logo.svg";
import "./index.css";
import { IconButton } from "./components/IconButton";
import { ArrowIcon } from "./shared/icons/ArrowIcon";
import { ClipboardIcon } from "./shared/icons/ClipboardIcon";

const App = () => {
  const [password, setPassword] = useState("");

  const copyPassword = () => {};
  const generatePassword = () => {};

  return (
    <div className="flex min-h-screen items-center justify-center text-white">
      <div className="bg-gray-700 p-4 rounded-xl min-w-96">
        <div className="flex justify-between items-center bg-gray-600 shadow-md border border-gray-500 relative px-3 py-3 rounded-xl text-center">
          <IconButton className="" onClick={generatePassword}>
            <ArrowIcon className="w-5" />
          </IconButton>

          <span className="h-6">{password} </span>

          <IconButton className="" onClick={copyPassword}>
            <ClipboardIcon className="w-5" />
          </IconButton>
          </div>
          <div className="flex mt-2 gap-1">
            <div className="w-full h-1.5 rounded-full bg-gray-500"></div>
            <div className="w-full h-1.5rounded-full bg-gray-500"></div>
            <div className="w-full h-1.5 rounded-full bg-gray-500"></div>
            <div className="w-full h-1.5 rounded-full bg-gray-500"></div>
          </div>
        
      </div>
    </div>
  );
};

export default App;
