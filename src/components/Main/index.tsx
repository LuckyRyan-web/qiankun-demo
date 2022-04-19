/**
 * @author liuyuan
 * @date 2022-04-19 00:08
 * @since 0.1.0
 */

import React, { PropsWithChildren } from 'react'
//import classnames from 'classnames'
import style from './style.module.scss'
import { Layout, Menu, Button } from 'antd'
import Nav from '@/components/Nav'

interface MainProps {}

const Main: React.FC<PropsWithChildren<MainProps>> = (props) => {
    return (
        <Layout>
            <Layout.Header className={style.header}>
                <Nav />
            </Layout.Header>
            <Layout>
                <Layout.Content>{props.children}</Layout.Content>
            </Layout>
        </Layout>
    )
}

export default React.memo(Main)
