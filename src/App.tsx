import React from 'react'
// import style from './App.module.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'antd/dist/antd.less'

import Index from '@/pages/Index'
import ReactDemo from '@/pages/ReactDemo'

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='' element={<Index />}></Route>
                    <Route path='/ReactDemo' element={<ReactDemo />}></Route>
                    {/* <Route path='/micro-react'></Route> */}
                </Routes>
            </BrowserRouter>

            <div id='subapp-viewport'></div>
        </div>
    )
}

export default App
