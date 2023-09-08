import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {NextUIProvider} from "@nextui-org/react";
import { Provider } from 'react-redux'
import store from '../store/store.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      <Provider store = {store}>
    <App />
      </Provider>
    </NextUIProvider>

  </React.StrictMode>,
)
