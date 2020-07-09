import React from 'react'

import './content.scss'
import Sidebar from '../sidebar/sidebar'
import Main from '../main/main'

const Content = () =>{
  return (
    <div className='content'>
      <Sidebar />
      <Main />
    </div>
  )
};

export default Content;
