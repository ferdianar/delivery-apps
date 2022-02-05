import { NextPage } from 'next'
import React from 'react'

const SectionLayouts: NextPage = ({ children }) => {
       return (
              <React.Fragment>
                     <div className="w-full px-6 md:px-28">
                            {children}
                     </div>
              </React.Fragment>)
}

export default SectionLayouts
