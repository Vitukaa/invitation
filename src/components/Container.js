import React from 'react'
import '../styles/Container.scss'
import PageWrapper from './PageWrapper'

export default function Container({ children }) {
  return (
    <PageWrapper>
      <div className='container'>
        {children}
      </div>
    </PageWrapper>
  )
}
