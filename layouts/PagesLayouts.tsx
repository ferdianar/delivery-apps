import { NextPage } from 'next'
import React from 'react'
import Navbar from '../components/organism/Navbar'

const PagesLayouts: NextPage = ({ children }) => {
       return (
              <React.Fragment>
                     <Navbar />
                     {children}
              </React.Fragment>
       )
}

export default PagesLayouts
