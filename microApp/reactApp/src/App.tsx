import React from 'react'
// import style from './App.module.scss'
import Index from '@/pages/Index'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
    return (
        <>
            <BrowserRouter
                basename={window.__POWERED_BY_QIANKUN__ ? '/ReactDemo' : '/'}>
                <Routes>
                    <Route path='' element={<Index />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
