import React, {useState} from 'react';

const InputElement = () => {
  const [inputText, setInputText] = useState('');

  return <div><input 
    onChange={(e) => {
      setInputText(e.target.value)
    }}
    value={inputText}

    placeholder="Enter Some Text" />
    {inputText}
  </div>
};

export default InputElement;