import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <Header />
    <Outlet />
        main layout here!
    <Footer />
    </>
  )
}

export default Layout