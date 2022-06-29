import React, {useState} from 'react';
import { ToastMessage, toast } from './components/Toast/ToastMessage';
import './App.css';

function App() {
  const [toasts, setToasts] = useState([]);

  const handleOnSuccess = () => {
    toast.success(toasts, setToasts, 'This is Success message.');
  }

  const handleOnError = () => {
    toast.error(toasts, setToasts, 'This is Error message.');
  }

  const handleOnWarn = () => {
    toast.warn(toasts, setToasts, 'This is Warning message.');
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
