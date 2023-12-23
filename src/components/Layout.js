import React from 'react'
import Home from '../Home'
import { Container } from '@mui/system'
import Footer from './Footer'
const Layout = ({children}) => {
  return (
    <>
     <Home/>
    <div>{children}</div>
    <Footer/>
     </>
  )
}
export default Layout
