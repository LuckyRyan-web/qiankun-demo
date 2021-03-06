import React from 'react'
import ReactDOM from 'react-dom'
import './index.module.scss'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { createRoot } from 'react-dom/client'
import { registerMicroApps, start } from 'qiankun'

// ReactDOM.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>,
//     document.getElementById('root')
// )

registerMicroApps([
    {
        name: 'reactApp',
        entry: 'http://localhost:9000',
        container: '#subapp-viewport',
        activeRule: '/micro-react',
    },
])

start()

const rootElement = document.getElementById('root')
const root = createRoot(rootElement!)

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
