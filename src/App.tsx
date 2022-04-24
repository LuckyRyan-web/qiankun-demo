import React from 'react'
// import style from './App.module.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'antd/dist/antd.less'

import Index from '@/pages/Index'
import Vue from '@/pages/Vue'

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='' element={<Index />}></Route>
                    {/* <Route path='/vue' element={<Vue />}></Route> */}
                    {/* <Route path='/micro-react'></Route> */}
                </Routes>
            </BrowserRouter>

            <div id='subapp-viewport'></div>
        </div>
    )
}

export default App
