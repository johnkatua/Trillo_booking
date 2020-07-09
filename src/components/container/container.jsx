import React from 'react'

import './container.scss';
import Header from '../header/header';
import Content from '../content/content';

const Container = () => {
  return (
    <div className='container'>
      <Header />
      <Content />
    </div>
  )
}
export default Container