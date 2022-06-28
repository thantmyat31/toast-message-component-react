import React, {useState} from 'react';
import { ToastMessage } from './components/Toast/ToastMessage';
import './App.css';

function App() {
  const [toasts, setToasts] = useState([]);

  const handleOnSuccess = () => {
    setToasts([...toasts, {text: 'Hello this is success message', condition: 'success'}]);
  }

  const handleOnError = () => {
    setToasts([...toasts, {text: 'This is Error message', condition: 'error'}]);
  }

  const handleOnWarn = () => {
    setToasts([...toasts, {text: 'This is Warning message', condition: 'warn'}]);
  }

  return (
    <div className="App">
      <ToastMessage toasts={toasts} setToasts={setToasts} />
      <button onClick={handleOnSuccess}>Success</button>
      <button className="error" onClick={handleOnError}>Error</button>
      <button className="warn" onClick={handleOnWarn}>Warn</button>
    </div>
  );
}

export default App;
