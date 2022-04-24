/**
 * @author liuyuan
 * @date 2022-04-24 21:54
 * @since 0.1.0
 */

import React, { useEffect, useRef, useState } from 'react'
//import classnames from 'classnames'
//import style from './style.module.scss'
import Nav from '@/components/Nav'
import { loadMicroApp, MicroApp } from 'qiankun'
import { useUnmount, useMount } from 'ahooks'

interface ReactDemoProps {}

const ReactDemo: React.FC<ReactDemoProps> = (props) => {
    const containerRef = useRef<HTMLDivElement>(null)

    const [microApp, setMicroApp] = useState<MicroApp | null>()

    useMount(() => {
        console.log('useMount')
        if (containerRef.current) {
            console.log('containerRef.current', containerRef.current)
            const res = loadMicroApp({
                name: 'reactApp',
                entry: 'http://localhost:9000',
                container: containerRef.current,
                props: { brand: 'qiankun' },
            })
            setMicroApp(res)
        }
    })

    useUnmount(() => {
        console.log('useUnmount')
        microApp?.unmount()
    })

    return (
        <div>
            <Nav />
            <div ref={containerRef}></div>
        </div>
    )
}

export default React.memo(ReactDemo)
