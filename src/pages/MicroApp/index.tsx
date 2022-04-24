/**
 * @author liuyuan
 * @date 2022-04-19 22:42
 * @since 0.1.0
 */

import React, { useEffect, useRef } from 'react'
//import classnames from 'classnames'
//import style from './style.module.scss'
import { loadMicroApp } from 'qiankun'

interface MicroAppProps {}

const MicroApp: React.FC<MicroAppProps> = (props) => {
    const containerRef = useRef(null)

    useEffect(() => {
        const app = loadMicroApp({
            name: 'micro-react',
            entry: 'http://127.0.0.1:7106',
            container: containerRef.current!,
            // props: { brand: 'qiankun' },
        })

        setTimeout(() => {
            app!.update!({ testprops: 123 })
        }, 3000)
    }, [])

    return (
        <>
            <div id='subapp-viewport' />
            <div ref={containerRef} />
        </>
    )
}

export default React.memo(MicroApp)
