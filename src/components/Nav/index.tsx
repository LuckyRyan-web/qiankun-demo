/**
 * 顶部导航栏
 * @author liuyuan
 * @date 2022-04-17 23:44
 * @since 0.1.0
 */

import React, { useMemo, useState, useCallback } from 'react'
//import classnames from 'classnames'
//import style from './style.module.scss'
import { Menu } from 'antd'
import { useNavigate, useLocation } from 'react-router-dom'

interface NavProps {}

const Nav: React.FC<NavProps> = (props) => {
    const [currentApp, setCurrentApp] = useState('React')

    const navigate = useNavigate()

    const location = useLocation()

    const apps = useMemo(() => {
        return [
            {
                label: 'React',
                value: 'React',
                route: '/',
            },
            {
                label: 'Vue',
                value: 'Vue',
                route: '/vue',
            },
            {
                label: 'microApp_Vue',
                value: 'microApp_Vue',
                route: '/app-vue-vite',
            },
        ]
    }, [])

    const switchRouter = useCallback(
        (route: string) => {
            if (route !== location.pathname) {
                const location = apps.find((v) => v.value === route)
                if (location) {
                    console.log(location)

                    setCurrentApp(location.value)
                    navigate(location.route)
                }
            }
        },
        [apps, navigate, currentApp, setCurrentApp],
    )

    return (
        <>
            <Menu
                mode='horizontal'
                onClick={(e) => {
                    switchRouter(e.key)
                }}
                selectedKeys={[currentApp]}>
                {apps.map((v) => (
                    <Menu.Item key={v.value}>{v.label}</Menu.Item>
                ))}
            </Menu>
        </>
    )
}

export default React.memo(Nav)
