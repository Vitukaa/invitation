import React from 'react'
import '../styles/PageWrapper.scss'

export default function PageWrapper({ children }) {
  return (
    <div className='page-wrapper'>
      {children}
    </div>
  )
}
