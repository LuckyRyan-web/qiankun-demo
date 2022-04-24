import React from 'react'
import ReactDOM from 'react-dom'
import './index.module.scss'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { createRoot } from 'react-dom/client'
import './public-paths.js'

// ReactDOM.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>,
//     document.getElementById('root')
// )

const getRoot = (props: any) => {
    const { container } = props

    console.log('container', props)

    const containerElement = container?.querySelector('#root')
    const rootElement = document.getElementById('root')

    const root = createRoot(
        container && Object.keys(props).length ? containerElement : rootElement,
    )

    return root
}

const render = (props: any) => {
    const root = getRoot(props)

    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
    )
}

if (!window.__POWERED_BY_QIANKUN__) {
    render({})
}

export async function bootstrap() {
    console.log('[react16] react app bootstraped')
}

export async function mount(props: any) {
    console.log('[react16] props from main framework')
    render(props)
}

export async function unmount(props: any) {
    // const root = getRoot(props)

    // root.unmount()
    console.log('props', props)
    const { container } = props
    ReactDOM.unmountComponentAtNode(
        container
            ? container.querySelector('#root')
            : document.querySelector('#root'),
    )
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
