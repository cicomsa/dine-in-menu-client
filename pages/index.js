import React, { Component } from 'react'
import Pages from '@components/pages'
import App from '../src/App'

const Index = ({ handle }) => {
  return (
    <App>
      <Pages handle={handle} />
    </App>
  )
}

export default Index

Index.getInitialProps = async ({ query }) => {
  return {
    handle: query.handle
  }
}