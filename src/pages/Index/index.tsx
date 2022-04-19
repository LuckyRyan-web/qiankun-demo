/**
 * @author liuyuan
 * @date 2022-04-10 22:35
 * @since 0.1.0
 */

import React, { useMemo, useState } from 'react'
// import classnames from 'classnames'
import style from './style.module.scss'
// import logo from './logo.svg'
import { Layout, Menu, Button } from 'antd'
import Nav from '@/components/Nav'

interface IndexProps {}

const Index: React.FC<IndexProps> = (props) => {
    return (
        <Layout>
            <Layout.Header className={style.header}>
                <Nav />
            </Layout.Header>
            <Layout>
                <Layout.Sider className={style.sidebar}>
                    <Menu
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode='inline'>
                        <Menu.SubMenu key='sub1' title='Navigation One'>
                            <Menu.ItemGroup key='g1' title='Item 1'>
                                <Menu.Item key='1'>Option 1</Menu.Item>
                                <Menu.Item key='2'>Option 2</Menu.Item>
                            </Menu.ItemGroup>
                            <Menu.ItemGroup key='g2' title='Item 2'>
                                <Menu.Item key='3'>Option 3</Menu.Item>
                                <Menu.Item key='4'>Option 4</Menu.Item>
                            </Menu.ItemGroup>
                        </Menu.SubMenu>
                    </Menu>
                </Layout.Sider>
                <Layout.Content className={style.content}>
                    <Button type='primary'>React Content</Button>
                </Layout.Content>
            </Layout>
        </Layout>
        // <div className={style.App}>
        //     <header className={style.AppHeader}>
        //         <img src={logo} className={style.AppLogo} alt="logo" />
        //         <p>
        //             Edit <code>src/App.tsx</code> and save to reload.
        //         </p>
        //         <a
        //             className={style.AppLink}
        //             href="https://reactjs.org"
        //             target="_blank"
        //             rel="noopener noreferrer">
        //             Learn React
        //         </a>
        //     </header>
        // </div>
    )
}

export default React.memo(Index)
