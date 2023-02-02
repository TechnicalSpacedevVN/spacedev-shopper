import React from 'react'
import { Outlet } from 'react-router-dom'

export const MainLayout = () => {
    return (
        <div>
            <header>Header</header>
            <Outlet />
            <footer>Footer</footer>
        </div>
    )
}
