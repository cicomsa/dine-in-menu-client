import App from 'next/app'
import Head from 'next/head'
import React from 'react'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <Head>
          <title>Main Project</title>
        </Head>
        <Component {...pageProps} />
      </>
    )
  }
}

export default MyApp

