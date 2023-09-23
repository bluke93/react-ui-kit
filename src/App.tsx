import { useState } from 'react';
import './App.scss';
import { Button } from './components/Base/Button/Button';

function App() {
  const [isDisabled, setIsDisabled] = useState(false);

  function toggleDisabled(){
    console.log('ciao')
    setIsDisabled(!isDisabled);
  }

  return (
    <>
    <h1>Manage your settings</h1>
    <div>
      <Button label="Primary button" appearance='primary' disabled={isDisabled} size="medium"/>
    </div>
    <div>
      <Button label="Secondary button" appearance='secondary' onClick={() => toggleDisabled()}/>
    <br/>
    </div>
    </>
  )
}

export default App
