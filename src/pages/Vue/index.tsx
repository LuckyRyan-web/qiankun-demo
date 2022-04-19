/**
 * @author liuyuan
 * @date 2022-04-18 23:20
 * @since 0.1.0
 */

import React from 'react'
//import classnames from 'classnames'
import style from './style.module.scss'
import { Layout, Menu, Button } from 'antd'
import Nav from '@/components/Nav'
import Main from '@/components/Main'

interface VueProps {}

const Vue: React.FC<VueProps> = (props) => {
    return (
        <Main>
            <Button type='primary'>Vue</Button>
        </Main>
    )
}

export default React.memo(Vue)
