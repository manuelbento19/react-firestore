import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss';
import '@radix-ui/themes/styles.css';
import { Theme} from '@radix-ui/themes';
import { ContextProvider } from './context';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Theme accentColor='tomato' appearance='light'>
      <ContextProvider>
        <App/>
      </ContextProvider>
    </Theme>
  </React.StrictMode>,
)
