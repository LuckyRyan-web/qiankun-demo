/**
 * @author liuyuan
 * @date 2022-04-24 21:54
 * @since 0.1.0
 */

import React, { useEffect, useRef } from 'react'
//import classnames from 'classnames'
//import style from './style.module.scss'
import Nav from '@/components/Nav'
import { loadMicroApp } from 'qiankun'

interface ReactDemoProps {}

const ReactDemo: React.FC<ReactDemoProps> = (props) => {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (containerRef.current) {
            loadMicroApp({
                name: 'reactApp',
                entry: 'http://localhost:9000',
                container: containerRef.current,
                props: { brand: 'qiankun' },
            })
        }
    }, [])

    return (
        <div>
            <Nav />
            <div ref={containerRef}></div>
        </div>
    )
}

export default React.memo(ReactDemo)
